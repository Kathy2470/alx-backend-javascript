interface Student {
  firstName: string;
  lastName: string;
  location: string;
  grades: number[];
}

const studentsList: Student[] = [
  // assume this array is populated with Student objects
];

function findTopStudent(students: Student[]): Student | undefined {
  const studentsWithAverageGrades = students.map((student) => ({
    ...student,
    averageGrade: student.grades.reduce((acc, grade) => acc + grade, 0) / student.grades.length,
  }));

  return studentsWithAverageGrades.reduce((maxStudent, currentStudent) => {
    if (!maxStudent || currentStudent.averageGrade > maxStudent.averageGrade) {
      return currentStudent;
    }
    return maxStudent;
  }, undefined);
}

const topStudent = findTopStudent(studentsList);
if (topStudent) {
  console.log(`Top student: ${topStudent.firstName} ${topStudent.lastName} with an average grade of ${topStudent.grades.reduce((acc, grade) => acc + grade, 0) / topStudent.grades.length}`);
} else {
  console.log('No students found');
}
