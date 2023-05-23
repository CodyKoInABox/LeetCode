# Write your MySQL query statement below

SELECT q.query_name, ROUND(AVG(q.rating/q.position),2) as quality, ROUND(AVG((rating < 3)*100),2) as poor_query_percentage
from Queries q
GROUP BY q.query_name;