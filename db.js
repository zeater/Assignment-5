const mysql = require("mysql2");

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "1111111",
  database: "store_db"
});

db.connect((err) => {
  if (err) console.log(err);
  else console.log("Connected to DB");
});

module.exports = db;
