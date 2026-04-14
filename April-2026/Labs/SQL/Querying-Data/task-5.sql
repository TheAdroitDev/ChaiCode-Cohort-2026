-- Rename columns in your result set for clarity. Make output more readable with meaningful names.
-- Task: Select name and country from users, but display them as "customer_name" and "location".
SELECT 
    name AS customer_name, 
    country AS location
FROM
    users;
    