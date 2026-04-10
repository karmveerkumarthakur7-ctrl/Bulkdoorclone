import React, { createContext, useState } from "react";

export const CartContext = createContext();

const CartContextProvider = ({ children }) => {

  const [cartItems, setCartItems] = useState([]);
  const [openCart, setOpenCart] = useState(false);

  const addToCart = (product) => {
    setCartItems([...cartItems, product]);
    setOpenCart(true);
  };

  const removeFromCart = (id) => {
    const updated = cartItems.filter((item) => item.id !== id);
    setCartItems(updated);
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        openCart,
        setOpenCart
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;