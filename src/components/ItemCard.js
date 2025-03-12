import React from "react";
import Banner from "../assets/products/banner.png";

const ItemCard = ({ product, handleAdd }) => {
  const handleCartAnimation = (e) => {
    const image = e.target.parentNode.childNodes[1];
    image.style.transform = "scale(1.1)";
    setTimeout(() => {
      image.style.transform = "scale(1)";
    }, 100);
  };

  return (
    <div className="flex flex-col p-6 rounded-ee-[5em] rounded-ss-[5em] bg-white drop-shadow gap-2">
      <div className="relative text-center text-xl font-bold text-white">
        <img src={Banner} width={250} height="auto" alt="banner"/>
        <p className="left-[50%] top-[40%] absolute translate-y-[-50%] translate-x-[-50%]">{product.japanese}</p>
      </div>
      <img
        src={product.img}
        width="auto"
        height={100}
        alt={product.name}
        className="max-h-28"
      />
      <p className="text-3xl text-center font-bold text-blue">{product.name}</p>
      <p className="text-orange text-lg"> ¥ {product.price}</p>
      <button
        className="section-button"
        aria-label="add product in your cart"
        onClick={(e) => {
          handleAdd(product, 1);
          handleCartAnimation(e);
        }}
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ItemCard;
