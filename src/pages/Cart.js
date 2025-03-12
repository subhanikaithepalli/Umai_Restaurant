import React, { useEffect } from "react";
import CartItem from "../components/CartItem";
import { HashLink as Link } from "react-router-hash-link";
import arrowIcon from "../assets/icons/right-arrow.png";
import { motion } from "framer-motion";
import Subscribe from "./Subscribe";
import '../index.css'
const Cart = ({
  cart,
  useDiscounted,
  discounted,
  setCart,
  totalPrice,
  handleCartAdd,
  handleCartUpdate,
  handleCartRemove,
  setActiveSection,
  applyDiscount
}) => {
  let allCartItems = cart.map((cartItem) => (
    <CartItem
      cartItem={cartItem}
      key={cartItem.id}
      handleCartAdd={handleCartAdd}
      handleCartUpdate={handleCartUpdate}
      handleCartRemove={handleCartRemove}
    />
  ));
  const createPopup = () => {
    const popupAlert = document.createElement("div");
    popupAlert.classList.add("popup");
    popupAlert.innerText = `Your order has been placed!`;
    document.querySelector(".cart-section").append(popupAlert);
    setTimeout(() => {
      popupAlert.remove();
      setCart([]);
    }, 3000);
  };
  useEffect(() => {
    setActiveSection(null);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <section className="cart-section" id="cart">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <div className="flex flex-col justify-center items-center my-10 min-h-[70vh]">
          <h1 className="font-tokyo text-4xl font-bold text-blue">Shopping Cart</h1>
          <div className="flex flex-col items-stretch md:items-start border-b border-grey border-solid ">{allCartItems}</div>
          <div className="flex flex-col items-center md:flex-row md:items-end">
            <div className="flex items-center gap-2 text-grey hover:cursor-pointer">
              <Link to="/#delivery">
                <img
                  src={arrowIcon}
                  alt="icon to return to shopping menu"
                  height={21}
                  width="auto"
                />
              </Link>
              <Link to="/#delivery">Continue Shopping</Link>
            </div>
            {useDiscounted ? (
              discounted > 0 ? (
                <div className="flex">
                  <div className="flex flex-col items-start gap-1 md:items-end">
                    <div className="text-grey line-through text-sm">
                      <p>Subtotal:</p>
                      <h3 className="font-bold">¥ {totalPrice}</h3>
                    </div>
                    <div className="text-grey text-right">
                      <p className="text-xl md:text-base">After Discount:</p>
                      <h3 className="text-orange font-bold text-3xl md:text-xl">¥ {discounted}</h3>
                    </div>
                  </div>
                  <button
                    className="section-button self-end"
                    aria-label="place your order"
                    onClick={createPopup}
                  >
                    Place order
                  </button>
                </div>
              ) : (
                ""
              )
            ) : totalPrice > 0 ? (
              <div className="flex md:items-end gap-1">
                <p className="text-grey">Subtotal:</p>
                <h3 className="font-bold text-3xl text-orange">¥ {totalPrice}</h3>
                <button
                  className="section-button"
                  aria-label="place your order"
                  onClick={createPopup}
                >
                  Place order
                </button>
              </div>
            ) : (
              ""
            )}
          </div>
        </div>
        <Subscribe applyDiscount={applyDiscount}/>
      </motion.div>
    </section>
  );
};

export default Cart;

