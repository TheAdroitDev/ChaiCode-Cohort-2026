-- Task: Select name and country from users where country is NOT in ('USA', 'Canada').

-- Write your SQL query here
SELECT name, country from users WHERE country NOT IN ('USA','Canada')