import React from "react";
import "./Employee.css"

export const EmployeeCard = ({employee, location}) => (
    <section className="employee">
        <h3 className="employeeName">{employee.name}</h3>
        <div className="employeeRate">{employee.hourlyRate}</div>
        <div className="employeeManager">{employee.manager ? `Manager` : ""}</div>
        <div className="employeeHours">{employee.fullTime ? `Full Time` : ""}</div>
        <div className="employeeFacility">{location.name}</div>
    </section>
)