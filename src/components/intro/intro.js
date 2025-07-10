import React from 'react';
import './intro.css';
import di from '../../assets/divya.jpg';

const Intro = () => {
  return (
    <section id="intro" className="intro-section">
      <img src={di} alt="Divya profile background" className="bg" />
      <div className="introcontent">
        <div>
          <span className="hello">
            <span className="letter">H</span>ello,
          </span>
          <br />
          <span className="introtext">
            I'm <span className="introname">Divya</span>
          </span>
        </div>
      </div>
    </section>
  );
};

export default Intro;
