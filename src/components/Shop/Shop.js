import React, { useState } from 'react';
import fakeData from '../../fakeData'
import Product from '../Product/Product';
import './Shop.css'


const Shop = () => {
    console.log(fakeData);

    const first10 = fakeData.slice(0, 3);
    const [products] = useState(first10);

    return (
        <div className="shop-contaienr">
            <div className="product-container">
                <h1>Shop</h1>
                {
                    products.map(product => <Product product = {product}></Product>)
                }

            </div>
            <div className="cart-container">
                <h3>Cart Container</h3>

            </div>
        </div>
    );
};

export default Shop;