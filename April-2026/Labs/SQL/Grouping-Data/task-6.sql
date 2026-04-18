-- Filter groups after aggregation. WHERE filters rows before grouping, HAVING filters groups after.

-- HAVING filters the grouped results. It's like WHERE, but for groups. Only countries with 3+ users will appear.
-- Task: Show countries that have more than 3 users. Display country and user count.


-- Write your SQL query here

SELECT country, COUNT(*) from users GROUP BY country HAVING COUNT(*) > 3