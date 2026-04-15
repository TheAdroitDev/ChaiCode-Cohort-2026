-- ====================================================
-- CLASS 2: TOPIC 2 - FULL OUTER JOIN
-- ====================================================

-- (Assumes tables `students` and `internships` from 05_inner_join.sql exist)

-- ====================================================
-- 1. FULL OUTER JOIN
-- ====================================================

-- Definition: Returns ALL records when there is a match in either the Left table OR the Right table.
-- If there is no match, the missing side will contain NULL.
-- It's essentially a combination of a LEFT JOIN and a RIGHT JOIN.

-- Use Case: "Give me a complete overview: All students (whether they have internships or not) 
-- AND all internships (whether they are linked to a student or not)."

SELECT 
    s.name AS student_name, 
    s.branch,
    i.company_name, 
    i.status 
FROM students s
FULL OUTER JOIN internships i ON s.student_id = i.student_id;

-- In our data:
-- 1. Students with internships (Rahul, Sneha, Amit) show full details.
-- 2. Students without internships (Priya, Rohan) show NULL in company_name and status.
-- 3. If we had an internship without a valid student_id, it would show NULL for student_name and branch.

-- ====================================================
-- 2. FINDING TOTALLY UNMATCHED RECORDS
-- ====================================================

-- Want to find ONLY the students without internships AND internships without students?
-- Add a WHERE clause to filter out the matching combinations.

SELECT 
    s.name AS student_name, 
    i.company_name
FROM students s
FULL OUTER JOIN internships i ON s.student_id = i.student_id
WHERE s.student_id IS NULL OR i.internship_id IS NULL;
