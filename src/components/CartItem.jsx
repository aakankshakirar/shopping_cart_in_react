import React from "react";
import { useCart } from "../contexts/CartProvider";

export default function CartItem({ id, title, price, img, quantity }) {
  const { increaseQty, decreaseQty, removeCartItem } = useCart();

  return (
    <div
      style={{
        margin: "1rem",
        padding: "1rem",
        border: "2px solid #343434",
      }}
    >
      <p>id: {id}</p>
      <p>title: {title}</p>
      <p>price: {price}</p>
      <p>quantity: {quantity}</p>

      <button
        onClick={() => {
          increaseQty(id);
        }}
      >
        Increase Qty
      </button>

      <button
        onClick={() => {
          decreaseQty(id);
        }}
      >
        Decrease Qty
      </button>

      <button
        onClick={() => {
          removeCartItem(id);
        }}
      >
        Remove Item
      </button>
    </div>
  );
}
