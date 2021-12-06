import React, { useContext, useEffect, useState } from "react";
import { LocationContext } from "../locations/LocationProvider";
import { EmployeeContext } from "../employees/EmployeeProvider";
import "./Employee.css";
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2'


export const EmployeeForm = () => {
  const { addEmployee } = useContext(EmployeeContext);
  const { locations, getLocations } = useContext(LocationContext);

  /*
  With React, we do not target the DOM with `document.querySelector()`. Instead, our return (render) reacts to state or props.
  Define the intial state of the form inputs with useState()
  */

  const [employee, setEmployee] = useState({

    name: "",
    locationId: 0,
    manager:false,
    fullTime:false,
    hourlyRate:0    
});

  const navigate = useNavigate();

  /*
  Reach out to the world and get customers state
  and locations state on initialization.
  */
  useEffect(() => {
    getLocations();
  }, []);

  //when a field changes, update state. The return will re-render and display based on the values in state
  //Controlled component
  const handleControlledInputChange = (event) => {
    /* When changing a state object or array,
    always create a copy, make changes, and then set state.*/
    const newEmployee = { ...employee };
    /* Animal is an object with properties.
    Set the property to the new value
    using object bracket notation. */
    newEmployee[event.target.id] = event.target.value;
    // update state
    setEmployee(newEmployee);
  }

  const handleClickSaveEmployee = (event) => {
    event.preventDefault(); //Prevents the browser from submitting the form

    const locationId = parseInt(employee.locationId);
    const hourlyRate = parseFloat(employee.hourlyRate);
    const manager = Boolean(employee.manager)
    const fullTime = Boolean(employee.fullTime)

    employee.locationId = locationId
    employee.hourlyRate = hourlyRate
    employee.manager = manager
    employee.fullTime = fullTime
    

    if (locationId === 0) {
      // window.alert("Please select a location");
      Swal.fire({
        title: 'Error!',
        text: 'Please enter all available employee information',
        icon: 'error',
        confirmButtonText: 'Fix it'
      })
    } else {
      //invoke addAnimal passing animal as an argument.
      //once complete, change the url and display the animal list
      const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.addEventListener('mouseenter', Swal.stopTimer)
          toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
      })
      
      Toast.fire({
        icon: 'success',
        title: 'New Employee Saved!'
      })
      addEmployee(employee)
      .then(() => navigate("/employees"));
    }
  }

  return (
    <form className="employeeForm">
      <h2 className="employeeForm__title">New Employee</h2>
      <fieldset>
        <div className="form-group">
          <label htmlFor="name">Employee name:</label>
          <input type="text" id="name" onChange={handleControlledInputChange} required autoFocus className="form-control" placeholder="Employee name" value={employee.name}/>
        </div>
      </fieldset>
      <fieldset>
        <div className="form-group">
          <label htmlFor="name">Full Time:</label>
          <input type="checkbox" id="fullTime" name="fullTime" onChange={handleControlledInputChange} defaultvalue={employee.fullTime}
         unchecked/>
        </div>
      </fieldset>
      <fieldset>
        <div className="form-group">
          <label htmlFor="name">Manager:</label>
          <input type="checkbox" id="manager" name="manager" onChange={handleControlledInputChange} defaultvalue={employee.manager}
         unchecked/>
        </div>
      </fieldset>
      <fieldset>
        <div className="form-group">
          <label htmlFor="name">Hourly Rate:</label>
          <input type="number" id="hourlyRate" onChange={handleControlledInputChange} required className="form-control" placeholder="Hourly Rate" defaultvalue={employee.hourlyRate}/>
        </div>
      </fieldset>
      <fieldset>
        <div className="form-group">
          <label htmlFor="location">Assign to location: </label>
          <select defaultValue={employee.locationId} name="locationId" id="locationId" className="form-control" onChange={handleControlledInputChange} >
            <option value="0">Select a location</option>
            {locations.map(l => (
              <option key={l.id} value={l.id}>
                {l.name}
              </option>
            ))}
          </select>
        </div>
      </fieldset>
      <button className="btn btn-primary"
        onClick={handleClickSaveEmployee}>
        Save Employee
      </button>
    </form>
  );
}