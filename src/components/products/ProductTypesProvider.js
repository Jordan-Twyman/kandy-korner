import React, { useState, createContext } from "react"

// The context is imported and used by individual components that need data
//LocationContext stores date used in application
export const ProductTypeContext = createContext()

// This component allows other components to use the context data
export const ProductTypeProvider = (props) => {
    //useState hook defines a variable that holds the state of the compnent and a function to update it
    const [productTypes, setProductTypes] = useState([])

    const getProductTypes = () => {
        return fetch("http://localhost:8088/productTypes")
        .then(res => res.json())
        .then(setProductTypes)
    }

    const addProductType = productTypeObj => {
        return fetch("http://localhost:8088/productTypes", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(productTypeObj)
        })
        .then(getProductTypes)
    }

    /*
        You return a context provider which has the
        `lroducts` state, `getlroducts` function,
        and the `addlroduct` function as keys. This
        allows any child elements to access them.
    */
    return (
        <ProductTypeContext.Provider value={{
            productTypes, getProductTypes, addProductType
        }}>
            {props.children}
        </ProductTypeContext.Provider>
    )
}

