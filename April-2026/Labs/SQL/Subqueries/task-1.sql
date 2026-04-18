
-- Use a query result as a filter value. Find products more expensive than average.

-- The inner query (subquery) calculates AVG(price), then the outer query uses that value to filter. This finds above-average priced products.
-- Task: Select name and price of products where price is greater than the average product price.
-- Hint: Use WHERE price > (SELECT AVG(price) FROM products)


SELECT name, price
FROM products
WHERE price > (SELECT AVG(price) FROM products);