import React from 'react';
import './Cart.css'

const Cart = (props) => {
    const {cart} = props;

    let total = 0;
    let shipping = 0;
    let quantity = 0;
    for(const product of cart){
        quantity = quantity + product.quantity;
        total = total + product.price * product.quantity;
        shipping = shipping + product.shipping;
    }
    const tax = parseFloat((total * 0.1).toFixed(2));
    const grandTotal = total + shipping + tax;

    return (
        <div className='cart'>
            <h3>Order Summary</h3>
            <p>Selected Items: {quantity}</p>
            <p>Total Price: $ {total}</p>
            <p><small>Total Shipping: $ {shipping}</small> </p>
            <p><small>Tax: $ {tax}</small></p>
            <h5>Grand Total: $ {grandTotal}</h5>
        </div>
    );
};

export default Cart;