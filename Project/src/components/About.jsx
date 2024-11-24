import React from 'react'
import aboutImg from "../components/assets/about1.avif"
const About = () => {
  return (
    <>
        <section className="about" id="about">
            <h1 className="heading">
                <span>About</span>Us    
            </h1>    
            <div className="row">
                <div className="image">
                    <img src={aboutImg} alt="" />
                </div>
                <div className="content">
                    <h3>What Makes Our Food Special?</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est magni consectetur voluptate porro beatae ab at illo reprehenderit atque eius numquam, autem possimus qui maiores fugiat tempora suscipit eum quod.</p>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores quia dolor tenetur repudiandae earum similique!</p>
                    <a href="#"><button>Learn More..</button></a>
                </div>
            </div>
        </section> 
    </>
  )
}

export default About
