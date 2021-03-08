import React from 'react';
import './Product.css'
const Product = (props) => {
    const { name, img, seller, price, stock } = props.product
    return (
        <div className="product">
            <div>
                <img src={img} alt="" />
            </div>
            <div>
                <h4 className="title">{name}</h4>
                <p>by: {seller}</p>  
                <p>${price}</p>  
                <p>Only {stock} left in stock - Order soon </p>  
            </div>
        </div>
    );
};

export default Product;