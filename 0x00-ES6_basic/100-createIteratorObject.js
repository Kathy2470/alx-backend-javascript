export default function createIteratorObject(report) {
  const departments = Object.values(report.allEmployees);

  let currentIndex = 0;
  let currentDepartmentIndex = 0;

  return {
    next() {
      const currentDepartment = departments[currentDepartmentIndex];
      const employee = currentDepartment[currentIndex];

      // Move to the next employee or department
      if (currentIndex < currentDepartment.length - 1) {
        currentIndex++;
      } else {
        currentIndex = 0;
        currentDepartmentIndex++;
      }

      // Check if there are more departments
      const done = currentDepartmentIndex >= departments.length;

      return { value: employee, done };
    },
    [Symbol.iterator]() {
      return this;
    },
  };
}
