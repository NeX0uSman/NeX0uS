import { createContext, useContext, useState } from "react";
import { iphones } from "../catalog";
import { useParams } from "react-router-dom";

const PhoneContext = createContext()

export const usePhoneContext = () => useContext(PhoneContext)

export const PhoneProvider = ({ children }) => {

    const { id } = useParams();
    const product = iphones.find((el) => el.id == id)
    const [memory, setMemory] = useState(Object.keys(product.storages)[0])
    const [color, setColor] = useState(product.colors[0])
    const safeColor = product.colors.includes(color)
        ? color
        : product.colors[0]
    const safeMemory = Object.keys(product.storages).includes(memory)
        ? memory
        : Object.keys(product.storages)[0]

    const values = {
        product, id, memory, setMemory, color, setColor, safeColor, safeMemory
    }
    return <PhoneContext.Provider value={values}>
        {children}
    </PhoneContext.Provider>
}