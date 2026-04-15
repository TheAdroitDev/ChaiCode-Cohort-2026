-- Task: Join orders with users, but only show orders from users in 'USA'. Select order id, user name, and country.

SELECT o.id, u.name, u.country
FROM orders o
JOIN users u
ON o.user_id = u.id
WHERE u.country = 'USA';