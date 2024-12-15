"use client"

import React, { useState } from "react";
import ProductDetails from "./components/ProductDetails";
import CartModal from "./components/CartModal";

const App = () => {
  const [cart, setCart] = useState([]);

  const handleAddToCart = (item) => {
    setCart((prevCart) => ({
      ...prevCart,
      [`${item.size.size}_${item.color}`]: item,
    }));
  };

  return (
    <div className="h-screen px-4 sm:px-6 md:px-10 py-4 sm:py-6 md:py-10 flex justify-center items-start sm:items-center">
      <ProductDetails onAddToCart={handleAddToCart} />
      <CartModal cart={cart} />
    </div>
  );
};

export default App;
