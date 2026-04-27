-- Task: Select all cities from users, and all locations from departments. Combine into one list with no duplicates.

-- Write your SQL query here
SELECT city from users UNION SELECT location from departments