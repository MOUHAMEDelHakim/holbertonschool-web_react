/* Define the Teacher interface */
interface Teacher {
    /* firstName is a required string */
    firstName: string;
    /* lastName is a required string */
    lastName: string;
    /* fullTimeEmployee is a required boolean */
    fullTimeEmployee: boolean;
    /* yearsOfExperience is an optional number */
    yearsOfExperience?: number;
    /* location is a required string */
    location: string;
    /* Any additional properties can be added to the object */
    /* where the property name is a string and the value can be of any type */
    [key: string]: any;
}

/* Create an object that implements the Teacher interface */
const teacher: Teacher = {
    firstName: 'John',
    lastName: 'Doe',
    fullTimeEmployee: true,
    location: 'New York',
    contract: true
}

interface Directors extends Teacher {
    numberOfReports: number,
};

const director1: Directors = {
    firstName: 'John',
    lastName: 'Doe',
    location: 'London',
    fullTimeEmployee: true,
    numberOfReports: 17,
};
//console.log(director1);


interface printTeacherFunction {
    (firstName: string, lastName: string): string;
}

export const printTeacher: printTeacherFunction = (firstName: string, lastName: string): string => `${firstName.charAt(0)}. ${lastName}`;


interface StudentClassConstructor {
    new(firstName: string, lastName: string): StudentClassInterface;
  }
  interface StudentClassInterface {
    firstName: string;
    lastName: string;
  }
  class StudentClass implements StudentClassInterface {
    firstName: string;
    lastName: string;
    constructor(firstName: string, lastName: string) {
      this.firstName = firstName;
      this.lastName = lastName;
    }
    workOnHomework() {
      return 'Currently working';
    }
    displayName() {
      return this.firstName;
    }
  }
