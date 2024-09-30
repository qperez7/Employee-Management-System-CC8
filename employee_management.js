// Task 1: Create an Employee Class
class Employee {
    constructor(name,salary,position,department) {
        this.name = name;
        this.salary = salary;
        this.position = position;
        this.department = department;
}
getDetails() {
return `${this.name},${this.position},${this.salary},${this.department}`
}}
console.log(Employee.getDetails);
// Task 2: Create a Department Class
class Department {
    constructor (name,[]) {
        this.name = name;
        this.employees = [];
    }
addEmployee(employee) {
    return this.employees.push(employee)
}
getDepartmentSalary(employee) {
    return this.employees.reduce((acc,salary) =>  acc + employee.salary,0)
    
}
}
console.log(Department.addEmployee);
console.log(Department.getDepartmentSalary);
// Task 3: Create a Manager Class that Inherits from Employee
class Manager extends Employee {
    constructor (name,salary,position,department,bonus) {
    super(name,salary,position,department);
    this.bonus = bonus;
    }
getDetails() {
   return `${super.getDetails()},${this.bonus}`
}
}
console.log(Manager.getDetails);
// Task 4: Handle Bonuses for Managers
Department.prototype.calculateTotalSalaryWithBonus = function() {
    return console.log(getDepartmentSalary() += this.bonus)
};
console.log(Department.calculateTotalSalaryWithBonus)