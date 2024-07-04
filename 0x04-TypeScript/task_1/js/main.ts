import { Teacher } from './teacher';

interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  location: string;
  [key: string]: any;
}

const teacher1: Teacher = {
  firstName: 'John',
  fullTimeEmployee: false,
  lastName: 'Doe',
  location: 'London',
  contract: false,
};

const teacher2: Teacher = {
  firstName: 'Jane',
  fullTimeEmployee: true,
  lastName: 'Smith',
  location: 'New York',
  yearsOfExperience: 5,
};

const teacher3: Teacher = {
  firstName: 'Bob',
  fullTimeEmployee: false,
  lastName: 'Johnson',
  location: 'Paris',
  contract: true,
  yearsOfExperience: 10,
};

console.log(teacher1);
console.log(teacher2);
console.log(teacher3);
