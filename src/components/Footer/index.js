import React from 'react';
// OBS! Dont remove un-used statements on the line below. It breaks the Links
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './Footer.css';
import homeIcon from '../../assets/images/home.png';
import gridIcon from '../../assets/images/grid.png';
import SearchIcon from '../../assets/images/search.png';

const Footer = () => (
    <footer>
        <div className="bottom-nav">
            <nav className="navbar">
                <Link to="/"><img className="logo" src={homeIcon} alt="logo"/></Link>
                <Link to="/categories"><img className="menu" src={gridIcon} alt="menu"/></Link>
                <Link to="/search"><img className="menu" src={SearchIcon} alt="menu"/></Link>
            </nav>
        </div>
    </footer>
);

export default Footer;
