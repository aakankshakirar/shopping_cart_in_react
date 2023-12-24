import React from "react";
import { products } from "../data/products";
import Product from "./Product";
import Container from "./UI/Container";
import styles from "./UI/Products.module.css";

export default function Products() {
  return (
    <Container>
      <h1>Our Bestseller Products</h1>
      <div className={styles.products}>
        {products.map((row) => (
          <Product key={row.id} {...row} />
        ))}
      </div>
    </Container>
  );
}
