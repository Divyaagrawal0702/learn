import React from 'react'
import './interest.css'
import java from '../../assets/java.png'
import html from '../../assets/html.png'
import css from '../../assets/css.jpg'
import script from '../../assets/script.png'
import react from '../../assets/react.jpg'
import leetcode from '../../assets/leetcode.png'

const Interest = () => {
  return (
   <section id="interest">
    <h2 className="interestheading">My Interests</h2>
    <div className="imgs">
    <img src={java} alt="" className="interestimg"/>
    <img src={html} alt="" className="interestimg"/>
    <img src={css} alt="" className="interestimg"/>
    <img src={script} alt="" className="interestimg"/>
    <img src={react} alt="" className="interestimg"/>
    <img src={leetcode} alt="" className="interestimg"/>

    </div>
   
   </section>
  )
}

export default Interest;
