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
    <img src={java} alt="" className="interestimg" id="java"/>
    <img src={html} alt="" className="interestimg" id="html"/>
    <img src={css} alt="" className="interestimg" id="css"/>
    <img src={script} alt="" className="interestimg" id="script"/>
    <img src={react} alt="" className="interestimg" id="react"/>
    <img src={leetcode} alt="" className="interestimg" id="leetcode"/>

    </div>
   
   </section>
  )
}

export default Interest;
