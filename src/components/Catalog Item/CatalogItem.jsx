import React, { useContext, useEffect, useRef } from 'react'
import cl from './CatalogItem.module.css'
import { useNavigate } from 'react-router-dom';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css/bundle'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { Swiper, SwiperSlide } from 'swiper/react';
import { PhoneProvider, usePhoneContext } from '../../context/Context';

const CatalogItem = ({ source, el_key }) => {
    const navigate = useNavigate()

    const colorMap = {
        Czarny: '#1a1a1a',              // Матово-чёрный
        Bialy: '#f0f0f0',               // Тёплый матовый белый
        'Ultramaryna': '#3b4c80',       // Приглушённая ультрамарина
        'Berylowa Zielen': '#6b8750',   // Матовая зелень
        'Rozowy': '#e4b6c0',            // Пыльно-розовый
        'Tytan naturalny': '#b8b8b8',   // Матовый светло-серый
        'Tytan biały': '#e5e5e5',       // Матовый белый
        'Tytan czarny': '#2a2a2c',      // Матово-чёрно-серый
        'Tytan pustynny': '#b8aa88'     // Песочный матовый
      };

    return (
        <div key={el_key} className={cl.container} >
            <div>
                <div className={cl.image}>
                    <Swiper
                        direction="horizontal"
                        loop={true}
                        navigation={true}
                        pagination={{ clickable: true }}
                        modules={[Navigation, Pagination]}
                        className="mySwiper"
                        style={{ height: '100%' }}
                    >
                        {source.phonegallery.map((el, index) => (
                            <SwiperSlide key={index}>
                                <img src={el} alt={`Photo ${index}`} />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>

                <div className={cl.price_name_and_colors} >
                    <hr />
                    {source.name}<br />
                    <div className={cl.colors_row} style={{ display: 'flex', gap: '8px', margin: '8px 0' }}>
                        {source.colors.map((el, index) =>
                            <button key={index} 
                                style={{
                                    backgroundColor: colorMap[el] || '#ccc',
                                    width: '30px',
                                    height: '30px',
                                    borderRadius: '50%',
                                    border: '1px solid #000',
                                    cursor: 'pointer'
                                }}
                            >
                            </button>)}<br />
                    </div>
                    <div className={cl.row}>
                        {source.price} zl
                            <button onClick={() => { navigate(`/product/${source.id}`) }}>Do koszyka</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CatalogItem