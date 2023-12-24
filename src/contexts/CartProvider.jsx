import React from "react";
import { useReducer, useContext, createContext } from "react";
import { toast } from "react-toastify";

const CartContext = createContext();

function cartReducer(cart, action) {
  console.log("Reducer method called");

  switch (action.type) {
    case "ADD_ITEM": {
      toast.success("Item added to cart");
      return [...cart, action.payload];
    }

    case "INCREASE_QTY": {
      return cart.map((row) => {
        if (row.id == action.payload) {
          return { ...row, quantity: row.quantity + 1 };
        } else {
          return row;
        }
      });
    }

    case "DECREASE_QTY": {
      return cart.map((row) => {
        if (row.id == action.payload) {
          return { ...row, quantity: row.quantity - 1 };
        } else {
          return row;
        }
      });
    }

    case "REMOVE_CART_ITEM":
      {
        return cart.filter((row) => row.id != action.payload);
      }
      return cart;
  }
}

export default function CartProvider({ children }) {
  // Always makes the state inside the function else it will give error
  const [cart, dispatch] = useReducer(cartReducer, []);

  // Add to cart button
  const addItemToCart = (newCartItem) => {
    dispatch({
      type: "ADD_ITEM",
      payload: newCartItem,
    });
  };

  // Increase Qty button
  const increaseQty = (id) => {
    dispatch({
      type: "INCREASE_QTY",
      payload: id,
    });
  };

  // Decrease Qty button
  const decreaseQty = (id) => {
    dispatch({
      type: "DECREASE_QTY",
      payload: id,
    });
  };

  // Remove item from the cart
  const removeCartItem = (id) => {
    dispatch({
      type: "REMOVE_CART_ITEM",
      payload: id,
    });
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        dispatch,
        addItemToCart,
        increaseQty,
        decreaseQty,
        removeCartItem,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}
