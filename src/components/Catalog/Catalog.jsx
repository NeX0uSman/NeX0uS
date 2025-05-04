import React from 'react'
import { iphones } from '../../catalog'
import CatalogItem from '../Catalog Item/CatalogItem'
import cl from './Catalog.module.css'

const Catalog = () => {
  return (
    <div className={cl.item_info}>
    <p style={{ fontSize: "50px", marginLeft:"35px" }}>Nasze oferty</p>
    <div className={cl.catalog}>
      {iphones.map((el, index) => <CatalogItem source={el} el_key={index} key={index} />)}
    </div>
  </div>
  )
}

export default Catalog