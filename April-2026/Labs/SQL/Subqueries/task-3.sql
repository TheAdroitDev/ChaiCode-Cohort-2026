-- Task: Select name and email of users who exist in the orders table (have made orders).


-- Task: Select name and email of users who exist in the orders table (have made orders).


-- Write your SQL query here
SELECT name, email FROM users WHERE EXISTS (SELECT 1 FROM orders WHERE orders.user_id = users.id) 