import React from 'react'
import cl from "./Main.module.css"
import { iphones } from '../../catalog'
import CatalogItem from '../Catalog Item/CatalogItem'
import rightImage from '../../assets/banner2.png'

const Main = () => {
  return (
    <>
      <div className={cl['main-container']}>
        <div className={cl.header}>
          <div className={cl.header_row}>
            <div className={cl.text_block}>
              <p><strong>Sigma </strong>Shop</p>
              <ul>
                <li><i className='ph ph-check'></i> Działamy od 2025 roku</li>
               <li><i className='ph ph-check'></i> Tylko oryginalny sprzęt Apple</li>
                <li><i className='ph ph-check'></i> Tysiące opinii</li>
              </ul>
            </div>
            <div className={cl.image_block}>
              <img src={rightImage} />
            </div>
          </div>
          <div className={cl.benefits_row}>
            <div className={cl.block1}>
              <div>
                <i className='ph ph-truck' style={{ fontSize: '32px' }}></i>
                <p style={{ fontSize: '24px', fontWeight: "bold" }}>Wysyłka InPost</p>
                <p>Sprawdzony dostawca kurier lub paczkomat inPost</p>
              </div>
            </div>
            <div className={cl.block2}>
              <i className='ph ph-credit-card' style={{ fontSize: '32px' }}></i>
              <p style={{ fontSize: '24px', fontWeight: "bold" }}>Bezpieczna płatność</p>
              <p>Wiele sposobów bezpiecznych płatności</p>
            </div>
            <div className={cl.block3}>
              <i className='ph ph-shield-check' style={{ fontSize: '32px' }}></i>
              <p style={{ fontSize: '24px', fontWeight: "bold" }}>Gwarancja 24 miesiące</p>
              <p>Gwarancja w najlepszej cenie na rynku</p>
            </div>
            <div className={cl.block4}>
              <i className='ph ph-users-three' style={{ fontSize: '32px' }}></i>
              <p style={{ fontSize: '24px', fontWeight: "bold" }}>Tysiące opinii</p>
              <p>Sprawdź autentyczność w mediach społecznościowych</p>
            </div>
          </div>
        </div>
        <div className={cl.item_info}>
          <p style={{ fontSize: "50px" }}>Nasze oferty</p>
          <div className={cl.catalog}>
            {iphones.map((el, index) => <CatalogItem source={el} key={index} el_key={index} />)}
          </div>
        </div>
      </div>
    </>
  )
}

export default Main