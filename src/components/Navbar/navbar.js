import React from 'react'
import './navbar.css';
import {Link} from 'react-scroll';
import contactimg from '../../assets/contact.jpg';
const Navbar = () => {
  return (
     <nav className="navbar">
        <div className="desktopmenu">
            <Link activeClass ='active' to ='intro' spy={true} smooth={true} offset={-100}
            duration={500} className="listitem">Home</Link>
            <Link  activeClass ='active' to ='about' spy={true} smooth={true} offset={-100}
            duration={500} className="listitem">AboutMe</Link>
            <Link activeClass ='active' to ='interest'spy={true} smooth={true} offset={-100}
            duration={500} className="listitem">Interest</Link>
        </div>
        <button className="btn" onClick={()=>{
         document.getElementById('connect').scrollIntoView({behavior:'smooth'});
        }}>
        <img src={contactimg} alt="" className="menuimg"/>Connect Me
        </button>
     </nav>
  )
}

export default Navbar
