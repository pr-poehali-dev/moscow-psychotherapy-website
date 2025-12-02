import json
import os
import hashlib
import secrets
from datetime import datetime, timedelta
from typing import Dict, Any, Optional
import psycopg2
from psycopg2.extras import RealDictCursor

def hash_password(password: str) -> str:
    '''Хеширование пароля с использованием SHA-256'''
    return hashlib.sha256(password.encode()).hexdigest()

def generate_token() -> str:
    '''Генерация случайного токена для сессии'''
    return secrets.token_urlsafe(32)

def get_db_connection():
    '''Подключение к базе данных'''
    database_url = os.environ.get('DATABASE_URL')
    return psycopg2.connect(database_url, cursor_factory=RealDictCursor)

def check_membership_paid(user_id: int, year: int) -> bool:
    '''Проверка оплаты членства за текущий год'''
    conn = get_db_connection()
    try:
        cursor = conn.cursor()
        cursor.execute(
            "SELECT payment_status FROM membership_payments WHERE user_id = %s AND payment_year = %s",
            (user_id, year)
        )
        result = cursor.fetchone()
        return result is not None and result['payment_status'] == 'completed'
    finally:
        conn.close()

def handler(event: Dict[str, Any], context: Any) -> Dict[str, Any]:
    '''
    Business: Авторизация пользователей и управление профилем
    Args: event - dict с httpMethod, body, queryStringParameters
          context - объект с атрибутами request_id, function_name
    Returns: HTTP response dict
    '''
    method: str = event.get('httpMethod', 'GET')
    
    if method == 'OPTIONS':
        return {
            'statusCode': 200,
            'headers': {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'GET, POST, PUT, OPTIONS',
                'Access-Control-Allow-Headers': 'Content-Type, X-Auth-Token',
                'Access-Control-Max-Age': '86400'
            },
            'body': ''
        }
    
    headers = {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
    }
    
    conn = get_db_connection()
    
    try:
        if method == 'POST':
            body_data = json.loads(event.get('body', '{}'))
            action = body_data.get('action')
            
            # Авторизация
            if action == 'login':
                email = body_data.get('email', '').strip().lower()
                password = body_data.get('password', '')
                
                if not email or not password:
                    return {
                        'statusCode': 400,
                        'headers': headers,
                        'body': json.dumps({'error': 'Email и пароль обязательны'})
                    }
                
                cursor = conn.cursor()
                cursor.execute(
                    "SELECT id, email, full_name, password_hash, is_active FROM users WHERE email = %s",
                    (email,)
                )
                user = cursor.fetchone()
                
                if not user or user['password_hash'] != hash_password(password):
                    return {
                        'statusCode': 401,
                        'headers': headers,
                        'body': json.dumps({'error': 'Неверный email или пароль'})
                    }
                
                if not user['is_active']:
                    return {
                        'statusCode': 403,
                        'headers': headers,
                        'body': json.dumps({'error': 'Аккаунт деактивирован'})
                    }
                
                # Проверка оплаты за текущий год
                current_year = datetime.now().year
                is_paid = check_membership_paid(user['id'], current_year)
                
                token = generate_token()
                
                return {
                    'statusCode': 200,
                    'headers': headers,
                    'body': json.dumps({
                        'token': token,
                        'user': {
                            'id': user['id'],
                            'email': user['email'],
                            'full_name': user['full_name'],
                            'is_paid': is_paid
                        }
                    })
                }
            
            # Регистрация
            elif action == 'register':
                email = body_data.get('email', '').strip().lower()
                password = body_data.get('password', '')
                full_name = body_data.get('full_name', '').strip()
                
                if not email or not password or not full_name:
                    return {
                        'statusCode': 400,
                        'headers': headers,
                        'body': json.dumps({'error': 'Email, пароль и ФИО обязательны'})
                    }
                
                cursor = conn.cursor()
                
                # Проверка существующего email
                cursor.execute("SELECT id FROM users WHERE email = %s", (email,))
                if cursor.fetchone():
                    return {
                        'statusCode': 409,
                        'headers': headers,
                        'body': json.dumps({'error': 'Пользователь с таким email уже существует'})
                    }
                
                # Создание пользователя
                password_hash = hash_password(password)
                cursor.execute(
                    "INSERT INTO users (email, password_hash, full_name) VALUES (%s, %s, %s) RETURNING id, email, full_name",
                    (email, password_hash, full_name)
                )
                new_user = cursor.fetchone()
                conn.commit()
                
                token = generate_token()
                
                return {
                    'statusCode': 201,
                    'headers': headers,
                    'body': json.dumps({
                        'token': token,
                        'user': {
                            'id': new_user['id'],
                            'email': new_user['email'],
                            'full_name': new_user['full_name'],
                            'is_paid': False
                        }
                    })
                }
        
        elif method == 'GET':
            # Получение профиля пользователя
            auth_token = event.get('headers', {}).get('X-Auth-Token')
            if not auth_token:
                return {
                    'statusCode': 401,
                    'headers': headers,
                    'body': json.dumps({'error': 'Требуется авторизация'})
                }
            
            # В реальном приложении здесь проверка токена из БД/Redis
            # Для упрощения получаем user_id из query параметров
            params = event.get('queryStringParameters', {})
            user_id = params.get('user_id')
            
            if not user_id:
                return {
                    'statusCode': 400,
                    'headers': headers,
                    'body': json.dumps({'error': 'user_id обязателен'})
                }
            
            cursor = conn.cursor()
            cursor.execute(
                "SELECT id, email, full_name, phone, city, specialization, education, experience_years, methods, age_groups, work_format, profile_photo_url, about_me FROM users WHERE id = %s",
                (user_id,)
            )
            user = cursor.fetchone()
            
            if not user:
                return {
                    'statusCode': 404,
                    'headers': headers,
                    'body': json.dumps({'error': 'Пользователь не найден'})
                }
            
            # Проверка оплаты
            current_year = datetime.now().year
            is_paid = check_membership_paid(int(user_id), current_year)
            
            return {
                'statusCode': 200,
                'headers': headers,
                'body': json.dumps({
                    'user': dict(user),
                    'is_paid': is_paid
                })
            }
        
        elif method == 'PUT':
            # Обновление профиля
            body_data = json.loads(event.get('body', '{}'))
            user_id = body_data.get('user_id')
            
            if not user_id:
                return {
                    'statusCode': 400,
                    'headers': headers,
                    'body': json.dumps({'error': 'user_id обязателен'})
                }
            
            # Поля для обновления
            update_fields = []
            update_values = []
            
            allowed_fields = [
                'full_name', 'phone', 'city', 'specialization', 'education',
                'experience_years', 'methods', 'age_groups', 'work_format',
                'profile_photo_url', 'about_me'
            ]
            
            for field in allowed_fields:
                if field in body_data:
                    update_fields.append(f"{field} = %s")
                    update_values.append(body_data[field])
            
            if not update_fields:
                return {
                    'statusCode': 400,
                    'headers': headers,
                    'body': json.dumps({'error': 'Нет полей для обновления'})
                }
            
            update_fields.append("updated_at = CURRENT_TIMESTAMP")
            update_values.append(user_id)
            
            cursor = conn.cursor()
            query = f"UPDATE users SET {', '.join(update_fields)} WHERE id = %s RETURNING id"
            cursor.execute(query, update_values)
            conn.commit()
            
            return {
                'statusCode': 200,
                'headers': headers,
                'body': json.dumps({'message': 'Профиль обновлен'})
            }
        
        return {
            'statusCode': 405,
            'headers': headers,
            'body': json.dumps({'error': 'Метод не поддерживается'})
        }
    
    finally:
        conn.close()
