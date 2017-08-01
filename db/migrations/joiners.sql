\c upbear_dev

CREATE TABLE IF NOT EXISTS joiners (
  id SERIAL PRIMARY KEY NOT NULL,
  email VARCHAR(255) NOT NULL,
  firstname VARCHAR(255) NOT NULL,
  lastname VARCHAR(255) NOT NULL,
  phone VARCHAR(255),
  events_id INT REFERENCES events(id) NULL
);