"use client";
import Link from "next/link";
import { FaCartPlus, FaCheck, FaTrademark } from "react-icons/fa";
import { useCart } from "../context/CartContext";

const Product = ({ data }) => {
  const { addToCart, cartItems } = useCart();
  const handleAddToCart = (item) => {
    addToCart(item);
  };

  return (
    <div className="relative p-7 gap-7 grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-3 xl:grid-cols-4 mx-auto overflow-hidden">
      {data.map((item) => {
        const isInCart = cartItems.some((cartitem) => cartitem.id === item.id);
        return (
          <div
            key={item.id}
            className=" bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300 border border-blue-200 flex flex-col overflow-hidden group relative"
          >
            <div className="overflow-hidden h-48">
              <img
                src={item.images[0]}
                alt={item.title}
                className="w-auto mx-auto h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="p-5 flex-1 flex flex-col">
              <span className="absolute top-3 left-2 text-lg capitalize text-blue-400">
                {item.category}
              </span>
              <button
                onClick={() => handleAddToCart(item)}
                disabled={isInCart}
                className={` absolute top-3 right-3 text-xl font-bold capitalize text-white outline-2 outline-blue-400 border-2 border-white rounded-full w-10 h-10 flex justify-center items-center hover:scale-[1.07] cursor-pointer transition-all duration-300
              ${isInCart ? "bg-green-500 cursor-not-allowed opacity-80" : "animated-scale bg-blue-400"}`}
              >
                {isInCart ? <FaCheck  /> : <FaCartPlus />}
              </button>
              <h3 className="text-lg font-bold text-blue-700 mb-2">
                {item.title}
              </h3>
              <p className="text-[16px] text-over-flow px-3 mb-2 text-gray-600">
                {item.description}
              </p>
              <span className="inline-block bg-blue-200 text-blue-700 px-3 py-1 rounded-full text-[14px] mb-2 font-bold">
                {Math.ceil(item.price)} $
              </span>
              <Link
                href={`/${item.id}`}
                className={`cursor-pointer mt-auto px-4 py-2 rounded-lg transition-colors text-xl font-bold shadow text-white ${isInCart ? "bg-green-500 hover:bg-green-600" : "bg-blue-500 hover:bg-blue-600" }`}
              >
                {isInCart ? "View Cart" : " Buy Now"}
              </Link>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Product;

// "use client";
// import Link from "next/link";
// import { FaCartPlus } from "react-icons/fa";
// import { useCart } from "../context/CartContext";

// const Products = ({ data }) => {
//   const { addToCart, cartItems } = useCart();

//   const handleAddToCart = (item) => {
//     addToCart(item);
//   };

//   return (
//     <div className="relative p-7 gap-7 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mx-auto overflow-hidden">
//       {data.map((item) => {
//         // ✅ تحقق إذا كان المنتج مضاف بالفعل في السلة
//         const isInCart = cartItems.some((cartItem) => cartItem.id === item.id);

//         return (
//           <div
//             key={item.id}
//             className="item bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300 border border-blue-200 flex flex-col overflow-hidden group relative"
//           >
//             <div className="overflow-hidden h-48">
//               <img
//                 src={item.images[0]}
//                 alt={item.title}
//                 className="w-auto mx-auto h-full object-cover group-hover:scale-105 transition-transform duration-300"
//               />
//             </div>

//             <div className="p-5 flex-1 flex flex-col">
//               <span className="absolute top-3 left-2 text-lg capitalize text-blue-400">
//                 {item.category}
//               </span>

//               {/* ✅ الزرار مع الشرط شغال تمام */}
//               <button
//                 onClick={() => handleAddToCart(item)}
//                 disabled={isInCart}
//                 className={`absolute top-3 right-3 text-xl font-bold capitalize text-white outline-2 outline-blue-400 border-2 border-white rounded-full w-10 h-10 flex justify-center items-center transition-all duration-300
//                   ${isInCart
//                     ? "bg-red-500 cursor-not-allowed opacity-80"
//                     : "bg-blue-400 hover:scale-[1.07] cursor-pointer"
//                   }`}
//               >
//                 <FaCartPlus />
//               </button>

//               <h3 className="text-lg font-bold text-blue-700 mb-2">
//                 {item.title}
//               </h3>
//               <p className="text-[16px] text-over-flow px-3 mb-2 text-gray-600">
//                 {item.description}
//               </p>
//               <span className="inline-block bg-blue-200 text-blue-700 px-3 py-1 rounded-full text-[14px] mb-2 font-bold">
//                 {Math.ceil(item.price)} $
//               </span>

//               <Link
//                 href={`/${item.id}`}
//                 className="cursor-pointer mt-auto px-4 py-2 rounded-lg transition-colors text-xl font-bold shadow bg-blue-500 hover:bg-blue-600 text-white"
//               >
//                 اشتري الآن
//               </Link>
//             </div>
//           </div>
//         );
//       })}
//     </div>
//   );
// };

// export default Products;
