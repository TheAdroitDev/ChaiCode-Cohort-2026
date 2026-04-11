SELECT 
    s.name, 
    s.branch,
    i.company_name, 
    i.role,
    i.stipend
FROM internships i
LEFT JOIN students s ON i.student_id = s.student_id;