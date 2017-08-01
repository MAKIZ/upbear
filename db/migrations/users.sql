\c upbear_dev

CREATE TABLE IF NOT EXISTS users (
  id SERIAL PRIMARY KEY,
  username VARCHAR(255) UNIQUE NOT NULL,
  password_digest TEXT NOT NULL,
  email VARCHAR(255),
  firstname VARCHAR(255) NOT NULL,
  lastname VARCHAR(255) NOT NULL
);
