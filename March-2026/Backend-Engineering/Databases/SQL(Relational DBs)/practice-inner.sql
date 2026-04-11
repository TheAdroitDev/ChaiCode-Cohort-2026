SELECT students.name,
    students.branch,
    internships.company_name,
    internships.role,
    internships.stipend
FROM students
    INNER JOIN internships ON students.student_id = internships.student_id;
SELECT s.name,
    s.branch,
    i.company_name,
    i.status
FROM students s
    JOIN internships i ON s.student_id = i.student_id;