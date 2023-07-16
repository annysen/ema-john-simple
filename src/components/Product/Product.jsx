import React from 'react';
import "./Product.css"
const Product = (props) => {
    const {id, name, category, seller, price, ratings, img} = props.product;
    return (
        <div className='product'>
            <img src={img} alt="" />
            <h4>{name}</h4>
        </div>
    );
};

export default Product;