import React, { useEffect } from "react";
import { HashLink as Link } from "react-router-hash-link";
import ItemCard from "../components/ItemCard";
import { motion } from "framer-motion";
import { useState } from "react";

const Delivery = ({ products, handleCartAdd }) => {
  const [selected, setSelected] = useState("sushi");
  let lists = [
    { name: "Umaī Sushi", data: "sushi" },
    { name: "Umaī Ramen", data: "ramen" },
    { name: "Umaī Rice", data: "rice" },
    { name: "Umaī Deserts", data: "desert" },
  ];
  let title = "DELīVERY AT YOUR HOME";
  let breadcrumbs = "ご自宅への配送 / Delivery";
  let floatingTitle = "ご自宅への配送 / Delivery ";

  const handleSelected = (e) => {
    document
      .querySelectorAll("li")
      .forEach((li) => li.setAttribute("hover-visible", "false"));
    e.target.setAttribute("hover-visible", "true");
    setSelected(e.target.id);
  };

  const allLists = lists.map((list, index) => (
    <li
      key={index}
      id={list.data}
      onClick={(e) => handleSelected(e)}
      className="text-blue text-2xl p-4 rounded-ee-[2em] rounded-ss-[2em] bg-white drop-shadow hover:text-pink hover:scale-110 active:scale-110 hover:cursor-pointer"
    >
      {list.name}
    </li>
  ));
  const selectedProducts = products.filter((p) => p.data === selected);
  const shownProducts = selectedProducts.map((product) => (
    <ItemCard product={product} key={product.id} handleAdd={handleCartAdd} />
  ));
  useEffect(() => {
    let initialId = document.getElementById("sushi");
    initialId.setAttribute("hover-visible", "true");
  }, []);
  return (
    <section
      className="section section-delivery  my-8 flex flex-col"
      id="delivery"
    >
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="my-8 flex flex-col gap-4 px-5 text-center"
      >
        <Link to="/#delivery">
          <h2 className="text-xl font-bold text-pink text-center md:mt-20">
            {breadcrumbs}
          </h2>
        </Link>
        <h1 className="font-tokyo text-6xl font-semibold text-blue relative overflow-hidden">
          <span className="floating-title">{floatingTitle}</span>
          {title}
        </h1>
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="flex flex-col px-2"
      >
        <ul className="grid grid-cols-2 gap-4 md:flex">{allLists}</ul>
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-4 md:grid md:grid-cols-3">{shownProducts}</div>
          <div className="flex flex-col gap-2 md:flex-row">
            <Link to="/cart" className="section-button">
              Go To Cart
            </Link>
            
          </div>
        </div>
      </motion.div>
    </section>
  );
};
export default Delivery;
