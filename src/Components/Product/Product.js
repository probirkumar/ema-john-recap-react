import React from 'react';
import './Product.css'

const Product = (props) => {
    // console.log(props.product);
    const {handleAddToCart, product} = props;
    const {name, img, price, ratings, seller} = product;
    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className='product-info'>
                <p className='product-name'>{name}</p>
                <p>Price: ${price}</p>
                <p><small>Manufacturer: {seller}</small></p>
                <p><small> Rating: {ratings} star</small></p>
            </div>
            <button onClick={ ()=> handleAddToCart(product)} className='btn-cart'>
                <p className='btn-text'>Add To Cart</p>
            </button>
        </div>
    );
};

export default Product;