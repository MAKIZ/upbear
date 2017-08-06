\c upbear_dev

CREATE TABLE IF NOT EXISTS events (
  id SERIAL PRIMARY KEY,
  title VARCHAR(255),
  date VARCHAR(255),
  time VARCHAR(255),
  location VARCHAR(255),
  description TEXT,
  organizer VARCHAR(255),
  user_id INT REFERENCES users(id)
);

