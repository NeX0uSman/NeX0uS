import React from 'react'
import cl from './CartItem.module.css'
import 'swiper/css/bundle'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { useCartContext } from '../CartProvider/CartProvider';

const CartItem = ({ source, el_key }) => {
    const {deleteFromCart} = useCartContext()
    return (
        <div key={el_key} className={cl.container} >
                <div className={cl.image}>
                    <img src={source.image} />
                </div>
                <div className={cl.price_name_and_colors} >
                    <hr />
                    {source.name}<br />
                    {source.memory}
                    <div className={cl.row}>
                        {source.price} zl
                        <button onClick={() => deleteFromCart(source.uniqueId)}>Usun</button>
                    </div>
                </div>
        </div>
    )
}

export default CartItem