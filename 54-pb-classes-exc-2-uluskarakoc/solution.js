// your code goes here
// good luck!
let i = 1;
const result = () => {
  console.log(`Result----------${i++}`);
};
// #### 1. Mitarbeiter-Klasse
class Employee {
  constructor(id, firstName, lastName, taxId, salary) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.taxId = taxId;
    this.salary = salary;
  }
  generatePaySlip() {
    let monthlySalary = this.salary / 12;
    return `Employee ID: ${this.id}
Name: ${this.firstName} ${this.lastName}
Tax ID: ${this.taxId}
Pay: ${monthlySalary}`;
  }
}

// #### 2. Manager Klasse

class Manager extends Employee {
  constructor(id, firstName, lastName, taxId, salary) {
    super(id, firstName, lastName, taxId, salary);
    this.managedEmployees = [];
  }

  addManagedEmployee(employee) {
    this.managedEmployees.push(employee);
  }
  removeManagedEmployee(employee) {
    this.managedEmployees = this.managedEmployees.filter(
      (currentEmployee) => {
        return currentEmployee.id !== employee.id;
      } // end filter
    );
    // this.managedEmployees.filter(function (e) {
    //   return e.id !== employee.id;
    // });
  }
}

const anEmployee = new Employee(42, "Ulus", "Karakoc", 56, 2000000);
const aManager = new Manager(113, "Frank", "Pointyhair", 88454, 90000.0);
result();
console.log(anEmployee.generatePaySlip());
result();
// console.log(aManager.generatePayslip());
