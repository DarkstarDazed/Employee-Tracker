INSERT INTO department (name)
VALUES ("Legal"),
       ("Finance"),
       ("Engineering"),
       ("Sales"),
     

INSERT INTO role (title, salary, department_id)
VALUES ("Sales Lead", 100000, 4),
       ("Lawyer", 250000, 1),
       ("Accountant", 125000, 2),
       ("Software Engineer", 125000, 3),
       ("Account Manager", 160000, 2),
       ("Lead Engineer", 150000, 3);

INSERT INTO employee (first_name, last_name, role_id)
VALUES ("Mario", "Diaz", 4),    
       ("Dan", "Jansen", 6),
       ("Alex", "Sung", 1),
       ("Ben", "Milic", 3);
       ("Will", "Baker", 2);