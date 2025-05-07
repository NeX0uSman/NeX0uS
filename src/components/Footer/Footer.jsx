import React from 'react'
import './Footer.css'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div id="footer">
    <hr />
    <div className="row2">
      <div className="apple-block">
        <p style={{ textDecoration: "underline" }}><strong>Sigma Shop</strong></p>
        <p><strong>Sigma Shop</strong> – Oryginalne iPhone’y w najlepszych cenach.</p>
      </div>
      <div className="products-block">
        <p style={{ textDecoration: "underline" }}><strong>Produkty</strong></p>
        <p><Link to="/products" style={{color:"#0071e3", fontWeight:'500'}}>Zobacz wszystkie oferty</Link></p>
        <p style={{textAlign:'center'}}>Znajdziesz <Link to="/products" style={{color:"#0071e3", fontWeight:'500'}}>tu</Link> pełną ofertę produktów,<br/> nowości, promocje i aktualne informacje.</p>
      </div>
      <div className="contact-block">
        <p style={{ textDecoration: "underline" }}><strong>Skontaktuj się z nami</strong></p>
        <p><strong>Sigma Shop</strong></p>
        <p>ul. Nowoczesna 12</p>
        <p>00-001 Warszawa, Polska.</p>
        <p>Telefon: <span style={{ color: "#0071e3" }}>0800 702 322</span></p>
        <p>Wsparcie techniczne: <a target="_blank" href="https://sigmaShop@gmail.com"> sigmaShop@gmail.com</a></p>
      </div>
      <div className="socials-block">
        <p style={{ textDecoration: "underline" }}><strong>Socials</strong></p>
        <div className="socials-block-column">
          <p><i className="ph ph-instagram-logo" style={{ fontSize:"20px" }}></i> <a target="_blank" href="https://instagram.com/Apple">Apple Instagram</a></p>
          <p><i className="ph ph-x-logo" style={{ fontSize:"20px" }}></i> <a target="_blank" href="https://twitter.com/Apple">Apple X</a></p>
          <p><i className="ph ph-tiktok-logo" style={{ fontSize:"20px" }}></i> <a target="_blank" href="https://www.tiktok.com/@apple">Apple TT</a></p>
          <p><i className="ph ph-youtube-logo" style={{ fontSize:"20px" }}></i> <a target="_blank" href="https://youtube.com/Apple">Apple YT</a></p>
        </div>
      </div>
    </div>
    <hr />
    <div className="copyright row">
      <p>All copyright Reserved Artem Kyrpotenko (/\oX INC.)</p>
    </div>
  </div>
  )
}

export default Footer