// Task 1: Create an Employee Class
class Employee {
    constructor(name,salary,position,department) {
        this.name = name;
        this.salary = salary;
        this.position = position;
        this.department = department;
}
// Stores information in the Employee Class
getDetails() {
return ( `${this.name},${this.position},${this.salary},${this.department}`)
}} 

// Task 2: Create a Department Class
class Department {
    constructor (name) {
        this.name = name;
        this.employees = [];
    }
// Adds employee and calculates department salary
addEmployee(employee) {
    return (this.employees.push(employee))
}
getDepartmentSalary() {
    return( this.employees.reduce((acc,employee) =>  acc + employee.salary,0)); 
    
}
// Added new method directly into Department Class as required in Task 4
 calculateTotalSalaryWithBonus() {

    return (this.employees.reduce((acc,employee) =>  {
   let bonus = employee instanceof Manager ? employee.bonus : 0;
   return acc + employee.salary + bonus; },0)); // Returns salary plus bonus for Managers
}};

// Task 3: Create a Manager Class that Inherits from Employee
class Manager extends Employee {
    constructor (name,salary,position,department,bonus) {
    super(name,salary,position,department);
    this.bonus = bonus;
    }
// Pulls from Employee class into Manager Class and adds bonus
getDetails() {
   return( `${super.getDetails()},${this.bonus}`)
}
}

// Task 4: Handle Bonuses for Managers
// This was added to the Department class (Task 2)



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
console.log(`Total salary for Engineering: $${engineering.getDepartmentSalary()}`); // Output: 200000
console.log(`Total salary with bonuses for Engineering: $${engineering.calculateTotalSalaryWithBonus()}`); // Output: 220000
console.log(`Total salary for Marketing: $${marketing.getDepartmentSalary()}`); // Output: 205000
console.log(`Total salary with bonuses for Marketing: $${marketing.calculateTotalSalaryWithBonus()}`); //Output: 230000