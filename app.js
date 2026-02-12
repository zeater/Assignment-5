const express = require("express");
const db = require("./db");

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Server running");
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});

app.post("/add-supplier", (req, res) => {
  const { SupplierName, ContactNumber } = req.body;

  const sql =
    "INSERT INTO suppliers (SupplierName, ContactNumber) VALUES (?, ?)";

  db.query(sql, [SupplierName, ContactNumber], (err, result) => {
    if (err) return res.send(err);
    res.send("Supplier Added");
  });
});

app.post("/add-product", (req, res) => {
  const { ProductName, Price, StockQuantity, SupplierID } = req.body;

  const sql =
    "INSERT INTO products (ProductName, Price, StockQuantity, SupplierID) VALUES (?, ?, ?, ?)";

  db.query(
    sql,
    [ProductName, Price, StockQuantity, SupplierID],
    (err, result) => {
      if (err) return res.send(err);
      res.send("Product Added");
    }
  );
});

app.post("/add-sale", (req, res) => {
  const { ProductID, QuantitySold, SaleDate } = req.body;

  const sql =
    "INSERT INTO sales (ProductID, QuantitySold, SaleDate) VALUES (?, ?, ?)";

  db.query(sql, [ProductID, QuantitySold, SaleDate], (err, result) => {
    if (err) return res.send(err);
    res.send("Sale Added");
  });
});
