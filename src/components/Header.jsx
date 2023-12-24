import React, { useState } from "react";
import Modal from "./UI/Modal";
import Cart from "./Cart";
import styles from "./UI/Header.module.css";
import Container from "./UI/Container";
import { FaCartPlus } from "react-icons/fa";
import { useCart } from "../contexts/CartProvider";

export default function Header() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const { cart } = useCart();

  const totalQty = cart.reduce((acc, item) => {
    return (acc += item.quantity);
  }, 0);

  function closeModal() {
    setIsModalOpen(false);
  }

  return (
    <>
      <Container>
        <header className={styles.header}>
          <nav className={styles.nav}>
            <h1 className="logo">Shopping App</h1>
            <button
              onClick={() => setIsModalOpen(true)}
              className={styles.showCartButton}
            >
              <span className={styles.cartIconAndNumber}>
                <FaCartPlus />
                <span className={styles.number}>{totalQty}</span>
              </span>
              <span>Cart</span>
            </button>
          </nav>
          {isModalOpen && (
            <Modal closeModal={closeModal}>
              <Cart />
            </Modal>
          )}
        </header>
      </Container>
    </>
  );
}
