import json
import os
import smtplib
from email.mime.text import MIMEText
from email.header import Header
from typing import Dict, Any


def handler(event: Dict[str, Any], context: Any) -> Dict[str, Any]:
    '''
    Business: Принимает заявку с сайта (например, на внесение/изменение информации в карточке специалиста)
               и отправляет её письмом на почту организации
    Args: event - dict с httpMethod, body (name, email, phone, message, subject)
          context - объект с атрибутами request_id, function_name
    Returns: HTTP response dict с результатом отправки
    '''
    method: str = event.get('httpMethod', 'GET')

    if method == 'OPTIONS':
        return {
            'statusCode': 200,
            'headers': {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'POST, OPTIONS',
                'Access-Control-Allow-Headers': 'Content-Type',
                'Access-Control-Max-Age': '86400'
            },
            'body': ''
        }

    headers = {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
    }

    if method != 'POST':
        return {
            'statusCode': 405,
            'headers': headers,
            'body': json.dumps({'error': 'Метод не поддерживается'})
        }

    raw_body = event.get('body') or '{}'
    body_data = json.loads(raw_body)

    name = (body_data.get('name') or '').strip()
    email = (body_data.get('email') or '').strip()
    phone = (body_data.get('phone') or '').strip()
    message = (body_data.get('message') or '').strip()
    subject = (body_data.get('subject') or 'Заявка с сайта МО РПА').strip()

    if not name or not message:
        return {
            'statusCode': 400,
            'headers': headers,
            'body': json.dumps({'error': 'Укажите имя и текст сообщения'})
        }

    mail_login = 'rpa.moscow@yandex.ru'
    mail_password = os.environ.get('SMTP_PASSWORD')

    if not mail_password:
        return {
            'statusCode': 500,
            'headers': headers,
            'body': json.dumps({'error': 'Отправка почты временно недоступна'})
        }

    body_text = (
        f'Имя: {name}\n'
        f'Email: {email or "не указан"}\n'
        f'Телефон: {phone or "не указан"}\n\n'
        f'Сообщение:\n{message}'
    )

    msg = MIMEText(body_text, 'plain', 'utf-8')
    msg['Subject'] = Header(subject, 'utf-8')
    msg['From'] = mail_login
    msg['To'] = mail_login
    if email:
        msg['Reply-To'] = email

    with smtplib.SMTP_SSL('smtp.yandex.ru', 465) as server:
        server.login(mail_login, mail_password)
        server.sendmail(mail_login, [mail_login], msg.as_string())

    return {
        'statusCode': 200,
        'headers': headers,
        'body': json.dumps({'success': True})
    }