\c upbear_dev

CREATE TABLE IF NOT EXISTS events (
  id SERIAL PRIMARY KEY NOT NULL,
  date VARCHAR(255),
  time VARCHAR(255),
  title VARCHAR(255),
  location VARCHAR(255),
  description TEXT,
  contact_email VARCHAR(255),
  contact_phone VARCHAR(255),
  user_id INT REFERENCES users(id)
);

