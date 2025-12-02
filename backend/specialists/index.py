import json
import os
from datetime import datetime
from typing import Dict, Any, List
import psycopg2
from psycopg2.extras import RealDictCursor

def get_db_connection():
    '''Подключение к базе данных'''
    database_url = os.environ.get('DATABASE_URL')
    return psycopg2.connect(database_url, cursor_factory=RealDictCursor)

def handler(event: Dict[str, Any], context: Any) -> Dict[str, Any]:
    '''
    Business: Получение списка специалистов с фильтром по оплате
    Args: event - dict с httpMethod, queryStringParameters
          context - объект с атрибутами request_id, function_name
    Returns: HTTP response dict с списком специалистов
    '''
    method: str = event.get('httpMethod', 'GET')
    
    if method == 'OPTIONS':
        return {
            'statusCode': 200,
            'headers': {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'GET, OPTIONS',
                'Access-Control-Allow-Headers': 'Content-Type',
                'Access-Control-Max-Age': '86400'
            },
            'body': ''
        }
    
    headers = {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
    }
    
    if method != 'GET':
        return {
            'statusCode': 405,
            'headers': headers,
            'body': json.dumps({'error': 'Метод не поддерживается'})
        }
    
    conn = get_db_connection()
    
    try:
        params = event.get('queryStringParameters', {}) or {}
        show_all = params.get('show_all', 'false').lower() == 'true'
        
        current_year = datetime.now().year
        
        if show_all:
            query = '''
                SELECT 
                    u.id,
                    u.full_name,
                    u.city,
                    u.specialization,
                    u.education,
                    u.experience_years,
                    u.methods,
                    u.age_groups,
                    u.work_format,
                    u.profile_photo_url,
                    u.about_me,
                    u.phone,
                    CASE 
                        WHEN mp.payment_status = 'completed' THEN true
                        ELSE false
                    END as is_paid
                FROM users u
                LEFT JOIN membership_payments mp 
                    ON u.id = mp.user_id 
                    AND mp.payment_year = %s
                WHERE u.is_active = true
                ORDER BY u.full_name
            '''
            cursor = conn.cursor()
            cursor.execute(query, (current_year,))
        else:
            query = '''
                SELECT 
                    u.id,
                    u.full_name,
                    u.city,
                    u.specialization,
                    u.education,
                    u.experience_years,
                    u.methods,
                    u.age_groups,
                    u.work_format,
                    u.profile_photo_url,
                    u.about_me,
                    u.phone
                FROM users u
                INNER JOIN membership_payments mp 
                    ON u.id = mp.user_id 
                    AND mp.payment_year = %s
                    AND mp.payment_status = 'completed'
                WHERE u.is_active = true
                ORDER BY u.full_name
            '''
            cursor = conn.cursor()
            cursor.execute(query, (current_year,))
        
        specialists = cursor.fetchall()
        
        return {
            'statusCode': 200,
            'headers': headers,
            'body': json.dumps({
                'specialists': [dict(s) for s in specialists],
                'total': len(specialists),
                'year': current_year
            })
        }
    
    finally:
        conn.close()
