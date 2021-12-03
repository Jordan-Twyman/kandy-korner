import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { EmployeeContext } from "./EmployeeProvider";
import { EmployeeCard } from "./EmployeeCard";
import "./Employee.css";
import { LocationContext } from "../locations/LocationProvider";

export const EmployeeList = () => {
  // This state changes when `getAnimals()` is invoked below
  const { employees, getEmployees } = useContext(EmployeeContext);
  const { locations, getLocations } = useContext(LocationContext);
  const navigate = useNavigate();

  //useEffect - reach out to the world for something
  useEffect(() => {
    console.log("EmployeeList: useEffect - getEmployees")
    getLocations()
    .then(getEmployees);
  }, []);


  return (
    <>
      <h2>Employees</h2>
        <button onClick={() => {navigate('/employees/create')}}>
          Add Employee
        </button>
      <div className="employees">
        {console.log("EmployeeList: Render", employees)}
        {
          employees.map(employee => {
            // const owner = customers.find(c => c.id === employeeObj.customerId);
            const store = locations.find(l => l.id === employee.locationId);

            return <EmployeeCard 
                      key={employee.id}
                      location={store}
                      employee={employee} />
          })
        }
      </div>
    </>
  );
}