import React from 'react';

const Product = (props) => {
    console.log(props)
    return (
        <div>
            <h2>{props.product.name}</h2>
        </div>
    );
};

export default Product;