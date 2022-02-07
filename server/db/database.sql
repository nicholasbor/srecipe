CREATE DATABASE srecipe;

CREATE TABLE users(
    u_id uuid DEFAULT uuid_generate_v4(),
    email VARCHAR(255) NOT NULL,
    username VARCHAR(255) NOT NULL,
    user_password VARCHAR(255) NOT NULL,
    PRIMARY KEY(u_id)
);

CREATE TABLE recipes(
    recipe_id SERIAL,
    u_id UUID,
    recipe_name VARCHAR(255) NOT NULL,
    recipe_description text NOT NULL,
    PRIMARY KEY(recipe_id),
    FOREIGN KEY(u_id) REFERENCES users(u_id)
);

CREATE TABLE steps(
    step_id SERIAL,
    recipe_id integer,
    step_number integer,
    step_description text,
    PRIMARY KEY(step_id),
    FOREIGN KEY(recipe_id) REFERENCES recipes(recipe_id)
);

CREATE TABLE ingredients(
    ingredient_id SERIAL,
    ingredient_name VARCHAR(255) NOT NULL,
    PRIMARY KEY(ingredient_id)
);

CREATE TABLE measurements(
    measurement_id SERIAL,
    measurement VARCHAR(255) NOT NULL,
    PRIMARY KEY(measurement_id)
);

CREATE TABLE ingredient_quantity(
    quantity_id SERIAL,
    recipe_id integer,
    ingredient_id integer,
    measurement_id integer,
    ingredient_quantity integer,
    PRIMARY KEY(quantity_id),
    FOREIGN KEY(recipe_id) REFERENCES recipes(recipe_id),
    FOREIGN KEY(ingredient_id) REFERENCES ingredients(ingredient_id),
    FOREIGN KEY(measurement_id) REFERENCES measurements(measurement_id),
);

