import json
import os
from datetime import datetime
from typing import Dict, Any
import psycopg2
from psycopg2.extras import RealDictCursor

def get_db_connection():
    '''Подключение к базе данных'''
    database_url = os.environ.get('DATABASE_URL')
    return psycopg2.connect(database_url, cursor_factory=RealDictCursor)

def handler(event: Dict[str, Any], context: Any) -> Dict[str, Any]:
    '''
    Business: Управление платежами за членство
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
                'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
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
            # Создание платежа
            body_data = json.loads(event.get('body', '{}'))
            user_id = body_data.get('user_id')
            payment_year = body_data.get('payment_year', datetime.now().year)
            amount = body_data.get('amount', 5000.00)  # Дефолтная стоимость членства
            
            if not user_id:
                return {
                    'statusCode': 400,
                    'headers': headers,
                    'body': json.dumps({'error': 'user_id обязателен'})
                }
            
            cursor = conn.cursor()
            
            # Проверка существования пользователя
            cursor.execute("SELECT id FROM users WHERE id = %s", (user_id,))
            if not cursor.fetchone():
                return {
                    'statusCode': 404,
                    'headers': headers,
                    'body': json.dumps({'error': 'Пользователь не найден'})
                }
            
            # Проверка существующего платежа
            cursor.execute(
                "SELECT id, payment_status FROM membership_payments WHERE user_id = %s AND payment_year = %s",
                (user_id, payment_year)
            )
            existing_payment = cursor.fetchone()
            
            if existing_payment and existing_payment['payment_status'] == 'completed':
                return {
                    'statusCode': 409,
                    'headers': headers,
                    'body': json.dumps({'error': 'Членство за этот год уже оплачено'})
                }
            
            # Создание или обновление платежа
            if existing_payment:
                cursor.execute(
                    "UPDATE membership_payments SET payment_status = 'pending', amount = %s, payment_date = CURRENT_TIMESTAMP WHERE id = %s RETURNING id",
                    (amount, existing_payment['id'])
                )
            else:
                cursor.execute(
                    "INSERT INTO membership_payments (user_id, payment_year, amount, payment_status) VALUES (%s, %s, %s, 'pending') RETURNING id",
                    (user_id, payment_year, amount)
                )
            
            payment = cursor.fetchone()
            conn.commit()
            
            # Здесь должна быть интеграция с платежной системой (ЮКасса, Сбербанк и т.д.)
            # Пока возвращаем payment_url для имитации
            payment_url = f"https://payment.example.com/pay/{payment['id']}"
            
            return {
                'statusCode': 201,
                'headers': headers,
                'body': json.dumps({
                    'payment_id': payment['id'],
                    'payment_url': payment_url,
                    'amount': float(amount),
                    'status': 'pending'
                })
            }
        
        elif method == 'GET':
            # Получение истории платежей
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
                "SELECT id, payment_year, payment_date, amount, payment_status, payment_method FROM membership_payments WHERE user_id = %s ORDER BY payment_year DESC",
                (user_id,)
            )
            payments = cursor.fetchall()
            
            return {
                'statusCode': 200,
                'headers': headers,
                'body': json.dumps({
                    'payments': [dict(p) for p in payments]
                }, default=str)
            }
        
        elif method == 'PUT':
            # Обновление статуса платежа (webhook от платежной системы)
            body_data = json.loads(event.get('body', '{}'))
            payment_id = body_data.get('payment_id')
            payment_status = body_data.get('payment_status')
            transaction_id = body_data.get('transaction_id')
            
            if not payment_id or not payment_status:
                return {
                    'statusCode': 400,
                    'headers': headers,
                    'body': json.dumps({'error': 'payment_id и payment_status обязательны'})
                }
            
            cursor = conn.cursor()
            cursor.execute(
                "UPDATE membership_payments SET payment_status = %s, transaction_id = %s WHERE id = %s RETURNING id",
                (payment_status, transaction_id, payment_id)
            )
            conn.commit()
            
            if cursor.rowcount == 0:
                return {
                    'statusCode': 404,
                    'headers': headers,
                    'body': json.dumps({'error': 'Платеж не найден'})
                }
            
            return {
                'statusCode': 200,
                'headers': headers,
                'body': json.dumps({'message': 'Статус платежа обновлен'})
            }
        
        return {
            'statusCode': 405,
            'headers': headers,
            'body': json.dumps({'error': 'Метод не поддерживается'})
        }
    
    finally:
        conn.close()
