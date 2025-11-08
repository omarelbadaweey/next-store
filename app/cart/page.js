
'use client'
import { useCart } from '../context/CartContext'
import Link from 'next/link'
import Image from 'next/image'
import { FaTrashAlt } from 'react-icons/fa'

export default function CartPage() {
    const { cartItems, removeFromCart, decreaseQuantity, increaseQuantity , clearCart } = useCart()
    // if cart Empty
    if (cartItems.length === 0) {
        return (
            <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 p-8">
                <div className="text-center max-w-md">
                    <div className="w-64 h-64 mx-auto mb-8 relative">
                        <Image
                            src="/empty-cart.webp"
                            alt="Empty Cart"
                            fill
                            className="object-contain"
                        />
                    </div>
                    <h1 className="text-3xl font-bold text-gray-800 mb-4">Your Cart is Empty</h1>
                    <p className="text-gray-600 mb-8">Looks like you haven't added any items to your cart yet.</p>
                    <Link
                        href="/"
                        className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-300 to-blue-400 text-white px-8 py-3 rounded-2xl font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105"
                    >
                        <span>Start Shopping</span>
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                        </svg>
                    </Link>
                </div>
            </div>
        )
    }

    // remove item
    const handleDelete = (itemId) => {
        removeFromCart(itemId)
    }
    // !!!!!!!!!! total + quantity !!!!!!!
    const totalAmount = cartItems.reduce((total, item) => total + Math.ceil(item.price * item.quantity), 0)

    return (
        <div className="min-h-screen mt-20 bg-gradient-to-br from-gray-50 to-blue-50 py-8 px-4">
            <div className="max-w-4xl mx-auto">
                <h1 className=" relative w-fit mx-auto before:w-full before:bg-blue-500 before:h-1 before:absolute before:-bottom-5  after:w-7 after:h-7 after:absolute after:-bottom-8 after:left-[50%] after:-translate-x-[50%] after:right-[50%]  after:rounded-full after:bg-white after:border-3 text-4xl font-bold text-blue-500 text-center mb-12">  Shopping Cart</h1>

                {/* Cart Items */}
                <div className="grid gap-6 mb-8">
                    {cartItems.map(item => (
                        <div
                            key={item.id}
                            className="group bg-white rounded-3xl shadow-sm hover:shadow-2xl transition-all duration-500 border border-gray-100 overflow-hidden transform hover:-translate-y-1"
                        >
                            <div className="flex flex-col md:flex-row items-center p-6">
                                {/* Product Image */}
                                <div className="relative w-20 h-20 md:w-24 md:h-24 rounded-2xl overflow-hidden bg-gray-100 flex-shrink-0 mb-4 md:mb-0 md:mr-6">
                                    {item.images[0] ? (
                                        <img
                                            src={item.images[0]}
                                            alt={item.title}
                                            fill
                                            className="object-cover"
                                        />
                                    ) : (
                                        <div className="w-full h-full bg-gradient-to-br from-blue-200 to-purple-200 flex items-center justify-center">
                                            <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                            </svg>
                                        </div>
                                    )}
                                </div>

                                {/* Product Info */}
                                <div className="flex-1 text-center md:text-left">
                                    <h3 className="text-xl font-semibold text-gray-800 mb-2">
                                        {item.title}
                                    </h3>
                                    <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 text-gray-600">
                                        <span className="flex items-center gap-1">
                                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                            </svg>
                                            Qty: {item.quantity}
                                        </span>
                                        <span className="flex items-center gap-1">
                                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                                            </svg>
                                            {Math.ceil(item.price)} $ each
                                        </span>
                                    </div>
                                </div>

                                {/* Price and Actions */}
                                <div className="flex items-center gap-6 mt-4 md:mt-0">
                                    <div className="flex items-center gap-3 bg-gray-100 rounded-lg px-3 text-xl">
                                        <button onClick={() => decreaseQuantity(item.id)} className="cursor-pointer w-8 h-8 flex items-center justify-center rounded-2xl hover:text-white hover:bg-yellow-400">-</button>
                                        <span className="font-medium">{item.quantity}</span>
                                        <button onClick={() => increaseQuantity(item.id)} className="cursor-pointer w-8 h-8 flex items-center justify-center rounded-2xl hover:text-white hover:bg-blue-400">+</button>
                                    </div>
                                    <div className="text-right w-">
                                        <p className="text-2xl font-bold text-green-600">
                                            {Math.ceil(item.price * item.quantity)} $
                                        </p>
                                    </div>
                                    <button
                                        onClick={() => handleDelete(item.id)}
                                        className="cursor-pointer p-3 bg-red-50 text-red-500 rounded-xl hover:bg-red-100 transition-colors duration-300 group/delete"
                                        aria-label="Remove item"
                                    >
                                        <svg className="w-5 h-5 group-hover/delete:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>



                {/* total */}
                <div className="bg-white rounded-3xl shadow-lg p-8 border border-gray-100">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-6 px-5">

                        <div className="text-center md:text-left">
                            <h2 className="text-2xl font-bold text-gray-800 mb-2">Total Amount</h2>
                            {/* <p className="text-gray-600">Including all taxes and shipping</p> */}
                        </div>
                        <div className="text-4xl font-bold bg-gradient-to-r from-green-500 to-green-600 bg-clip-text text-transparent mb-2 md:mb-0">
                            ${totalAmount}
                        </div>



                    </div>
                    <div className=" mx-auto flex flex-col md:flex-row items-center gap-4 md:gap-6 mt-4">

                        <div className="w-full flex flex-col md:flex-row gap-3">

                            <Link href={`/checkout`} className="cursor-pointer w-full md:w-[50%] bg-gradient-to-r from-green-500 to-emerald-600 text-white px-10 py-4 rounded-2xl font-semibold text-lg hover:shadow-xl transition-all duration-300 hover:scale-105 transform">
                                Proceed to Checkout
                            </Link>

                            <button
                                  onClick={() => clearCart()}
                                className="cursor-pointer w-full  md:w-[50%] bg-red-500 text-white px-6 py-4 rounded-2xl font-semibold text-lg hover:bg-red-600 transition-colors duration-300 flex items-center justify-center gap-2"
                            >
                                <FaTrashAlt className="w-5 h-5" />
                                Delete All Items
                            </button>
                        </div>
                    </div>
                </div>


                {/* Continue Shopping */}
                <div className="text-center mt-8">
                    <Link
                        href="/"
                        className="inline-flex items-center gap-3 text-blue-600 hover:text-blue-700 font-semibold transition-colors duration-300"
                    >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                        </svg>
                        Continue Shopping
                    </Link>
                </div>
            </div>
        </div>
    )
}