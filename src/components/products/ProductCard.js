import React from "react"
import "./Product.css"
export const ProductCard = ({product, productType}) => (
    <section className="product">
        <h3 className="productName">{product.name}</h3>
        <div className="productPrice">$ {product.price}</div>
        <div className="productType">{productType.name}</div>
    </section>
)
console.log(ProductCard)