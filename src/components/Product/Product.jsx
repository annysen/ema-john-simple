import React from 'react';
import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import "./Product.css"



const Product = (props) => {
    const {id, name, category, seller, price, ratings, img} = props.product;
    const addToCart = props.addToCart;
    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className='product-info'>
                <h6 className='product-name'>{name}</h6>
                <p >Price: ${price}</p>
                <p >Manufacturer: {seller}</p>
                <p >Rating: {ratings} stars</p>
            </div>
            <button onClick={() => addToCart(props.product)} className='btn-cart'>
                Add to Cart <FontAwesomeIcon icon={faShoppingCart} />
                </button>
        </div>
    );
};

export default Product;