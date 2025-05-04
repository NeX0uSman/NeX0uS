import { createContext, useContext, useState } from "react";

const CartContext = createContext()

export const useCartContext = () => useContext(CartContext)

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([])
    const cartAmount = cart.length;
    const addToCart = (product, memory, color) => {
        setCart(prev => [...prev, {
            id: product.id, name: product.name, color: color,
            memory: memory, price: product.storages[memory].price, image:product.images[color][0], uniqueId: Date.now()
        }])
    }
    const deleteFromCart = (id) => {
        setCart(prev => prev.filter((el) => id !== el.uniqueId))
    }

    const values = {
        cart, setCart, addToCart, deleteFromCart, cartAmount
    }
    return <CartContext.Provider value={values}>
        {children}
    </CartContext.Provider>
}