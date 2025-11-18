"use strict";

const employees = [
  { name: "Shrey", salary: "45000", years: "5" },
  { name: "Aonik", salary: "38000", years: "2" },
  { name: "Yash", salary: "52000", years: "7" },
];

for (let i = 0; i < employees.length; i++) {
  try {
    const emp = employees[i];

    if (!emp) throw new Error("Employee object missing");

    const salary = Number(emp.salary);
    const years = Number(emp.years);

    if (Number.isNaN(salary) || Number.isNaN(years)) {
      throw new Error("Invalid number conversion");
    }

    const bonus = years > 3 ? salary * 0.1 : salary * 0.05;

    console.log(
      `Name: ${emp.name} | Salary: ${salary} | Years: ${years} | Bonus: ${bonus}`
    );
  } catch (error) {
    console.error(`Error at employee ${i}: ${error.message}`);
  }
}
