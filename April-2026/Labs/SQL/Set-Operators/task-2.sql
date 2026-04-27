-- UNION ALL combines results but keeps duplicates. It's faster than UNION since it doesn't check for duplicates. USA appears multiple times.
-- Task: Select all countries from users and all countries from suppliers. Keep all rows including duplicates.

SELECT country from USERS UNION ALL SELECT country from suppliers