import React from "react"
import { Route, Routes } from "react-router-dom"
import { Home } from "./Home"
import { LocationList } from "./locations/LocationList"
import { LocationProvider } from "./locations/LocationProvider"
// import { CustomerCard } from "./customer/CustomerCard"
// import { EmployeeCard } from "./employee/EmployeeCard"
// import { AnimalProvider } from "./animal/AnimalProvider"
// import { AnimalList } from "./animal/AnimalList"


export const ApplicationViews = () => {
    return (
        <LocationProvider>
        <Routes>
            {/* Render the location list when http://localhost:3000/ */}
            <Route exact path="/" element={<Home/>}/>
                
            {/* Render the animal list when http://localhost:3000/animals */}
            {/* <Route path="/animals" element={<AnimalProvider><AnimalList /></AnimalProvider>}/> */}
           
            {/* <Route path="/customers" element={<CustomerCard />}/> */}

            <Route path="/locations" element={<LocationList />}/>

            {/* <Route path="/employees" element={<EmployeeCard />}/> */}

        </Routes>
        </LocationProvider>
    )
}
