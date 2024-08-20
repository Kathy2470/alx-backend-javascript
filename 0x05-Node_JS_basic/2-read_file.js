const fs = require('fs');

/**
 * countStudents - Counts and displays student information from a CSV file.
 * @param {string} path - The path to the CSV file.
 */
function countStudents(path) {
    try {
        // Read the CSV file synchronously
        const data = fs.readFileSync(path, 'utf-8');

        // Split the file into lines
        const lines = data.split('\n').filter(line => line.trim() !== '');

        // Extract the header and rows
        const [header, ...rows] = lines;

        // Check if there are valid rows
        if (rows.length === 0) {
            console.log('Number of students: 0');
            return;
        }

        // Process the rows to get student data
        const students = rows.map(row => row.split(',')).filter(row => row.length === 4);

        if (students.length === 0) {
            console.log('Number of students: 0');
            return;
        }

        // Count the students and group them by field
        const fieldCount = {};
        const fieldNames = {};

        students.forEach(([firstName, lastName, age, field]) => {
            if (!fieldCount[field]) {
                fieldCount[field] = 0;
                fieldNames[field] = [];
            }
            fieldCount[field] += 1;
            fieldNames[field].push(firstName);
        });

        // Display the number of students
        console.log(`Number of students: ${students.length}`);

        // Display the number of students in each field
        for (const [field, count] of Object.entries(fieldCount)) {
            console.log(`Number of students in ${field}: ${count}. List: ${fieldNames[field].join(', ')}`);
        }
    } catch (error) {
        console.error('Cannot load the database');
    }
}

module.exports = countStudents;
