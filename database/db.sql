CREATE TABLE IF NOT EXISTS users
(
    id         SERIAL PRIMARY KEY,
    username   VARCHAR(32) NOT NULL UNIQUE,
    password   VARCHAR(32) NOT NULL,
    user_type  VARCHAR(7)  NOT NULL,
    CHECK (user_type IN ('teacher', 'student')),
    created_on TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS exams
(
    id          SERIAL PRIMARY KEY,
    access_code INTEGER     NOT NULL,
    id_creator  INTEGER     NOT NULL,
    title       VARCHAR(32) NOT NULL,
    description VARCHAR(32) NOT NULL,
    CONSTRAINT fk_exams FOREIGN KEY (id_creator) REFERENCES users (id)
);

CREATE TABLE IF NOT EXISTS questions
(
    id                  SERIAL PRIMARY KEY,
    description         VARCHAR(32)   NOT NULL,
    option1             VARCHAR(32)   NOT NULL,
    option2             VARCHAR(32)   NOT NULL,
    option3             VARCHAR(32)   NOT NULL,
    option4             VARCHAR(32)   NOT NULL,
    correct_answer      VARCHAR(32)   NOT NULL,
    question_percentage NUMERIC(3, 2) NOT NULL,
    CHECK (question_percentage >= 0 AND question_percentage < 1),
    id_exam             INTEGER       NOT NULL,
    CONSTRAINT fk_questions FOREIGN KEY (id_exam) REFERENCES exams (id)
);

CREATE TABLE IF NOT EXISTS grades
(
    id      SERIAL PRIMARY KEY,
    id_user INTEGER       NOT NULL,
    id_exam INTEGER       NOT NULL,
    grade   NUMERIC(3, 2) NOT NULL,
    CONSTRAINT fk_grades1 FOREIGN KEY (id_user) REFERENCES users (id),
    CONSTRAINT fk_grades2 FOREIGN KEY (id_exam) REFERENCES exams (id)
);