-- Task: Join orders with users and products. Select order id, user name, and product name.
-- Write your SQL query here
-- Write your SQL query here
SELECT o.id,
    u.name,
    p.name
FROM orders o
    JOIN users u ON o.user_id = u.id
    JOIN products p ON o.product_id = p.id;