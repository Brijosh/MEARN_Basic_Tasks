class Employee
{
    setEmployee(id,name,designation,salary)
    {
        this.empId=id;
        this.empName=name;
        this.empDesignation=designation;
        this.empSalary=salary;
        console.log('Employee details created');
    }

    printEmployee()
    {
        console.log(`${this.empId} , ${this.empName} , ${this.empDesignation} , ${this.empSalary} \n`);
    }
}

emp= new Employee();
emp.setEmployee(101,'Ramesh','Designer',58000);
emp.printEmployee();

emp1= new Employee();
emp1.setEmployee(102,'Sumesh','Developer',188000);
emp1.printEmployee();