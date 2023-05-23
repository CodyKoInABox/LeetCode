# Write your MySQL query statement below

SELECT p.product_id, ROUND(SUM(u.units*p.price)/SUM(u.units),2) as average_price from Prices p LEFT JOIN UnitsSold u
ON p.product_id = u.product_id AND u.purchase_date between p.start_date and end_date
GROUP BY p.product_id;