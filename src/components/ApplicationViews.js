import React from "react"
import { Route, Routes } from "react-router-dom"
import { Home } from "./Home"
import { LocationCard } from "./locations/LocationCard"
// import { CustomerCard } from "./customer/CustomerCard"
// import { EmployeeCard } from "./employee/EmployeeCard"
// import { AnimalProvider } from "./animal/AnimalProvider"
// import { AnimalList } from "./animal/AnimalList"


export const ApplicationViews = () => {
    return (
        <Routes>
            {/* Render the location list when http://localhost:3000/ */}
            <Route exact path="/" element={<Home/>}/>
                
            {/* Render the animal list when http://localhost:3000/animals */}
            {/* <Route path="/animals" element={<AnimalProvider><AnimalList /></AnimalProvider>}/> */}
           
            {/* <Route path="/customers" element={<CustomerCard />}/> */}

            <Route path="/locations" element={<LocationCard />}/>

            {/* <Route path="/employees" element={<EmployeeCard />}/> */}

        </Routes>
    )
}
