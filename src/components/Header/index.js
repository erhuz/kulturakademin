import React from 'react';
import './Header.css';
import logo from '../../assets/images/logo.png';
import menuIcon from '../../assets/images/menu.png';

const Header = () => (
    <header>
        <div className="navbar">
            <a href="#"><img className="logo" src={logo} alt="logo"/></a>
            <a href="#"><img className="menu" src={menuIcon} alt="menu"/></a>
        </div>
    </header>
);

export default Header;