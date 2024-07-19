

// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector('#add-employees-btn');
let employees = [];
// Collect employee data
const collectEmployees = function () {

  //  Get user input to create and return an array of employee objects
  const firstName = prompt("What is the employee's first Name?");
  const surName = prompt("What is the employee's last name?");
  const salary = prompt("What is the emplyee's salary?");

  //if invalid input for salary

  if (isNaN(salary)) {
    alert("Invalid input for salary. Please enter a valid number.");
    confirmSelection()
  }

  //saved in the object. ay need to change name
  const employee = {
    firstName: firstName,
    surName: surName,
    salary: salary,
  }
  // saved in the array

  employees.push(employee);

  let confirmSelection = confirm("Would you like to continue?");

  if (confirmSelection === true) {
    nextEmployee()
  }
  else {
    return employees;
  }
  return employees;
}

  //adding another employee
  function nextEmployee() {
    const addEmpl = confirm("Would you like to add another employee?");
    //bolean
    if (addEmpl === true) {
      collectEmployees()
    }
    else {

      //return array of entered employees
    }
    return employees;
  };

// Display the average salary
let total = 0;
let avg;

const displayAverageSalary = function (employees) {
  console.log(employees)
  console.log(typeof employees)
  // TODO: Calculate and display the average salary
  for (let employee of employees) {
    total += parseInt(employee.salary);
    avg = total / employees.length;
  }
  console.log(`Average Salary: ${avg}`);

};

// Select a random employee
const getRandomEmployee = function (employees) {
  const randomEmpl = employees[Math.floor(Math.random() * employees.length)];
  console.log(`Random Employee: ${randomEmpl.firstName} ${randomEmpl.surName} is the choosen Employee`)
}




/*
  ====================
  STARTER CODE
  Do not modify any of the code below this line:
*/

// Display employee data in an HTML table
const displayEmployees = function (employees) {
  // Get the employee table
  const employeeTable = document.querySelector('#employee-table');

  // Clear the employee table
  employeeTable.innerHTML = '';

  // Loop through the employee data and create a row for each employee
  for (let i = 0; i < employees.length; i++) {
    const currentEmployee = employees[i];

    const newTableRow = document.createElement("tr");

    const firstNameCell = document.createElement("td");
    firstNameCell.textContent = currentEmployee.firstName;
    newTableRow.append(firstNameCell);

    const surNameCell = document.createElement("td");
    surNameCell.textContent = currentEmployee.surName;
    newTableRow.append(surNameCell);

    const salaryCell = document.createElement("td");
    // Format the salary as currency
    salaryCell.textContent = currentEmployee.salary.toLocaleString("en-US", {
      style: "currency",
      currency: "USD"
    });

    newTableRow.append(salaryCell);

    employeeTable.append(newTableRow);
  }
}

const trackEmployeeData = function () {
  const employees = collectEmployees();

  console.table(employees);

  displayAverageSalary(employees);

  console.log('==============================');

  getRandomEmployee(employees);

  employees.sort(function (a, b) {
    if (a.surName < b.surName) {
      return -1;
    } else {
      return 1;
    }
  });

  displayEmployees(employees);
}

// Add event listener to 'Add Employees' button
addEmployeesBtn.addEventListener('click', trackEmployeeData);
