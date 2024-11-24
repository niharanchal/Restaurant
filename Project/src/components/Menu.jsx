import React from 'react'
import menu1 from "../components/assets/menu1.png"
import menu2 from "../components/assets/menu2.png"
import menu3 from "../components/assets/menu3.png"
import menu4 from "../components/assets/menu4.png"
import menu5 from "../components/assets/menu5.png"
import menu6 from "../components/assets/menu6.png"

const Menu = () => {
    const menu=[menu1,menu2,menu3,menu4,menu5,menu6]
  return (
    <section className='menu' id='menu'>
      <h1 className='heading'>
        <span>Our</span>Menu
      </h1>
      <div className="box-container">
        {
            menu.map((ele,index)=>(
                <div className="box">
                    <img src={ele} alt="" />
                    <h3>Tasty and Healthy</h3>
                    <div className="price">₹119 <span>₹159</span></div>
                    <a href="#" className="btn"><button>Add to cart</button></a>
                </div>
            ))
        }
      </div>
    </section>
  )
}

export default Menu
