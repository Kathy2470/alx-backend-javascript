// Create and export constants for Cpp, Java, and React subjects
export const cpp = 'C++';
export const java = 'Java';
export const react = 'React';

// Create and export a Teacher object cTeacher with experienceTeachingC = 10
export class Teacher {
  private experienceTeachingC: number;

  constructor(experienceTeachingC: number) {
    this.experienceTeachingC = experienceTeachingC;
  }

  public getRequirements(): string {
    return 'Requirements for this subject';
  }

  public getAvailableTeacher(): string {
    return `Available teacher: ${this.experienceTeachingC} years of experience`;
  }
}

export const cTeacher = new Teacher(10);

// Main function to test the subjects and teacher
function main() {
  // For Cpp subject
  console.log(cpp);
  cTeacher.getRequirements();
  console.log(cTeacher.getAvailableTeacher());

  // For Java subject
  console.log(java);
  cTeacher.getRequirements();
  console.log(cTeacher.getAvailableTeacher());

  // For React subject
  console.log(react);
  cTeacher.getRequirements();
  console.log(cTeacher.getAvailableTeacher());
}

main();
