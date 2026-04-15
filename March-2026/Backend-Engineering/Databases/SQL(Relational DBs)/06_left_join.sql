-- ====================================================
-- CLASS 2: TOPIC 2 - LEFT JOIN
-- ====================================================

-- (Assumes tables `students` and `internships` from 05_inner_join.sql exist)

-- ====================================================
-- 1. LEFT JOIN (The "Inclusive" Join)
-- ====================================================

-- Definition: Returns ALL records from the Left table (students), 
-- and matched records from the Right table (internships).
-- If no match is found, returns NULL for the right side.

-- Use Case: "Show me all students and their internship status (even if they haven't applied)."

SELECT 
    s.name, 
    s.branch,
    COALESCE(i.company_name, 'No Internship') AS company_name, -- Replace NULL with "No Internship", Try to run it
    COALESCE(i.stipend, 0) AS stipend -- Replace NULL with 0
FROM students s
LEFT JOIN internships i ON s.student_id = i.student_id;

-- Notice: 'Priya' and 'Rohan' appear with NULLs for company_name and stipend because they don't have internships.

-- ====================================================
-- 2. FINDING DISCREPANCIES (Looking for NULLs)
-- ====================================================

-- "Who are the students that currently DO NOT have any internships applied?"
-- Strategy: Left Join + Filter where Right side is NULL.

SELECT s.name, s.email, s.branch, i.*
FROM students s
LEFT JOIN internships i ON s.student_id = i.student_id
WHERE i.internship_id IS NULL;
