import React from 'react';
import cl from './Cart.module.css';
import { useCartContext } from '../CartProvider/CartProvider';
import CartItem from '../CartItem/CartItem';

export default function Cart() {
  const { cart } = useCartContext();
  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className={cl.container}>
      <h1>Twój koszyk</h1>
      <div className={cl.innerContainer}>

        {/* список товаров йоу */}
        <div className={cl.left_part}>
          {cart.length
            ? cart.map((el, i) => <CartItem key={i} source={el} />)
            : <p>Twój koszyk jest pusty.</p>
          }
        </div>

        {/* детали заказа */}
        <aside className={cl.summaryCard}>
          <h2>Podsumowanie zamówienia</h2>

          <p className={cl.total}>
            <span>Razem:</span>
            <strong>{total} zł</strong>
          </p>

          <fieldset className={cl.fieldset}>
            <legend>Metoda płatności</legend>
            <label>
              <input type="radio" name="payment" value="googlePay" />
              Google Pay
            </label>
            <label>
              <input type="radio" name="payment" value="applePay" />
              Apple Pay
            </label>
            <label>
              <input type="radio" name="payment" value="creditCard" />
              Karta kredytowa
            </label>
          </fieldset>

          <fieldset className={cl.fieldset}>
            <legend>Firma kurierska</legend>
            <label>
              <input type="radio" name="courier" value="dpd" />
              DPD
            </label>
            <label>
              <input type="radio" name="courier" value="inPost" />
              InPost
            </label>
            <label>
              <input type="radio" name="courier" value="pocztex" />
              Pocztex
            </label>
          </fieldset>

          <button className={cl.checkoutButton} disabled={!cart.length}>
            Przejdź do płatności
          </button>
        </aside>

      </div>
    </div>
  );
}
