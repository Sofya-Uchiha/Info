CREATE TABLE customers
(
    Id SERIAL PRIMARY KEY,
    FirstName CHARACTER VARYING(30),
    LastName CHARACTER VARYING(30),
    Email CHARACTER VARYING(30),
    Age INTEGER
);


INSERT INTO customers (Id,FirstName,LastName,Email,Age)
VALUES 
(1,'Артем','Нефедов','AR',17),
(2,'Софья','Мишина','AR',18),
(3,'Александр','Завацкий','AR',17)



UPDATE customers 
SET Email = 'ab@mail.ru';




SELECT * FROM customers
WHERE Age=17;



