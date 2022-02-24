import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './header.css';
import logo from '../../assets/logo1.jpg';


const Header = () => {
  const [hamburgerOpened, setHamburgerOpened] = useState(false);
  const HandleHamburger = (e) => {
    e.preventDefault();
    setHamburgerOpened(!hamburgerOpened);
  };
  return (
    <header className={`header ${hamburgerOpened ? 'hamburger-opened' : ''}`}>
      <div className="header-container">
        <div>
          <img width="200" height="95"src={logo} alt="logo"/>
        </div>
        <div
          onClick={HandleHamburger}
          onKeyPress={HandleHamburger}
          className="hamburger"
          role="button"
          tabIndex={0}
        >
          <span className="hamburger-span">&nbsp;</span>
          <span className="hamburger-span">&nbsp;</span>
          <span className="hamburger-span">&nbsp;</span>
          <span className="hamburger-span">&nbsp;</span>
        </div>
        <nav>
          <ul>
            <Link to="/">
            <li> Accueil
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </li>
            </Link>
            <Link to="/regles">
            <li>
              Les Regles
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </li>
            </Link>
            <Link to="/contact">
              <li>Contact
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              </li>
            </Link>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
