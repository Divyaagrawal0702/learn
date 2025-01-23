import React from 'react'
import './navbar.css';
import {Link} from 'react-scroll';
import contactimg from '../../assets/contact.jpg';
const Navbar = () => {
  return (
     <nav className="navbar">
        <div className="desktopmenu">
            <Link className="listitem">Home</Link>
            <Link className="listitem">portfolio</Link>
            <Link className="listitem">About Me</Link>
        </div>
        <button className="btn">
        <img src={contactimg} alt="" className="menuimg"/>Contact Me
        </button>
     </nav>
  )
}

export default Navbar
