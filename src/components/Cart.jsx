import React from "react";
import { useCart } from "../contexts/CartProvider";
import CartItem from "./CartItem";

export default function Cart() {
  const { cart } = useCart();

  let totalAmount = 0;

  if (cart.length == 0) {
    return <h1>No Items found</h1>;
  }

  // Show the total Amount value in the modal pop up
  if (cart.length > 0) {
    totalAmount = cart.reduce((acc, item) => {
      return (acc += item.price * item.quantity);
    }, 0);
  }

  return (
    <>
      {cart.map((row) => (
        <CartItem key={row.id} {...row} />
      ))}
      <h1>Total Amount: {totalAmount}</h1>
    </>
  );
}
