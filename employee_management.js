// Task 1: Create an Employee Class
class Employee {
    constructor(name,salary,position,department) {
        this.name = name;
        this.salary = salary;
        this.position = position;
        this.department = department;
}
getDetails() {
console.log( `${this.name},${this.position},${this.salary},${this.department}`)
}}

// Task 2: Create a Department Class
class Department {
    constructor (name) {
        this.name = name;
        this.employees = [];
    }
addEmployee(employee) {
    console.log (this.employees.push(employee))
}
getDepartmentSalary() {
    console.log( this.employees.reduce((acc,salary) =>  acc + Employee.salary,0))
    
}
};

// Task 3: Create a Manager Class that Inherits from Employee
class Manager extends Employee {
    constructor (name,salary,position,department,bonus) {
    super(name,salary,position,department);
    this.bonus = bonus;
    }
getDetails() {
   console.log( `${super.getDetails()},${this.bonus}`)
}
}

// Task 4: Handle Bonuses for Managers
Department.prototype.calculateTotalSalaryWithBonus = function() {
     console.log(this.employees.reduce((acc,salary) =>  acc + Employee.salary +this.bonus,0))
};


//Task 5: Create and Manage Departments and Employees

// Create departments
const engineering = new Department("Engineering");
const marketing = new Department("Marketing");

// Create employees
const alice = new Employee("Alice", 80000, "Developer", "Engineering");
const bob = new Employee("Bob", 75000, "Designer", "Marketing");
const charlie = new Manager("Charlie", 120000, "Engineering Manager", "Engineering", 20000);
const diana = new Manager("Diana", 130000, "Marketing Manager", "Marketing", 25000);

// Add employees to departments
engineering.addEmployee(alice);
engineering.addEmployee(charlie);
marketing.addEmployee(bob);
marketing.addEmployee(diana);

// Calculate total salary for each department
console.log(`Total salary for Engineering: $${engineering.getDepartmentSalary()}`);
console.log(`Total salary with bonuses for Engineering: $${engineering.calculateTotalSalaryWithBonus()}`);
console.log(`Total salary for Marketing: $${marketing.getDepartmentSalary()}`);
console.log(`Total salary with bonuses for Marketing: $${marketing.calculateTotalSalaryWithBonus()}`);