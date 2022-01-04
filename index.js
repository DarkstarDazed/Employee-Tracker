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
    inquirer
    .prompt([
        {
            type: "list",
            name: "menu",
            message: "What would you like to do?",
            choices: [
              "View all departments",
              "View all roles",
              "View all employees",
              "Add a department",
              "Add a role",
              "Add an employee",
              "Update an employee role",
            ],
        }
    ])

    .then((answers) => {
        if (answers.menu === "View all departments") {
            viewDepartments();
        } else if (answers.menu === "View all roles") {
            viewRoles();
          } else if (answers.menu === "View all employees") {
            viewEmployees();
          } else if (answers.menu === "Add a department") {
            addDepartment();
          } else if (answers.menu === "Add a role") {
            addRole();
          } else if (answers.menu === "Add an employee") {
            addEmployee();
          } else {
            updateEmployee();
          }
    });
}