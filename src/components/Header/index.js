import React from 'react';
// OBS! Dont remove un-used statements on the line below. It breaks the Links
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './Header.css';
import logo from '../../assets/images/logo.png';
import menuIcon from '../../assets/images/menu.png';

const Header = () => (
    <header>
      <nav className="navbar">
        <Link to="/"><img className="logo" src={logo} alt="logo"/></Link>
        <Link to="/menu"><img className="menu" src={menuIcon} alt="menu"/></Link>
      </nav>
    </header>
);

export default Header;
