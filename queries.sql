USE store_db;

ALTER TABLE Products
ADD Category VARCHAR(50);

ALTER TABLE Products
DROP COLUMN Category;

ALTER TABLE Suppliers
MODIFY ContactNumber VARCHAR(15);

ALTER TABLE Products
MODIFY ProductName VARCHAR(100) NOT NULL;

INSERT INTO Suppliers (SupplierName, ContactNumber)
VALUES ('FreshFoods','01001234567');
INSERT INTO Products
(ProductName, Price, StockQuantity, SupplierID)
VALUES
('Milk',15,50,2),
('Bread',10,30,2),
('Eggs',20,40,2);
INSERT INTO Sales
(ProductID,QuantitySold,SaleDate)
VALUES (6,2,'2025-05-20');

UPDATE Products
SET Price = 25
WHERE ProductName='Bread';

DELETE FROM Products
WHERE ProductName='Eggs';

SELECT ProductID,
SUM(QuantitySold)
FROM Sales
GROUP BY ProductID;

SELECT *
FROM Products
ORDER BY StockQuantity DESC
LIMIT 1;

SELECT *
FROM Suppliers
WHERE SupplierName LIKE 'F%';

SELECT *
FROM Products
WHERE ProductID NOT IN
(SELECT ProductID FROM Sales);

SELECT Products.ProductName,
Sales.SaleDate
FROM Sales
JOIN Products
ON Sales.ProductID = Products.ProductID;

CREATE USER 'store_manager'@'localhost'
IDENTIFIED BY '1234';

REVOKE UPDATE
ON store_db.*
FROM 'store_manager'@'localhost';

GRANT DELETE
ON store_db.Sales
TO 'store_manager'@'localhost';
