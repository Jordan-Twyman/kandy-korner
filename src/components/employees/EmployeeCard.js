import React from "react";
import "./Employee.css"

export const EmployeeCard = ({employee, location}) => (
    <section className="employee">
        <h3 className="employeeName">{employee.name}</h3>
        <div className="employeeRate">${employee.hourlyRate}/hr</div>
        <div className="employeeManager">{employee.manager ? `Manager` : "Kandy Krew"}</div>
        <div className="employeeHours">{employee.fullTime ? `Full Time` : "Part Time"}</div>
        <div className="employeeFacility">{location.name}</div>
    </section>
)