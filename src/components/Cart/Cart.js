import React from 'react';

const Cart = (props) => {
const cart = props.cart;
const total = cart.reduce((total,prd) => total + prd.price,0) ;

    return (
        <div>
            <h2>Order Summery</h2>
            <h5>Items Ordered {cart.length}</h5>
            <p>Total Price: {total}</p>
        </div>
    );
};

export default Cart;