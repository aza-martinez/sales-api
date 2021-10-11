CREATE DATABASE sales_api; 

use sales_api;

CREATE TABLE teams(
  id INTEGER AUTO_INCREMENT PRIMARY KEY, 
  name varchar(255)
);

INSERT INTO teams(id, name) VALUES 
  (null, 'Team_1'),
  (null, 'Team_2');

CREATE TABLE users(
  id INTEGER AUTO_INCREMENT PRIMARY KEY, 
  name varchar(255),
  teamId INTEGER,
  CONSTRAINT fk_teamId FOREIGN KEY (teamId) REFERENCES teams (id) ON UPDATE CASCADE
);

INSERT INTO users(id, name, teamId) VALUES
  (null, 'User 1', 1),
  (null, 'User 2', 1),
  (null, 'User 3', 2),
  (null, 'User 4', 2);
  
  
CREATE TABLE clients(
  id INTEGER AUTO_INCREMENT PRIMARY KEY,
  name varchar(255)
);
 
 
INSERT INTO clients(id, name) VALUES 
  (null, 'Client_1'),
  (null, 'Client_2'),
  (null, 'Client_3'),
  (null, 'Client_4');
  
  
CREATE TABLE sales(
  id INTEGER AUTO_INCREMENT PRIMARY KEY,
  createdAt DATETIME DEFAULT CURRENT_TIMESTAMP, 
  amount FLOAT(2),
  clientId INTEGER NOT NULL,
  userId INTEGER,
  CONSTRAINT fk_sales_user FOREIGN KEY (userId) REFERENCES users (id) ON UPDATE CASCADE,
  CONSTRAINT fk_sales_client FOREIGN KEY (clientId) REFERENCES clients (id) ON UPDATE CASCADE
);

INSERT INTO sales(id, createdAt, amount, clientId, userId) values
( NULL, '2021-05-03 12:30:00', 35000, 1, 4 ),
( NULL, '2021-05-04 12:30:00', 20000, 1, 4 ),
( NULL, '2021-05-05 12:30:00', 25000, 2, 3 ),
( NULL, '2021-05-06 12:30:00', 11000, 2, 3 ),
( NULL, '2021-07-06 12:30:00', 10000, 2, 3 ),
( NULL, '2021-06-05 12:30:00', 40000, 3, 2 ),
( NULL, '2021-07-06 12:30:00', 10000, 3, 2 ),
( NULL, '2021-07-06 12:30:00', 10000, 4, 1 );