-- Task: Join employees with themselves to show each employee and their manager name. Select employee name and manager name.

-- Write your SQL query here
SELECT e1.name AS employee_name, e2.name AS manager_name FROM employees e1 JOIN employees e2 ON e1.manager_id = e2.id