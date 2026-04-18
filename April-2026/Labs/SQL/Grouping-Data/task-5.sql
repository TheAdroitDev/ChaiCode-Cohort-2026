-- Task: Count the number of users in each country. Show country name and count.


-- Write your SQL query here
SELECT country, COUNT(*) from users GROUP BY country