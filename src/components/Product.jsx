import React from "react";
import { useCart } from "../contexts/CartProvider";
import styles from "./UI/Products.module.css";
import { toast } from "react-toastify";

export default function Product({ id, title, price, img }) {
  const { addItemToCart, cart } = useCart();

  function handleAdd() {
    const newCartItem = {
      id: id,
      title: title,
      price: price,
      img: img,
      quantity: 1,
    };
    // Check if item is already added in the cart. If yes then do not add it again and return
    const isItemAddedInCart = cart.some((row) => row.id === id);

    if (isItemAddedInCart) {
      toast.error("Item is already added in the cart");
      return;
    }

    addItemToCart(newCartItem);
  }
  return (
    <div className={styles.product}>
      <p>id: {id}</p>
      <img src={img} alt={title} className={styles.productImage} />
      <p className={styles.title}>Title: {title}</p>
      <p className={styles.price}>Price: {price}</p>
      <button type="button" className={styles.addToCartBtn} onClick={handleAdd}>
        Add to cart
      </button>
    </div>
  );
}
