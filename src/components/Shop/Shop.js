import React, { useState } from 'react';
import fakeData from '../../fakeData'
import Product from '../Product/Product';
import './Shop.css'


const Shop = () => {

    const first10 = fakeData.slice(0, 10);
    const [products] = useState(first10);
    const [cart, setCart] = useState([]);

    const handleAddProduct = (product) =>{
        console.log("Product Added!", product);
        const newCart = [...cart, product];
        setCart(newCart);
    }

    return (
        <div className="shop-contaienr">
            <div className="product-container">
                <h2>Shop</h2>
                {
                    products.map(product => <Product handleAddProduct = {handleAddProduct}  product = {product}></Product>)
                }

            </div>
            <div className="cart-container">
                <h2>Order Summery</h2>
                <h5>Items Ordered {cart.length}</h5>


            </div>
        </div>
    );
};

export default Shop;