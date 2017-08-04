\c upbear_dev

CREATE TABLE IF NOT EXISTS events (
  id SERIAL PRIMARY KEY NOT NULL,
  title VARCHAR(255),
  events_date VARCHAR(255),
  events_time VARCHAR(255),
  events_location VARCHAR(255),
  events_description TEXT,
  organizer VARCHAR(255),
  user_id INT REFERENCES users(id)
);

