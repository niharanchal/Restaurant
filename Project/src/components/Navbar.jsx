import React, { useRef } from 'react'
import logo from "../components/assets/logo.png"
import { IoSearch } from "react-icons/io5";
import { FaShoppingCart } from "react-icons/fa";
import { FaBars } from "react-icons/fa";
import cartImage1 from "../components/assets/cart-item01.png"
import cartImage2 from "../components/assets/cart-item02.png"
import cartImage3 from "../components/assets/cart-item03.png"
import cartImage4 from "../components/assets/cart-item04.png"
import { FaTimes } from "react-icons/fa";



const Navbar = () => {
    const searchRef=useRef()
    const cartRef=useRef()
    const navbarRef=useRef()
    const searchHandler=()=>{
        searchRef.current.classList.toggle("active")
        cartRef.current.classList.remove("active")
        navbarRef.current.classList.remove("active")
    }
    const cartHandler=()=>{
        cartRef.current.classList.toggle("active")
        searchRef.current.classList.remove("active")
        navbarRef.current.classList.remove("active")
    }
    
    
    const navbarHandler=()=>{
        navbarRef.current.classList.toggle("active")
        searchRef.current.classList.remove("active")
        cartRef.current.classList.remove("active")
    }
    const cart=[cartImage1,cartImage2,cartImage3,cartImage4];
  return (
    <>
      <header className='header'>
        <a href="#" className='logo'>
            <img src={logo} alt="" />
        </a>
        <nav className="navbar" ref={navbarRef}>
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#menu">Menu</a>
            <a href="#products">Product</a>
            <a href="#review">Review</a>
            <a href="#contact">Contacts</a>
            {/* <a href="#blogs">Blogs</a> */}
        </nav>
        <div className="icons">
            <i onClick={searchHandler}><IoSearch /></i>
            <i onClick={cartHandler}><FaShoppingCart /></i>
            <i id='menu-btn' onClick={navbarHandler}><FaBars /></i>
        </div>
        <div className='search-form ' ref={searchRef}>
            <input type="search" name="" id="search-box"  placeholder='Search here..'/>
            <label htmlFor="search-box" ></label>
        </div>
        <div className="cart-item-container" ref={cartRef}>
        {
            cart.map((ele,index)=>(
                <div className="cart-item" key={index}>
                    <span className='times-icon'><FaTimes /></span>
                    <img src={ele} alt="" />
                    <div className="content">
                        <h3>cart item</h3>
                        <div className="price">₹119</div>
                    </div>
                </div>
            ))
        }
        <a href="#" className='btn'><button>Checkout Now</button></a>
        </div>
      </header>
    </>
  )
}


export default Navbar
