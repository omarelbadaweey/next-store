'use client'
import { createContext, useContext, useState, useEffect } from 'react'

const CartContext = createContext()

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([])
  const [isLoaded, setIsLoaded] = useState(false)

  // جيب البيانات من localStorage
  useEffect(() => {
    try {
      const savedCart = localStorage.getItem('cartItems')
      if (savedCart) {
        setCartItems(JSON.parse(savedCart))
      }
    } catch (error) {
      console.log('Error loading cart from localStorage:', error)
    } finally {
      setIsLoaded(true)
    }
  }, [])

  // احفظ في localStorage
  useEffect(() => {
    if (isLoaded) {
      try {
        localStorage.setItem('cartItems', JSON.stringify(cartItems))
      } catch (error) {
        console.log('Error saving cart to localStorage:', error)
      }
    }
  }, [cartItems, isLoaded])

  // addToCart
  const addToCart = (product) => {
    setCartItems(prev => {
      const existing = prev.find(item => item.id === product.id)
      if (existing) {
        return prev.map(item => 
          item.id === product.id 
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      }
      return [...prev, { ...product, quantity: 1 }]
    })
  }

  // removeFromCart
  const removeFromCart = (productId) => {
    setCartItems(prev => prev.filter(item => item.id !== productId))
  }



      // increaseQuantity
    const increaseQuantity = (id) =>{
      setCartItems(PrevItems => PrevItems.map(item => 

        item.id === id ? {...item , quantity : item.quantity +1} : item
      ))
    }

    // decreaseQuantity
    const decreaseQuantity = (id) =>{
      setCartItems(PrevItems => PrevItems.map(item => 
        item.id === id && item.quantity >1 ? {...item , quantity : item.quantity -1} : item
      ))
    }

  // فانكشن علشان تفضل كمية منتج
  const updateQuantity = (productId, newQuantity) => {
    if (newQuantity < 1) {
      removeFromCart(productId)
      return
    }
    
    setCartItems(prev =>
      prev.map(item =>
        item.id === productId
          ? { ...item, quantity: newQuantity }
          : item
      )
    )
  }

  // فانكشن علشان تفضي السلة
  const clearCart = () => {
    setCartItems([])
  }

  return (
    <CartContext.Provider value={{ 
      cartItems, 
      addToCart, 
      removeFromCart, 
      clearCart,
      decreaseQuantity,
      increaseQuantity
    }}>
      {children}
    </CartContext.Provider>
  )
}

export const useCart = () => {
  const context = useContext(CartContext)
  if (!context) {
    throw new Error('useCart must be used within CartProvider')
  }
  return context
}