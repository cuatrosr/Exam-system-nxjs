CREATE TABLE IF NOT EXISTS users {
    id SERIAL PRIMARY KEY,
    username VARCHAR (32) NOT NULL UNIQUE,
    password VARCHAR (32) NOT NULL,
    user_type VARCHAR (32) NOT NULL CHECK (user_type value in('teacher' or 'student')),
    created_on TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
}

CREATE TABLE IF NOT EXISTS exams {
    id INTEGER PRIMARY KEY,
    
}