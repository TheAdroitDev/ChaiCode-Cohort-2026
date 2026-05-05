import React, { useEffect, useState } from 'react'
import { Link } from "react-router-dom";
const Products = () => {
    const [Product, setProduct] = useState([])

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await fetch("https://api.freeapi.app/api/v1/public/randomproducts")
                const result = await response.json()
                //  console.log(result.data.data);
                setProduct(result.data.data)
            } catch (error) {
                console.log("Something goes wrong while fetching products", error);
            }
        }

        fetchProducts()
    }, [])

    return (
        <div className='container'>
            {Product.map((p) => (
                <Link to={`/product/${p.id}`} key={p.id}>
                    <div className="product-card">
                        <img className="thumbnail" src={p.thumbnail} alt={p.title + "image"} />
                        <div className="product-name">{p.title}</div>
                        <p className="product-description">{p.description}</p>
                        <div className="product-price">₹{p.price}</div>
                        <div className="discount">₹{p.discountPercentage.toFixed(0) + " OFF"}</div>
                        <div className="rating">⭐{p.rating}</div>
                        <div className="brand">{p.brand}</div>
                        <div className="category">{p.category.toUpperCase()}</div>
                    </div>
                </Link>
            ))}
        </div>
    )
}

export default Products