DROP TABLE users;
CREATE TABLE IF NOT EXISTS users(
    id INTEGER PRIMARY KEY AUTO_INCREMENT,
    email VARCHAR(250) NOT NULL UNIQUE,
    password VARCHAR(150) NOT NULL,
    tokenKey VARCHAR(200) DEFAULT "",
    expiredDate DATE    
);
DESCRIBE users;
--register user(
INSERT INTO users(email, password)
VALUES("hoang@gmail.com", "123456");
--trigger after insert
DROP TRIGGER triggerCreateTokenKey;
CREATE TRIGGER triggerCreateTokenKey 
BEFORE INSERT ON users
FOR EACH ROW
SET NEW.tokenKey = "aaaxxx";
