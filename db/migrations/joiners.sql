\c upbear_dev

CREATE TABLE IF NOT EXISTS joiners (
  id SERIAL PRIMARY KEY,
  firstname VARCHAR(255) NOT NULL,
  lastname VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  user_id INT REFERENCES users(id),
  events_id INT REFERENCES events(id)
);