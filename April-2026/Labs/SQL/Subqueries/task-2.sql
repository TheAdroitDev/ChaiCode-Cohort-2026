-- ask: Create a subquery that selects users from USA, then count how many there are.

 SELECT COUNT(*) FROM (SELECT * FROM users WHERE country = 'USA') AS usa_users