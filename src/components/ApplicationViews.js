import React from "react"
import { Route, Routes } from "react-router-dom"
import { Home } from "./Home"
import { LocationList } from "./locations/LocationList"
import { LocationProvider } from "./locations/LocationProvider"
import { ProductList } from "./products/ProductList"
import { ProductProvider } from "./products/ProductProvider"
import { ProductTypeProvider } from "./products/ProductTypesProvider"



export const ApplicationViews = () => {
    return (
        <ProductTypeProvider>
        <ProductProvider>
        <LocationProvider>
        <Routes>
            {/* Render the location list when http://localhost:3000/ */}
            <Route exact path="/" element={<Home/>}/>
                
            {/* Render the animal list when http://localhost:3000/animals */}
            {/* <Route path="/animals" element={<AnimalProvider><AnimalList /></AnimalProvider>}/> */}
           
            <Route path="/products" element={<ProductList />}/>

            <Route path="/locations" element={<LocationList />}/>

            {/* <Route path="/employees" element={<EmployeeCard />}/> */}

        </Routes>
        </LocationProvider>
        </ProductProvider>
        </ProductTypeProvider>
        
    )
}
