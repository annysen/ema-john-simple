import React, { useEffect, useState } from 'react';
import "./Shop.css"
import Product from '../Product/Product';
const Shop = () => {
    const [products, setProducts] = useState([])
    
    const [cart, setCart] = useState([])

// load data fropm fetch 
    useEffect(() => {
        fetch('products.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    },[])


    // add to cart event handler 
    const addToCart = (product) => {
        const newCart = [...cart, product];
        setCart(newCart)
    }
    return (
        <div className='shop-Container'>
            <div className='product-container'>
          {
            products.map(product => <Product
            key={product.id} product={product} addToCart={addToCart}
            ></Product>)
          }
            </div>
            <div className='cart-container'>
                <h4>Order Summary</h4>
                <p>Total Order {cart.length}</p>
            </div>
        </div>
    );
};

export default Shop;