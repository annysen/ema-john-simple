import React, { useEffect, useState } from "react";
import "./Shop.css";
import Product from "../Product/Product";
import Cart from "../Cart/Cart";
import { addToDb, getShoppingCart } from "../../assets/utilities/fakedb";
const Shop = () => {
  const [products, setProducts] = useState([]);

  const [cart, setCart] = useState([]);

  // load data from fetch
  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  // load product and id from localStorage
  useEffect(() => {
    const storedCart = getShoppingCart();
    const savedCart = [];
    // step-1: get product id from storedCart
    for (const id in storedCart) {
      // step-2: get product using find method by id
      const addedProduct = products.find((product) => product.id === id);

      // step-3: set product quantity
      if (addedProduct) {
        const quantity = storedCart[id];
        addedProduct.quantity = quantity;
        // step-4: add saved cart to savedCart array
        savedCart.push(addedProduct);
      }
    }

    // step-5: set the savedCart to setCart
    setCart(savedCart);
  }, [products]);

  // add to cart event handler
  const addToCart = (product) => {
    const newCart = [...cart, product];
    setCart(newCart);
    addToDb(product.id);
  };
  return (
    <div className="shop-Container">
      <div className="product-container">
        {products.map((product) => (
          <Product
            key={product.id}
            product={product}
            addToCart={addToCart}
          ></Product>
        ))}
      </div>
      <div className="cart-container">
        <Cart cart={cart}></Cart>
      </div>
    </div>
  );
};

export default Shop;
