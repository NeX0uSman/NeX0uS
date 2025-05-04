import { createContext, useContext, useState } from "react";
import { iphones } from "../catalog";
import { useParams } from "react-router-dom";

const PhoneContext = createContext()

export const usePhoneContext = () => useContext(PhoneContext)

export const PhoneProvider = ({ children }) => {

    const { id } = useParams();
    const product = iphones.find((el) => el.id == id)

    /*const phoneAddingToCart = iphones.find()*/
    const [cart, setCart] = useState([])
    const values = {
        cart, setCart, product, id
    }
    return <PhoneContext.Provider value={values}>
        {children}
    </PhoneContext.Provider>
}