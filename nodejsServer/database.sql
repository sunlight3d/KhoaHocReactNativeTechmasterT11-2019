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

DROP PROCEDURE registerUser;
delimiter //
CREATE PROCEDURE registerUser(email VARCHAR(250),password VARCHAR(150)) 
BEGIN
    INSERT INTO users(email, password) VALUES(email, MD5(password));    
END //
CALL registerUser('hoang11@gmail.com', 123456);

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
delimiter //
CREATE PROCEDURE loginUser(email VARCHAR(250),password VARCHAR(150))
BEGIN
    DECLARE numberOfUsers INT;
    SELECT COUNT(*) INTO numberOfUsers FROM users WHERE users.email = email AND users.password = MD5(password);
    IF (numberOfUsers > 0) THEN 
        UPDATE users SET users.tokenKey = MD5(RAND()), 
            expiredDate = DATE_ADD(CURRENT_DATE(), INTERVAL 30 DAY)
        WHERE users.email = email;        
        SELECT id, email, tokenKey, expiredDate FROM users WHERE users.email = email;
    ELSE 
        SIGNAL SQLSTATE '45000' set message_text = "Wrong email or password";
    END IF;
END;//
delimiter;
CALL loginUser('hoang11@gmail.com', 123456);

DROP TABLE products;
CREATE TABLE IF NOT EXISTS products(
    id INTEGER PRIMARY KEY AUTO_INCREMENT,
    productName VARCHAR(250) NOT NULL UNIQUE,
    year INTEGER,
    price FLOAT,
    userId INTEGER 
);
INSERT INTO products(productName, year, userId, price) VALUES("iphone 4", 2014, 9, 120.23);
INSERT INTO products(productName, year, userId, price) VALUES("macbook", 2015, 9, 541.21);
DESCRIBE products;

DROP VIEW viewUsersProducts;
CREATE VIEW viewUsersProducts AS
SELECT users.id as userId,
users.email as email,
products.id as productId,  
products.productName as productName,
products.year as year,
ROUND(products.price*1.1, 2) as priceAfterTax,
products.price as price
FROM users 
INNER JOIN products 
ON users.id=products.userId 
ORDER BY users.id;
SELECT * FROM viewUsersProducts;





