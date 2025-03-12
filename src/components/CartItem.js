import React, { useState } from "react";

const CartItem = ({
  cartItem,
  handleCartAdd,
  handleCartUpdate,
  handleCartRemove,
}) => {
  const [quantity, setQuantity] = useState(cartItem.quantity);

  const handleQuantityChange = (e) => {
    let quantNum = Number(e.target.value);
    setQuantity(quantNum);
    handleCartUpdate(cartItem, quantNum);
  };
  const handleAddSingular = () => {
    handleCartAdd(cartItem, 1);
    setQuantity(cartItem.quantity);
  };

  const handleRemoveSingular = () => {
    if (cartItem.quantity > 1) {
      handleCartAdd(cartItem, -1);
      setQuantity(cartItem.quantity);
    }
    // last item
    else if (cartItem.quantity === 1) {
      //update prod quant to 0
      handleCartAdd(cartItem, -1);
      //remove from cart
      // maybe add a popup with "item was removed from bag"
      handleCartRemove(cartItem);
    }
  };

  return (
    <div className="grid gap-2 py-2 md:grid-cols-2 md:gap-20">
      <div className="flex items-center px-2 justify-start gap-24 md:gap-2 ">
        <img src={cartItem.img} alt={cartItem.name} className="max-w-[50px]" />
        <div className="font-bold text-xl text-blue"> {cartItem.name}</div>
      </div>
      <div className="flex justify-between">
        <div className="flex items-center justify-center gap-2">
          <div
            aria-label="remove one product"
            className="font-bold text-2xl hover:cursor-pointer"
            onClick={() => handleRemoveSingular()}
          >
            -
          </div>
          <input
            type="number"
            min={"1"}
            max={"99"}
            value={quantity}
            aria-label="insert custom quantity"
            className="rounded h-[2.5em] w-[2.5em] border border-solid text-center p-[5px]"
            onChange={(e) => {
              handleQuantityChange(e);
              console.log(quantity);
            }}
          />
          <div
            aria-label="add one product"
            className="font-bold text-2xl hover:cursor-pointer"
            onClick={() => handleAddSingular()}
          >
            +
          </div>
        </div>
        <div className="italic text-blue text-lg">
          ¥{cartItem.price * cartItem.quantity}
        </div>
        <div
          className="font-bold text-xl hover:cursor-pointer"
          onClick={() => handleCartRemove(cartItem)}
        >
          x
        </div>
      </div>
    </div>
  );
};

export default CartItem;
