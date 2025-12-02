-- Создание таблицы пользователей (действительных членов)
CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    email VARCHAR(255) UNIQUE NOT NULL,
    password_hash VARCHAR(255) NOT NULL,
    full_name VARCHAR(255) NOT NULL,
    phone VARCHAR(50),
    city VARCHAR(100),
    specialization TEXT,
    education TEXT,
    experience_years INTEGER,
    methods TEXT,
    age_groups TEXT,
    work_format TEXT,
    profile_photo_url TEXT,
    about_me TEXT,
    is_active BOOLEAN DEFAULT true,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Создание таблицы платежей за членство
CREATE TABLE membership_payments (
    id SERIAL PRIMARY KEY,
    user_id INTEGER NOT NULL REFERENCES users(id),
    payment_year INTEGER NOT NULL,
    payment_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    amount DECIMAL(10, 2) NOT NULL,
    payment_status VARCHAR(50) DEFAULT 'pending',
    payment_method VARCHAR(50),
    transaction_id VARCHAR(255),
    UNIQUE(user_id, payment_year)
);

-- Создание индексов для оптимизации запросов
CREATE INDEX idx_users_email ON users(email);
CREATE INDEX idx_users_is_active ON users(is_active);
CREATE INDEX idx_payments_user_year ON membership_payments(user_id, payment_year);
CREATE INDEX idx_payments_status ON membership_payments(payment_status);

-- Комментарии к таблицам
COMMENT ON TABLE users IS 'Действительные члены РПА Москва';
COMMENT ON TABLE membership_payments IS 'Платежи за годовое членство (период январь-март)';
COMMENT ON COLUMN membership_payments.payment_status IS 'pending, completed, failed, refunded';