"use client";
import React, { use } from "react";
import { FaCheck, FaShoppingCart } from "react-icons/fa";
import { useCart } from "../context/CartContext";

function Actions({product}) {
    const {cartItems , addToCart , increaseQuantity , decreaseQuantity} = useCart();
    const handelAddTCart = (item) => {
        addToCart(item);
    }
    const inCart = cartItems.some((item) => item.id === product.id);
  return (
    <div className="flex gap-3 pt-4">


      <button
      disabled={inCart}
      onClick={() => handelAddTCart(product)} className={`flex-1 flex items-center justify-center gap-2  text-white py-3 px-6 rounded-lg transition-colors ${(inCart ? " cursor-not-allowed opacity-80 bg-gray-500" : "bg-blue-400 hover:bg-blue-500 cursor-pointer" ) } >`}>
       <span className={inCart? "text-green-500 text-xl" : "text-xl text-white"}> {inCart ? <FaCheck/>: <FaShoppingCart /> }</span>
        <span className="font-medium">{inCart? "in Cart" :  "Add to Cart"}</span>
      </button>
    </div>
  );
}

export default Actions;
