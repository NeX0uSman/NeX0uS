import React from 'react'
import './Header.css'
import { Link, useNavigate } from 'react-router-dom'

const Header = () => {

    const navigate = useNavigate()
    return (
        <div id="header">
            <div className="brand-container">
                <p><strong>Sigma</strong> shop</p>
            </div>
            <div className="container1">
                <Link to="/">Main page</Link>
            </div>
            <div className="container2">
                <Link to="/products">Models</Link>
            </div>
            <div className="container3">
                <Link to="/">About</Link>
            </div>
            <div className="container4">
                <Link to="/">Questions</Link>
            </div>
            <div className='pre-end-user-row'>
                <div className='end-user-row'>
                    <div><i className='ph ph-user' style={{ color: "white", fontSize: "20px" }}></i></div>
                    <div className='shopping-cart'><i className='ph ph-shopping-cart' style={{ color: "white", fontSize: "20px" }} onClick={() => navigate('/cart')}></i></div>
                </div>
            </div>
        </div>
    )
}

export default Header