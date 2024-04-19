import './Navbar.css'
import logo from './assets/advologo.svg';
import React, { useState } from 'react';
import useIsMobile from './useIsMobile';

function Navbar() {

  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const mobile = useIsMobile();

  return (
    <div>
      <nav className="navbar">
        <div className="leftColumn">
          <a href="/">
          <div className="getItTogether">
            <div className="navbar-logo">
              <img src={logo} alt="Logo" className="navbar-logo-image" />
            </div>
            <div className="navbar-brand">
              <strong>Mother Advocate</strong>
            </div>
          </div>
          </a>
        </div>
        <div className="rightColumn">
          <button className="navbar-toggler" onClick={toggleMenu}>
            <span className="line"></span>
            <span className="line"></span>
            <span className="line"></span>
          </button>
          { !mobile ?
          <div className={`navbar-collapse${showMenu ? "-show" : ""}`}>
            <ul className={`navbar-nav${showMenu ? "-show" : ""}`}>
            <li className="nav-item">
                <a className="nav-link" href="/capital-campaign">Capital Campaign</a>
              </li>
              {/* <li className="nav-item">
                <a className="nav-link" href="/capital-campaign-old">Capital Campaign Old</a>
              </li> */}
              {/* <li className="nav-item">
                <a className="nav-link" href="/annual-appeal">Annual Appeal</a>
              </li> */}
              <li className="nav-item">
                <a className="nav-link" href="https://the-harvard-advocate.myshopify.com/">Alumni Store</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/contact">Contact</a>
              </li>
            </ul>
          </div>
          : ""}

        </div>
      </nav>
      { mobile ?
      <div className={`navbar-collapse${showMenu ? "-show" : ""}`}>
        <ul className={`navbar-nav${showMenu ? "-show" : ""}`}>
          <li className="nav-item">
            <a className="nav-link" href="/capital-campaign">Capital Campaign</a>
          </li>
          {/* <li className="nav-item">
            <a className="nav-link" href="/annual-appeal">Annual Appeal</a>
          </li> */}
          <li className="nav-item">
            <a className="nav-link" href="https://the-harvard-advocate.myshopify.com/">Alumni Store</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/contact">Contact</a>
          </li>
        </ul>
      </div>
      : ""}
    </div>
  );
}

export default Navbar;
