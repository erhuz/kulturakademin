import React from 'react';
import './Footer.css';
import homeIcon from '../../assets/images/home.png';
import gridIcon from '../../assets/images/grid.png';
import SearchIcon from '../../assets/images/search.png';

const Footer = () => (
    <footer>
        <div className="bottom-nav">
            <div className="navbar">
                <a href="#"><img className="logo" src={homeIcon} alt="logo"/></a>
                <a href="#"><img className="menu" src={gridIcon} alt="menu"/></a>
                <a href="#"><img className="menu" src={SearchIcon} alt="menu"/></a>
            </div>
        </div>
    </footer>
);

export default Footer;