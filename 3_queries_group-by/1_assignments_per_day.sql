SELECT day, count(assignments.day)
FROM assignments 
GROUP BY day 
ORDER BY day 