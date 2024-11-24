import React from 'react'
import product1 from "../components/assets/product.png"
import product2 from "../components/assets/product.png"
import product3 from "../components/assets/product.png"
import { FaCartShopping } from "react-icons/fa6";
import { FaHeart } from "react-icons/fa";
import { FaEye } from "react-icons/fa";
import { FaStar } from "react-icons/fa6";
import { FaStarHalfAlt } from "react-icons/fa";


const Product = () => {
    const product=[product1,product2,product3]
  return (
    <section className='products' id='products'>
      <h1 className="heading">
        <span>Our</span>Products
      </h1>
      <div className="box-container">
            {
                product.map((ele,index)=>(
                    <div className="box">
                       <div className="icon">
                       <a href="#"><i><FaCartShopping /></i></a>
                        <a href="#"><i><FaHeart /></i></a>
                        <a href="#"><i><FaEye /></i></a>
                       </div>
                       <div className="image">
                        <img src={ele} alt="" />
                       </div>
                       <div className="content">
                        <h3>Fresh Coffee</h3>
                        <div className="stars">
                            <i><FaStar /></i>
                            <i><FaStar /></i>
                            <i><FaStar /></i>
                            <i><FaStar /></i>
                            <i><FaStarHalfAlt /></i>
                        </div>
                        <div className="price">
                        ₹99 <span>₹129</span>
                        </div>
                       </div>
                    </div>
                ))
            }
      </div>
    </section>
  )
}

export default Product
