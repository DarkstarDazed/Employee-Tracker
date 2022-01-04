const inquirer = require("inquirer");
const mysql = require("mysql2");
require("console.table");

const db = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "darkstar",
  database: "employee_db",
});

db.connect((err) => {
  if (err) throw err;
  startPrompt();
});








function startPrompt() {
    
}