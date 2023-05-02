// Student interface
interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string,
}
const student1: Student = {
    firstName: "Mohamed",
    lastName: "El Hakim",
    age: 24,
    location: "Raoued"
};
const student2: Student = {
    firstName: "Houiji",
    lastName: "Amine",
    age: 23,
    location: "La Marsa",
}
const studentsList: Student[] = [student1, student2];
  
  // get the table element from the DOM
  const table: HTMLTableElement = document.getElementById("studentsTable") as HTMLTableElement;
  
  // create table body and append it to the table element
  const tableBody: HTMLTableSectionElement = document.createElement("tbody");
  table.appendChild(tableBody);
  
  // loop through the students array and append a new row for each student
  studentsList.forEach((student: Student) => {
    const row: HTMLTableRowElement = tableBody.insertRow();
    const firstNameCell: HTMLTableCellElement = row.insertCell();
    const locationCell: HTMLTableCellElement = row.insertCell();
    firstNameCell.textContent = student.firstName;
    locationCell.textContent = student.location;
  });
