import React from "react";
import "./Cart.css";

const Cart = (props) => {
  const { cart } = props;

  console.log(cart);

  //  total calculation
  let total = 0;
  let totalShipping = 0;
  let quantity = 0;
  for (const product of cart) {
    if (product.quantity === 0) {
      product.quantity = 1;
    }
    total = total + product.price * product.quantity;
    totalShipping = totalShipping + product.shipping;
    quantity = quantity + product.quantity;
  }

  const tax = (total * 7) / 100;

  const grandTotal = total + totalShipping + tax;

  return (
    <div className="cart">
      <h4>Order Summary</h4>
      <p>Selected Items: {quantity}</p>
      <p>Total price: ${total}</p>
      <p>Total Shipping: ${totalShipping}</p>
      <p>Tax: ${tax.toFixed(2)}</p>
      <h6>Grand Total: ${grandTotal.toFixed(2)}</h6>
      <small>*we have added 7% tax</small>
    </div>
  );
};

export default Cart;
