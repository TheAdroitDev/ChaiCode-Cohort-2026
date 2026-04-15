-- Task: Right join reviews with products. Select product name and review comment.

SELECT products.name, reviews.comment
FROM reviews
RIGHT JOIN products
ON reviews.product_id = products.id;