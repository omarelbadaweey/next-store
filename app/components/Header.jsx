"use client";
import React, { useState } from "react";
import Link from "next/link";
import { FaBars, FaCartPlus, FaTimes } from "react-icons/fa";
import { useCart } from "../context/CartContext";

function Header() {
  // mobile menu state
  const [open, setOpen] = useState(false);

  const { cartItems } = useCart();

  return (
    <header className="py-3 shadow shadow-blue-200 fixed w-full h-[80px] bg-linear-to-l from-blue-200 via-blue-300 to-blue-100 z-50 top-0 left-0">
      <div className="flex justify-between items-center px-10 md:px-30">
        <Link
          href="/"
          className="w-15 h-15 border-3 border-blue-500 rounded-full overflow-hidden "
        >
          <img
            src="/hero.jpg"
            alt="Logo"
            className="object-cover  w-full scale-[3.5]"
          />
        </Link>

        <div className="flex items-center gap-5 md:gap-10">
          <div>
            {/* Desktop Nav */}
            <nav className="hidden md:flex gap-8 text-lg font-medium">
              <Link href="/" className="hover:text-blue-500 transition">
                Home
              </Link>
              <Link href="/about" className="hover:text-blue-500 transition">
                About
              </Link>
              <Link href="/contact" className="hover:text-blue-500 transition">
                Contact
              </Link>
            </nav>

            {/* Mobile button */}
            <button
              onClick={() => setOpen(!open)}
              className={`cursor-pointer block md:hidden ${
                open ? "text-4xl text-red-500" : "text-3xl text-white"
              }`}
            >
              {open ? <FaTimes /> : <FaBars />}
            </button>
          </div>
          <Link
            href="/cart"
            className="cursor-pointer text-blue-500 text-4xl relative"
            >
            <FaCartPlus />
            {cartItems.length > 0 &&
            <span className="absolute -top-2 bg-white w-6 h-6 font-bold rounded-full text-xl flex justify-center items-center">
              {" "}
              {cartItems.length}
            </span>
          }
          </Link>
        </div>
      </div>

      {/* Mobile Nav  */}
      <div
        className={`md:hidden bg-linear-to-l from-blue-200 via-blue-300 to-blue-100 z-50 overflow-hidden transition-all duration-500 ease-in-out ${
          open ? "max-h-60 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        {" "}
        <nav className="flex flex-col gap-3 text-center  py-4 text-lg font-medium border-t border-gray-300">
          <Link
            href="/"
            className="hover:bg-blue-500 hover:text-white rounded-full py-2 mx-8 transition-all duration-300"
            onClick={() => setOpen(false)}
          >
            Home
          </Link>
          <Link
            href="/about"
            className="hover:bg-blue-500 hover:text-white rounded-full py-2 mx-8 transition-all duration-300"
            onClick={() => setOpen(false)}
          >
            About
          </Link>
          <Link
            href="/contact"
            className="hover:bg-blue-500 hover:text-white rounded-full py-2 mx-8 transition-all duration-300"
            onClick={() => setOpen(false)}
          >
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;
