import React from 'react'
import './intro.css';
import di from '../../assets/divya.jpg';

const Intro = () => {
  return (
   <section id="intro">
       <div className="introcontent">
       <img src={di} alt="profile" className="bg"/>
        <span className="Hello"><span className="letter">H</span>ello,</span><br></br>
        <span className="introtext">I'm <span className="introname">Divya</span></span>

      </div>
      {/* <img src={di} alt="profile" className="bg"/> */}
   </section>
  )
}

export default Intro
