-- Task: Right join reviews with products. Select product name and review comment.


-- Write your SQL query here
SELECT products.name, reviews.comment from reviews RIGHT JOIN products ON reviews.product_id = products.id