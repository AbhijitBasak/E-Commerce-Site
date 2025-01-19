import React, { useState } from 'react'
import { NavLink } from 'react-router'
import { FiShoppingCart } from "react-icons/fi";
import { IoMenu, IoClose } from "react-icons/io5";


function Header() {

 const [menuIcon, setMenuIcon] = useState(false)

  return (
    <>
      {/* header section strats */}
      <header className="section-navbar">

        <div className="container">
          <div className="navbar-brand">
            <NavLink to="index">
              <h2>Giftos</h2>
            </NavLink>
          </div>

          <nav className={menuIcon ? "navbar active" : "navbar"}>
            <ul>
              <li className="nav-item">
                <NavLink to="/" className="nav-link">Home</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/about" className="nav-link">About</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/products" className="nav-link">Products</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/contact" className="nav-link">Contact</NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/cart"
                  className="nav-link add-to-cart"
                  id="cartValue"
                >
                  <FiShoppingCart className='cart-icon'/>
                  <span className='cart-value'>0</span>
                </NavLink>
              </li>

              <div className='mobile-navbar-btn'>
                <IoMenu className='mobile-nav-icon' onClick={() => setMenuIcon(false)}/>
                <IoClose className='mobile-nav-icon close-outline' onClick={() => setMenuIcon(true)}/>
              </div>

            </ul>
          </nav>
        </div>
      </header>
      {/* end header section */}

    </>

  )
}

export default Header

