import React from 'react';
import './BottomNav.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import homeIconActive from '../../assets/images/home-active.svg';
import searchIcon from '../../assets/images/search.svg';
import categeory from '../../assets/images/categeory.svg';
import homeIcon from '../../assets/images/home.svg';
import searchIconActive from '../../assets/images/search-active.png';
import categeoryActive from '../../assets/images/cat-active.svg';

class BottomNav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
     };
  }

  render() {

    let currentPath = window.location.pathname;
    let homeIconSrc;
    let searchIconSrc;
    let categeorySrc;

    if (currentPath !== '/') {
       homeIconSrc = homeIcon
    } else (
      homeIconSrc = homeIconActive
    )

    if (currentPath !== '/search') {
      searchIconSrc = searchIcon
    } else(
      searchIconSrc = searchIconActive
    )

    if (currentPath !== '/categories') {
      categeorySrc = categeory
    } else(
      categeorySrc = categeoryActive
    )

    return (
    <div className="bottom-nav">
      <div className="nav-icons">
        <div className="left-icon">
          <Link to="/"><img className="logo" src={homeIconSrc} alt="logo"/><span>Hem</span></Link>
        </div>
        <div>
          <Link to="/search"><img className="search" src={searchIconSrc} alt="menu"/><span>Sök</span></Link>
        </div>
        <div className="right-icon">
          <Link to="/categories"><img className="categories" src={categeorySrc} alt="menu"/><span>Kategori</span></Link>
        </div>
      </div>
    </div>
    );
  }
}

export default BottomNav;
