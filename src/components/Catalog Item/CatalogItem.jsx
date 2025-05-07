import React, { useContext, useEffect, useRef, useState } from 'react'
import cl from './CatalogItem.module.css'
import { useNavigate } from 'react-router-dom';
import { usePhoneContext } from '../../context/Context';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, Zoom } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/zoom';

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

    const [color, setColor] = useState(source.colors[0])
    const images = source.phonegallery[color]
    return (
        <div key={el_key} className={cl.container} >
            <div>
                <div className={cl.image}>
                    <Swiper
                        direction="horizontal"
                        loop={true}
                        modules={[Navigation, Pagination, Zoom, Scrollbar]}
                        scrollbar={{ draggable: true }}
                        zoom={{ maxRatio: 3, minRatio: 1 }}
                        className="mySwiper"
                    >
                        {images.map((img, i) => (
                            <SwiperSlide key={i}>
                                <div className="swiper-zoom-container">
                                    <img src={img} alt={`Slide ${i}`} />
                                </div>
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
                        Od {source.price} zl
                        <button onClick={() => { navigate(`/product/${source.id}`) }}>Podglad</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CatalogItem