"use client";
import React, { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";

function Footer() {
  const [showButton, setShowBtn] = useState(false);
  useEffect(() => {
    const handelScroll = () => {
      if (window.scrollY > 150) {
        setShowBtn(true);
      } else {
        setShowBtn(false);
      }
    };
    window.addEventListener("scroll", handelScroll);

    return () => {
      window.removeEventListener("scroll", handelScroll);
    };
  }, []);

  const backtop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-linear-to-l from-blue-200 via-blue-300 to-blue-100 py-6">
      {/* button scroll-to-top */}
      {showButton && (
        <button
          onClick={backtop}
          className="cursor-pointer fixed right-5 bottom-5 w-12 h-12 mx-auto flex justify-center items-center bg-blue-500 border-3 border-white outline-3 outline-blue-500 text-2xl rounded-full text-white"
        >
          <FaArrowUp />
        </button>
      )}
      <div className="container mx-auto px-10 md:px-30">
        <div className="flex flex-col justify-between items-center gap-6">
          <div className="w-24 h-24 border-3 border-blue-500 rounded-full overflow-hidden">
            <img
              src="/hero.jpg"
              alt="Logo"
              className="object-cover w-full scale-[3.5]"
            />
          </div>
          <div className="flex gap-3">
            <img
              src="/facebook.png"
              alt="facebook"
              className="cursor-pointer border-3 border-transparent w-12 h-12 hover:border-blue-200 rounded-full transition-all duration-[.5s] hover:scale-[1.1] "
            />

            <img
              src="/twitter.png"
              alt="twitter"
              className="cursor-pointer border-3 border-transparent w-12 h-12 hover:border-blue-200 rounded-full transition-all duration-[.5s] hover:scale-[1.1] "
            />

            <img
              src="/instagram.png"
              alt="instagram"
              className="cursor-pointer border-3 border-transparent w-12 h-12 hover:border-blue-200 rounded-full transition-all duration-[.5s] hover:scale-[1.1] "
            />

            <img
              src="/linkedin.png"
              alt="linkedin"
              className="cursor-pointer border-3 border-transparent w-12 h-12 hover:border-blue-200 rounded-full transition-all duration-[.5s] hover:scale-[1.1] "
            />
          </div>

          <div className="text-center">
            <p className="text-gray-700 font-medium  text-sm sm:text-lg">
              © 2025 All rights reserved to{" "}
              <span className="border-2 border-amber-50 border-r-transparent border-t-transparent px-1 font-bold">
                Next-Store
              </span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
