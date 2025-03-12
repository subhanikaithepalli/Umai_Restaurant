/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import dataSet from "../assets/products/dataSet.js";
import Navbar from "./Navbar";
import Home from "../pages/Home";
// import Menu from "../pages/Menu";
import MyFooter from "./MyFooter";
import Cart from "../pages/Cart";
import Reservation from "../pages/Reservation";
import ScrollToTop from "./ScrollToTop.js";

const App = () => {
  const [cart, setCart] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [products] = useState(dataSet);
  const [totalQuant, setTotalQuant] = useState(0);
  const [discounted, setDiscounted] = useState(0);
  const [useDiscounted, setUseDiscounted] = useState(false);
  // Used on store page and cart
  const handleCartAdd = (product, quantity) => {
    //Check if it exists in current cart
    const productIndex = cart.findIndex(
      (cartItem) => cartItem.id === product.id
    );
    // if it's > -1 it means it exists
    if (productIndex > -1) {
      const newCart = cart.slice();
      // Support for adding additional
      newCart[productIndex].quantity += quantity;
      setCart(newCart);
    } else {
      // Support for setting initial quantity
      product.quantity = quantity;
      // Set after already existing Cart
      setCart([...cart, product]);
    }
  };

  //Only used on individual products inside the Cart page
  const handleCartUpdate = (product, quantity) => {
    const productIndex = cart.findIndex((i) => i.id === product.id);
    const newCart = cart.slice();
    newCart[productIndex].quantity = quantity;
    setCart(newCart);
  };

  // Remove when you decrement from Store page up to 0 or Remove directly from Cart page
  const handleCartRemove = (product) => {
    const productIndex = cart.findIndex((i) => i.id === product.id);
    const newCart = cart.slice();
    newCart.splice(productIndex, 1);
    setCart(newCart);
    product.quantity = 0;
  };

  // Update total price and total items in cart (for Navbar and Cart page)
  const addTotal = () => {
    let sumQuantity = cart.reduce((accumulator, current) => {
      return accumulator + Number(current.quantity);
    }, 0);
    let sumPrice = cart.reduce((accumulator, current) => {
      return accumulator + Number(current.price * current.quantity);
    }, 0);

    setTotalPrice(sumPrice);
    setTotalQuant(sumQuantity);
    let discountedPrice = sumPrice - (sumPrice * 25) / 100;
    setDiscounted(discountedPrice);
  };
  const applyDiscount = () => {
    setUseDiscounted(true);
  };
  const [activeSection, setActiveSection] = useState(null);
  useEffect(() => {
    addTotal();
  }, [cart]);
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Navbar totalQuant={totalQuant} activeSection={activeSection} />
      <Routes>
        <Route
          exact
          path="/"
          element={
            <Home
              products={products}
              cart={cart}
              activeSection={activeSection}
              setActiveSection={setActiveSection}
              handleCartAdd={handleCartAdd}
              handleCartUpdate={handleCartUpdate}
              handleCartRemove={handleCartRemove}
              applyDiscount={applyDiscount}
            />
          }
        />
        <Route
          path="/cart"
          element={
            <Cart
              cart={cart}
              setActiveSection={setActiveSection}
              applyDiscount={applyDiscount}
              setCart={setCart}
              totalPrice={totalPrice}
              useDiscounted={useDiscounted}
              discounted={discounted}
              handleCartAdd={handleCartAdd}
              handleCartUpdate={handleCartUpdate}
              handleCartRemove={handleCartRemove}
            />
          }
        />
        <Route
          path="/reservation"
          element={<Reservation setActiveSection={setActiveSection} />}
        />
      </Routes>
      <MyFooter />
    </BrowserRouter>
  );
};

export default App;
