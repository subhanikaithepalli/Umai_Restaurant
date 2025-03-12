import React, { useState } from "react";
import bookTableImageLeft from "../assets/images/leftbannerfix.png";
import bookTableImageRight from "../assets/images/rightbanner.png";
import { motion } from "framer-motion";

const Subscribe = ({ applyDiscount }) => {
  const [email, setEmail] = useState("");
  let breadcrumbs = "購読 / Subscribe";
  let floatingTitle = "購読 / Subscribe";
  const handleSubscription = (e) => {
    e.preventDefault();
    if (email === "") {
      createPopup("error");
    } else {
      applyDiscount();
      createPopup("discount");
      setEmail("");
    }
  };
  const createPopup = (type) => {
    const popupAlert = document.createElement("div");
    popupAlert.classList.add("popup");
    if (type === "error") popupAlert.innerText = `Your email cannot be empty!`;
    else if (type === "discount")
      popupAlert.innerText = `You joined membership! Enjoy 25% off to your next purchase!`;
    document.querySelector(".section-subscribe").append(popupAlert);
    setTimeout(() => {
      popupAlert.remove();
    }, 5000);
  };
  return (
    <section
      className="section section-subscribe bg-orange flex flex-col md:flex-row md:justify-between md:py-10 "
      id="subscribe"
    >
      <img
        src={bookTableImageLeft}
        alt="animated sushi table"
        loading="lazy"
        className="max-w-[100px] self-start md:min-w-[200px]"
        height="auto"
      />
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="flex flex-col gap-2 px-2"
      >
        <h2 className="text-xl font-bold text-white text-center hover:cursor-pointer">
          {breadcrumbs}
        </h2>
        <h1 className="text-6xl font-bold text-white text-center font-tokyo relative overflow-hidden">
          <span className=" floating-title">{floatingTitle}</span>
          Joīn Membershīp to get
          <br /> 25% off
        </h1>
        <p className="text-xl font-bold text-white text-center">
          Insert an email address to get a discount.
          <br />
          This works in the shopping cart.
        </p>
        <form className="flex gap-1" onSubmit={(e) => handleSubscription(e)}>
          <input
            type="email"
            name="email"
            id="subscribe-email"
            placeholder="Enter your email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="rounded-ee-[5em] rounded-ss-[5em] w-[15em] h-14 p-4 text-left focus:outline-pink"
          />
          <button type="submit" className="section-button bg-white">
            Submit
          </button>
        </form>
      </motion.div>
      <img
        className="max-w-[100px] self-end md:min-w-[200px]"
        src={bookTableImageRight}
        alt="animated sushi table"
        height="auto"
        loading="lazy"
      />
    </section>
  );
};
export default Subscribe;
