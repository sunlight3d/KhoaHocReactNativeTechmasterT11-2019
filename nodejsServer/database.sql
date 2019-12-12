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

DROP PROCEDURE registerUser();
delimiter //
CREATE PROCEDURE registerUser(email VARCHAR(250),password VARCHAR(150)) 
BEGIN
    INSERT INTO users(email, password) VALUES(email, MD5(password));    
END; //
delimiter;





--trigger after insert
DROP TRIGGER triggerCreateTokenKey;
delimiter //
CREATE TRIGGER triggerCreateTokenKey 
BEFORE INSERT ON users
FOR EACH ROW
BEGIN
    SET NEW.tokenKey = MD5(RAND());
    SET NEW.expiredDate = DATE_ADD(CURRENT_DATE(), INTERVAL 30 DAY);    
END; //   
delimiter ;
DROP PROCEDURE loginUser;
CREATE PROCEDURE loginUser(email VARCHAR(250),password VARCHAR(150)) AS
BEGIN
    DECLARE numberOfUsers AS INT;
    SELECT COUNT(*) AS numberOfUsers FROM users WHERE users.email = email AND user;
    IF (numberOfUsers > 0)
END;