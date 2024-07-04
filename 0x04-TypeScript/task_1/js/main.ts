interface Student {
  firstName: string;
  lastName: string;
  location: string;
  grades: number[];
}

const studentsList: Student[] = [
  // assume this array is populated with Student objects
];

function calculateAverageGrade(grades: number[]): number {
  return grades.reduce((acc, grade) => acc + grade, 0) / grades.length;
}

function filterStudentsByGradeRange(students: Student[], minGrade: number, maxGrade: number): Student[] {
  return students.filter((student) => {
    const averageGrade = calculateAverageGrade(student.grades);
    return averageGrade >= minGrade && averageGrade <= maxGrade;
  });
}

const filteredStudents = filterStudentsByGradeRange(studentsList, 80, 90);
console.log('Filtered students by grade range (80-90):');
filteredStudents.forEach((student) => {
  console.log(`${student.firstName} ${student.lastName} - Average grade: ${calculateAverageGrade(student.grades).toFixed(2)}`);
});
