//Accept and store names
function acceptAndStore() {
  const employeeNames = [];
  for (var i = 1; i <= 6; i++) {
    var name = prompt(`Enter name of the employee ${i}`);
    employeeNames.push(name);
  }
  return employeeNames;
}

//display the names of employees
function displayNames(names) {
  const sortedNameComparator = [...names].sort((a, b) => {
    if (a.toLowerCase() > b.toLowerCase()) return 1;
    else if (a.toLowerCase() < b.toLowerCase()) return -1;
    else return 0;
  });

  sortedNameComparator.forEach((emp, index) => {
    console.log(`${index + 1}. ${emp}`);
  });
}

//main function
const names = acceptAndStore();
displayNames(names);
