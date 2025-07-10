import React, { useState } from 'react';
import './navbar.css';
import { Link } from 'react-scroll';
import contactimg from '../../assets/contact.jpg';
import hamburger from '../../assets/Hamburger.png'; // ✅ Hamburger menu icon

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false); // ✅ Toggle state

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      {/* ✅ Hamburger menu icon (shown in mobile) */}
      <img
        src={hamburger}
        alt="menu"
        className="hamburger"
        onClick={toggleMenu}
      />

      {/* ✅ Toggled menu visibility on mobile */}
      <div className={`desktopmenu ${isOpen ? 'show' : ''}`}>
        <Link
          activeClass="active"
          to="intro"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
          className="listitem"
          onClick={() => setIsOpen(false)} // Close after click
        >
          Home
        </Link>
        <Link
          activeClass="active"
          to="about"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
          className="listitem"
          onClick={() => setIsOpen(false)}
        >
          AboutMe
        </Link>
        <Link
          activeClass="active"
          to="interest"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
          className="listitem"
          onClick={() => setIsOpen(false)}
        >
          Interest
        </Link>
      </div>

      <button
        className="btn"
        onClick={() => {
          document.getElementById('connect').scrollIntoView({ behavior: 'smooth' });
          setIsOpen(false);
        }}
      >
        <img src={contactimg} alt="Connect" className="menuimg" />
        Connect Me
      </button>
    </nav>
  );
};

export default Navbar;
