import React, { useContext, useEffect } from "react"
import { ProductContext } from "./ProductProvider"
import { ProductCard } from "./ProductCard"
import "./Product.css"
import { ProductTypeContext } from "./ProductTypesProvider"

export const ProductList = () => {
    // This state changes when `getProducts()` is invoked below
    const { products, getProducts } = useContext(ProductContext)
    const { productTypes , getProductTypes } = useContext(ProductTypeContext)
  
    //useEffect - reach out to the world for something.
    //In this case it is reaching out to the api call for products
    useEffect(() => {
      console.log("ProductList: useEffect - getProducts")
      getProductTypes()
      .then(getProducts)
  
    }, [])
  
  
    return (
      <div className="products">
        {console.log("ProductList: Render", products)}
        {
          products.map(product => {
              const productType = productTypes.find(taco => taco.id === product.productTypeId);
            return <ProductCard key={product.id} product={product} productType={productType} />
          })
        }
      </div>
    )
  }