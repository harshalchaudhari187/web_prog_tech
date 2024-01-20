//create and array of 4 employee objects
const employee = [
  { empid: 1, empName: "Kshitij", salary: 50000 },
  { empid: 2, empName: "Harsh", salary: 40000 },
  { empid: 3, empName: "Arbaj", salary: 50000 },
  { empid: 4, empName: "Hrishi", salary: 50000 },
];

//display the employee array in tabular format
console.log(`| Emp_id | Emp_name | salary|`);
console.log(`|--------|----------|-------|`);

employee.forEach((employee) => {
  console.log(
    `| ${employee.empid}      | ${employee.empName}    | ${employee.salary}    |`
  );
});
