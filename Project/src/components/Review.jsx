import React from 'react'
import review from "../components/assets/review.png"
import reviews1 from "../components/assets/tom.webp"
import reviews2 from "../components/assets/motu.jpg"
import reviews3 from "../components/assets/jerry.webp"
import reviews4 from "../components/assets/patlu1.jpg"
import { FaStar } from "react-icons/fa6";
import { FaStarHalfAlt } from "react-icons/fa";

const Review = () => {
    const arr=[1,2,3,4]
    const reviews=[review,review,review,review]
    const image=[reviews1,reviews3,reviews4,reviews2]
    const name=["Luca","Elena","Sakura","Hiro"]
  return (
    <section className='review' id='review'>
      <h1 className="heading">
        <span>Customer's</span>Review
      </h1>
      {/* <div className="box-container">
     
       {arr.map((u)=>(

       
         <div className='box'>
         {reviews.map((ele)=>(
            <img src={ele} alt="" className='quote' />
        ))}
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam sequi sapiente, maxime delectus, expedita architecto pariatur soluta commodi, quidem consectetur eligendi reprehenderit nihil quaerat dolorum impedit magnam! Reprehenderit dolorum nobis sapiente vel odio aspernatur debitis!</p>
            {image.map((i)=>(
                <img src={i} alt="" className='user'/>
            ))}
            {name.map((o)=>(
                <h3 className='user-name'>{o}</h3>
            ))}
            <div className="stars">
                <i><FaStar /></i>
                <i><FaStar /></i>
                <i><FaStar /></i>
                <i><FaStar /></i>
                <i><FaStarHalfAlt /></i>
            </div>
            </div>
      
    ))}
      </div> */}
      <div className="box-containers">
        <div className="box">
            <img src={review} alt="" className='quote' />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam dolor magni ipsam debitis provident maxime quis a maiores hic distinctio perspiciatis corrupti veritatis ab enim voluptatibus assumenda, nam dicta totam. Quisquam cumque odio vitae explicabo.</p>
            <img src={reviews1} alt="" className='user' />
            <h3>Tom</h3>
            <div className="stars">
                <i><FaStar /></i>
                <i><FaStar /></i>
                <i><FaStar /></i>
                <i><FaStar /></i>
                <i><FaStarHalfAlt /></i>
            </div>
        </div>
        <div className="box">
            <img src={review} alt="" className='quote' />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam dolor magni ipsam debitis provident maxime quis a maiores hic distinctio perspiciatis corrupti veritatis ab enim voluptatibus assumenda, nam dicta totam. Quisquam cumque odio vitae explicabo.</p>
            <img src={reviews4} alt="" className='user' />
            <h3>Patlu
            </h3>
            <div className="stars">
                <i><FaStar /></i>
                <i><FaStar /></i>
                <i><FaStar /></i>
                <i><FaStar /></i>
                <i><FaStarHalfAlt /></i>
            </div>
        </div>
        <div className="box">
            <img src={review} alt="" className='quote' />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam dolor magni ipsam debitis provident maxime quis a maiores hic distinctio perspiciatis corrupti veritatis ab enim voluptatibus assumenda, nam dicta totam. Quisquam cumque odio vitae explicabo.</p>
            <img src={reviews3} alt="" className='user' />
            <h3>Jerry
            </h3>
            <div className="stars">
                <i><FaStar /></i>
                <i><FaStar /></i>
                <i><FaStar /></i>
                <i><FaStar /></i>
                <i><FaStarHalfAlt /></i>
            </div>
        </div>
        <div className="box">
            <img src={review} alt="" className='quote' />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam dolor magni ipsam debitis provident maxime quis a maiores hic distinctio perspiciatis corrupti veritatis ab enim voluptatibus assumenda, nam dicta totam. Quisquam cumque odio vitae explicabo.</p>
            <img src={reviews2} alt="" className='user' />
            <h3>Motu</h3>
            <div className="stars">
                <i><FaStar /></i>
                <i><FaStar /></i>
                <i><FaStar /></i>
                <i><FaStar /></i>
                <i><FaStarHalfAlt /></i>
            </div>
        </div>
      </div>
    </section>
  )
}

export default Review
