CREATE DATABASE alltherecipes;

CREATE TABLE users(
    u_id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
    full_name VARCHAR(255) NOT NULL,
    username VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    user_password VARCHAR(255) NOT NULL
);

-- test user
INSERT INTO users(full_name, username, email, user_password) VALUES('nick b', 'Pyxis', 'nick@gmail.com', 'password123');