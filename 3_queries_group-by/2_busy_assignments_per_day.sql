SELECT day, count(assignments.day)
FROM assignments 
GROUP BY day 
HAVING count(assignments.day) >= 10
ORDER BY day 