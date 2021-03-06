import React, { useState, createContext } from "react"

// The context is imported and used by individual components that need data
//LocationContext stores date used in application
export const ProductContext = createContext()

// This component allows other components to use the context data
export const ProductProvider = (props) => {
    //useState hook defines a variable that holds the state of the compnent and a function to update it
    const [products, setProducts] = useState([])

    const getProducts = () => {
        return fetch("http://localhost:8088/products")
        .then(res => res.json())
        .then(setProducts)
    }

    const addProduct = productObj => {
        return fetch("http://localhost:8088/products", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(productObj)
        })
        .then(getProducts)
    }

    /*
        You return a context provider which has the
        `lroducts` state, `getlroducts` function,
        and the `addlroduct` function as keys. This
        allows any child elements to access them.
    */
    return (
        <ProductContext.Provider value={{
            products, getProducts, addProduct
        }}>
            {props.children}
        </ProductContext.Provider>
    )
}