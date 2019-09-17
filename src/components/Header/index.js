import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './Header.css';
import logo from '../../assets/images/logo.png';
import menuIcon from '../../assets/images/menu.png';

const Header = () => (
    <header>
        <div className="navbar">
            <Link To="#"><img className="logo" src={logo} alt="logo"/></Link>
            <Link To="#"><img className="menu" src={menuIcon} alt="menu"/></Link>
        </div>
    </header>
);

export default Header;
