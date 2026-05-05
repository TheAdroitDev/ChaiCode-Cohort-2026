import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useLocation } from "react-router-dom";

const ProductDetail = () => {
    const { id } = useParams();
    // const [product, setProduct] = useState(null);
    const location = useLocation();
    const product = location.state;
    useEffect(() => {
        const fetchProduct = async () => {
            const res = await fetch("https://api.freeapi.app/api/v1/public/randomproducts");
            const data = await res.json();

            const found = data.data.data.find(p => p.id == id);
            // setProduct(found);
        };

        fetchProduct();
    }, [id]);

    if (!product) return <h2>Loading...</h2>;

    return (
        <div>
            <h1>{product.title}</h1>

            {/* Images */}
            {product.images.map((img, i) => (
                <img key={i} src={img} width={150} />
            ))}

            <p>{product.description}</p>
            <h2>₹{product.price}</h2>
        </div>
    );
};

export default ProductDetail;