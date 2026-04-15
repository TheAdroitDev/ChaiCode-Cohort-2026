-- ====================================================
-- CLASS 2: TOPIC 2 - INNER JOIN
-- ====================================================

-- ----------------------------------------------------
-- SETUP: Create Student Internship Tables
-- ----------------------------------------------------
DROP TABLE IF EXISTS internships;
DROP TABLE IF EXISTS students;

CREATE TABLE students (
    student_id SERIAL PRIMARY KEY,
    name VARCHAR(100),
    email VARCHAR(100),
    branch VARCHAR(50)
);

CREATE TABLE internships (
    internship_id SERIAL PRIMARY KEY,
    -- Foreign Key with CASCADE options
    -- ON DELETE CASCADE: If a student is deleted, their internships are also deleted.
    -- ON UPDATE CASCADE: If a student_id changes, the internships are updated to match.
    -- student_id INT REFERENCES students(student_id) ON DELETE CASCADE ON UPDATE CASCADE, 
    
    -- Alternatives:
    student_id INT REFERENCES students(student_id) ON DELETE SET NULL ON, -- Keeps the internship but removes the student link
    -- student_id INT REFERENCES students(student_id) ON DELETE RESTRICT, -- Prevents deleting a student if they have applied to internships (Default)
    
    company_name VARCHAR(100),
    role VARCHAR(50),
    stipend INT,
    status VARCHAR(20) -- Selected, Pending, Rejected
);

-- Inserting Students (Including some who haven't applied for internships yet)
INSERT INTO students (name, email, branch) VALUES 
('Rahul', 'rahul@gmail.com', 'Computer Science'),
('Sneha', 'sneha@yahoo.com', 'Information Tech'),
('Amit', 'amit@hotmail.com', 'Electronics'),
('Priya', 'priya@gmail.com', 'Mechanical'), -- Priya is focusing on higher studies, no internships.
('Rohan', 'rohan@outlook.com', 'Civil'); -- Rohan is working on a startup, no internships.

-- Inserting Internships
INSERT INTO internships (student_id, company_name, role, stipend, status) VALUES 
(1, 'Google', 'Software Engineering Intern', 100000, 'Selected'), -- Rahul got selected!
(1, 'Microsoft', 'SDE Intern', 85000, 'Selected'), -- Rahul is killing it
(2, 'Amazon', 'Data Analyst Intern', 60000, 'Pending'), -- Sneha is waiting
(3, 'TCS', 'System Engineer Intern', 20000, 'Selected'), -- Amit got an offer
(5, 'OpenAI', 'AI Researcher', 150000, 'Selected'); -- Student ID 99 does not exist (Orphan Record) -> Would be BLOCKED by Foreign Key Constraint


DELETE FROM students WHERE student_id = 5; -- What happens to Rahul's internships? (Google, Microsoft) -> Depends on our ON DELETE action!
-- ====================================================
-- 1. INNER JOIN (The "Match Maker")
-- ====================================================

-- Definition: Returns records ONLY when there is a match in BOTH tables.
-- Students without internships (Priya, Rohan) -> Excluded.
-- Internships without valid students (like student 99) -> Excluded (if any existed).
SELECT * FROM internships;
SELECT * FROM students;

SELECT 
    students.name,
    students.branch,
    internships.company_name,
    internships.role,
    internships.stipend 
FROM students
INNER JOIN internships ON students.student_id = internships.student_id;

-- With Aliases (Cleaner code)
SELECT 
    s.name, 
    s.branch, 
    i.company_name,
    i.status
FROM students s
JOIN internships i ON s.student_id = i.student_id;
