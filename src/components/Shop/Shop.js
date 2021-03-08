import React, { useState } from 'react';
import fakeData from '../../fakeData'
import './Shop.css'


const Shop = () => {
    console.log(fakeData);

    const first10 = fakeData.slice(0, 10);
    const [products] = useState(first10);

    return (
        <div className="shop-contaienr">
            <div className="product-container">
                <h1>Shop</h1>
                <ul>
                    {
                        products.map(product => <li>{product.name}</li>)
                    }
                </ul>
            </div>
            <div className="cart-container">
            <h3>Cart Container</h3>

            </div>
        </div>
    );
};

export default Shop;