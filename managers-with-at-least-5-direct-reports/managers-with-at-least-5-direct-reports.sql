# Write your MySQL query statement below

SELECT name FROM Employee e
WHERE e.id IN (
  SELECT managerId from Employee
  GROUP BY managerId
  HAVING COUNT(*) >= 5
);