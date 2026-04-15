-- ====================================================
-- CLASS 2: TOPIC 2 - RIGHT JOIN
-- ====================================================

-- (Assumes tables `students` and `internships` from 05_inner_join.sql exist)

-- To demonstrate Right Join properly, let's pretend we managed to insert 
-- an internship record without a valid student (an "orphan" record).
-- In reality, the Foreign Key we set earlier prevents this.
-- So temporarily, let's turn off the foreign key constraint just to learn RIGHT JOIN,
-- or create a separate table scenario. 
-- Instead, we will use a different syntax with Right Join just to show it produces the same effect 
-- as Left Join from the other perspective.

-- ====================================================
-- 1. RIGHT JOIN 
-- ====================================================

-- Definition: Returns ALL records from the Right table, 
-- and matched records from the Left table.
-- If no match is found, returns NULL for the left side.

-- Use Case: "Show me all internships, and tell me which student applied for them."
-- Since all internships currently have valid students (thanks to our Foreign Key), 
-- this gives the same result as an Inner Join in our data. 

SELECT 
    s.name, 
    s.branch,
    i.company_name, 
    i.role,
    i.stipend 
FROM students s
RIGHT JOIN internships i ON s.student_id = i.student_id;

-- Equivalent LEFT JOIN query (Flipping the table order)
SELECT 
    s.name, 
    s.branch,
    i.company_name, 
    i.role,
    i.stipend
FROM internships i
LEFT JOIN students s ON i.student_id = s.student_id;

-- Generally, RIGHT JOIN is rarely used in practice because developers 
-- prefer to just flip the order of tables and use LEFT JOIN, 
-- as it reads top-to-bottom, left-to-right more naturally.
