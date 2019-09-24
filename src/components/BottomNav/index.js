import React from 'react';
import './BottomNav.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import homeIcon from '../../assets/images/home.svg';
import searchIcon from '../../assets/images/search.svg';
import categeory from '../../assets/images/categeory.svg';

const BottomNav = () => {
  return (
    <div className="bottom-nav">
      <div className="nav-icons">
        <div className="left-icon">
          <Link to="/"><img className="logo" src={homeIcon} alt="logo"/><span>Hem</span></Link>
        </div>
        <div>
          <Link to="/search"><img className="search" src={searchIcon} alt="menu"/><span>Sök</span></Link>
        </div>
        <div className="right-icon">
          <Link to="/categories"><img className="categories" src={categeory} alt="menu"/><span>Kategori</span></Link>
        </div>
      </div>
    </div>
  );
}

export default BottomNav;
