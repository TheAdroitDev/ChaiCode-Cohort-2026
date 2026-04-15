-- Task: Join orders with users. Select order id, user name, and order quantity.

-- Write your SQL query here
SELECT orders.id, users.name, orders.quantity from orders INNER JOIN users ON orders.user_id = users.id;
