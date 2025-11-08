"use client";
import React from "react";

function ChooseImage({ product }) {
  return (
    <div className="flex gap-3 justify-center">
      {product.images.slice(0, 4).map((img, index) => (
        <button
          key={index}
          className="w-16 h-16 rounded-lg overflow-hidden border border-gray-300 hover:border-blue-500"
        >
          <img
            src={img}
            alt={`${product.title} ${index + 1}`}
            className="cursor-pointer w-full h-full object-cover"
            onClick={() => (document.getElementById("image").src = img)}
          />
        </button>
      ))}
    </div>
  );
}

export default ChooseImage;