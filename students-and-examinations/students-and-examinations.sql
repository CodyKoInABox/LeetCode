# Write your MySQL query statement below

SELECT s.student_id, s.student_name, m.subject_name, COUNT(e.subject_name) AS attended_exams
FROM Students as s JOIN Subjects as m LEFT JOIN Examinations as e
ON s.student_id = e.student_id AND m.subject_name = e.subject_name
GROUP BY s.student_id, m.subject_name
ORDER BY s.student_id, m.subject_name; 