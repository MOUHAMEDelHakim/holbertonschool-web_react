/* Define the Student interface */
interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}

/* Create two instances of the Student class */
const student1: Student = {
    firstName: 'John',
    lastName: 'Doe',
    age: 25,
    location: 'New York'
};

const student2: Student = {
    firstName: 'Jane',
    lastName: 'Doe',
    age: 23,
    location: 'Los Angeles'
};

/* Store the student instances in an array */
const studentsList: Student[] = [student1, student2];

/* Create an empty table element */
const table = document.createElement('table');

/* Loop through each student in the array */
studentsList.forEach((student) => {
    /* Create a new row for the student */
    const row = document.createElement('tr');
    /* Create a cell for the student's first name */
    const firstNameCell = document.createElement('td');
    firstNameCell.textContent = student.firstName;
    row.appendChild(firstNameCell);
    /* Create a cell for the student's location */
    const locationCell = document.createElement('td');
    locationCell.textContent = student.location;
    row.appendChild(locationCell);
    /* Add the row to the table */
    table.appendChild(row);
});

/* Add the table to the document */
document.body.appendChild(table);
