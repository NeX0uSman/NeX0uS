import React, { useState, useLayoutEffect, useContext } from 'react'
import "./ProductPage.css"
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { iphones } from '../../catalog.js'
import AI from '../../assets/apple-intelligence.jpg'
import { useParams } from 'react-router-dom'
import { PhoneProvider, usePhoneContext } from '../../context/Context.jsx'
import { useCartContext } from '../CartProvider/CartProvider.jsx'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Zoom } from 'swiper/modules'
import 'swiper/css';
import 'swiper/css/bundle'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/zoom';
import cl from './ProductPage.module.css'

const ProductPage = () => {

  const navigate = useNavigate()
  const { product, id, memory, setMemory, color, setColor, safeColor, safeMemory } = usePhoneContext()
  const { cart, addToCart, cartAmount } = useCartContext()

  const colorMap = {
    Czarny: '#000000',
    Bialy: '#FFFFFF',
    'Ultramaryna': '#3B4CCA',
    'Berylowa Zielen': '#7BA05B',
    'Rozowy': '#FFC0CB',
    'Tytan naturalny': '#D6D6D6',
    'Tytan biały': '#F1F1F1',
    'Tytan czarny': '#333',
    'Tytan pustynny': '#C2B280'
  };

  /*const redirect = () => {
    navigate('/')
  }*/
  let location = useLocation()
  console.log("Current Phone:", product)
  console.log("Current memory:", memory)
  console.log("Color:", color);
  console.log("Images:", product.images);
  console.log("Image source:", product.images[color]);
  console.log("Trying to find", product.name, "with color:", color, ",", "available colors:", product.colors)
  console.log(cart)
  let models = iphones.filter((el) => el.id !== Number(location.pathname.split('/')[2]))
  return (
    <>
      <div id="container">
        <hr />
        <div id="main">
          <div className="wrapper">
            <div className="header">
              <div className="text">
                <div className='row-top'>
                  <div className='column-top'>
                    <p><strong><i className="ph ph-apple-logo"></i>{product.name}</strong></p>
                    <p><strong>{product.storages[safeMemory].price} zł </strong></p>
                    <div className="under-phone">
                      <img src={AI} alt="iphone 16 pro back/front image" />
                      <p><strong>Stworzony dla Apple Intelligence</strong></p>
                    </div>
                  </div>
                  <div className='column-top-button'>
                    <button onClick={() => addToCart(product, safeMemory, safeColor)}>Dodaj Do Koszyka</button>
                  </div>
                </div>

              </div>
            </div>
            <div className="main-text">
              <div className="left-part">
                <div className={cl.mySwiper}>
                  <Swiper
                    direction="horizontal"
                    loop={true}
                    navigation={true}
                    pagination={{ clickable: true }}
                    zoom={{ maxRatio: 3, minRatio: 1 }}
                    modules={[Navigation, Pagination, Zoom]}
                    className="mySwiper"
                    style={{ width: '1000px', height: "700px" }}
                  >
                    {product.phonegallery[safeColor].map((el, index) => (
                      <SwiperSlide key={index}>
                        <div className='swiper-zoom-container'>
                          <img style={{
                            maxWidth: '100%',
                            maxHeight: '100%',
                            objectFit: "contain"
                          }} src={el} alt={`Photo ${index}`} />
                        </div>

                      </SwiperSlide>
                    ))}
                  </Swiper>
                </div>
              </div>
              <div className="right-part">
                <p><strong>Wybierz swoj <i className="ph ph-apple-logo"></i> {product.name}</strong></p>
                <p><strong>Model.</strong> Który jest najlepszy dla <strong>Ciebie?</strong></p>
                <ul className="model-list">
                  {models.map((el, index) => <li key={index}><button key={index} style={{ textDecoration: 'none' }} onClick={() => { navigate(`/product/${el.id}`) }}>{el.name}</button></li>)}
                </ul>
                <p><strong>Pamiec.</strong> Jaka jest najlepsza dla <strong>Ciebie?</strong></p>
                <ul className="memory-list">
                  {Object.keys(product.storages).map((el, index) => {
                    return <li key={index} ><button className={safeMemory === el ? 'active' : ''} onClick={() => setMemory(el)}>{el}</button></li>
                  })}
                </ul>
                <p>Kolor.<strong>Wybierz swój ulubiony.</strong></p>
                <p id="color"></p>
                <ul className="color-list">
                  {product.colors.map((el, index) => {
                    return <li key={index}><button className={safeColor === el ? 'active' : ''} id={index} key={index} onClick={() => setColor(el)}
                      style={{
                        backgroundColor: colorMap[el] || '#ccc',
                        width: '75px',
                        height: '50px',
                        borderRadius: '12px',
                        cursor: 'pointer'
                      }}></button></li>
                  })}
                </ul>
                <div className="delivery-info">
                  <div className="delivery-text">
                    <h2><i className="ph ph-truck"></i> Szybka i wygodna dostawa</h2>
                    <p>
                      Wysyłamy zamówienia w ciągu 24 godzin od momentu ich złożenia. Dostawa na terenie
                      całego kraju zajmuje zazwyczaj od 1 do 2 dni roboczych.
                    </p>
                    <p>
                      Wszystkie produkty są starannie pakowane. Po nadaniu paczki otrzymasz numer do
                      śledzenia przesyłki. Przy zamówieniach powyżej 4699 zł – dostawa gratis!
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="middle-part">
            <div id="text-img">
              <p style={{ fontSize: '32px' }}>
                Twoj nowy {product.name}<br />
                Dokladnie jak Chcesz.
              </p>
              <img src={product.images[safeColor][1]} alt="iphone 16 pro black titanium image" />
            </div>
            <div id="column-info">
              <p style={{ fontSize: 'larger', fontWeight: '500', color: 'black' }}>{product.name} {safeMemory} – {safeColor}
              </p>
              <p><strong>{product.storages[safeMemory].price} zł</strong></p>
              <hr />
              <p><strong>Potrzebujesz więcej czasu?</strong><br />
                Zachowaj wszystkie wybory, zapisując to urządzenie w Zapisanych produktach tak,<br />
                by wrócić do zakupów w dogodnej chwili.
              </p>
              <p><strong>Masz pytania?</strong>
                Zadzwoń pod numer <span style={{ color: "#0071e3" }}>800‑702‑322.</span></p>
            </div>
            <div id="order-info">
              <p>Dostawa:<br />
                w magazynie<br />
                Bezpłatna dostawa<br />
              </p>
              <p><a style={{ color: "#0071e3" }} href="/">Zobacz daty dostawy</a></p>
              <button>Wloz do torby</button>
            </div>

          </div>
          <div id="box2">
            <div className="column">
              <p style={{ fontSize: "32px" }}><strong>Zawartość opakowania</strong></p>
              <div className="row">
                <div>
                  <img src={product.images[safeColor][2]} alt="iphone 16 pro black tytan image" />
                </div>
                <div>
                  <img src={product.images[safeColor][3]} alt="iphone cable image" />
                </div>
              </div>
              <p><strong>Ochrona środowiska według <i className="ph ph-apple-logo"></i>Apple</strong></p>
              <p className="small">
                Żeby osiągnąć neutralność węglową do 2030 roku, iPhone’a 16 Pro i iPhone’a 16 Pro Max
                sprzedajemy bez zasilacza i słuchawek EarPods.<br />
                W pudełku znajdziesz przewód USB-C do szybkiego ładowania zgodny z zasilaczami USB-C i portami w
                komputerach.<br />

                Zachęcamy do korzystania z dowolnego zgodnego zasilacza USB‑C. Jeśli potrzebujesz nowego<br />
                zasilacza lub nowych słuchawek od Apple, możesz je dokupić.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
export default ProductPage