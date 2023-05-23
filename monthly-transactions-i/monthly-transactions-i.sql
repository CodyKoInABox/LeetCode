# Write your MySQL query statement below

SELECT
DATE_FORMAT(t.trans_date, '%Y-%m') as month,
t.country,
COUNT(id) as trans_count,
SUM(CASE WHEN state = 'approved' then 1 else 0 end) as approved_count,
SUM(amount) as trans_total_amount,
SUM(CASE WHEN state = 'approved' then amount else 0 end) as approved_total_amount
FROM Transactions t
GROUP BY month, t.country;
