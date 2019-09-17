import React from 'react';
// OBS! Dont remove un-used statements on the line below. It breaks the Links
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './Header.css';
import logo from '../../assets/images/logo.png';
import menuIcon from '../../assets/images/menu.png';
import MenuItems from '../MenuItems';

class Header extends React.Component {
  state = {
    on: false,
  };

  openMenu = () => {
    this.setState({
      on: !this.state.on
    });
  };

  render() {
    return(
      <header>
        <nav className="navbar">
          <Link to="/"><img className="logo" src={logo} alt="logo"/></Link>
          <button onClick={this.openMenu}><img className="menu-button" src={menuIcon} alt="menu"/></button>
          {this.state.on && (
            <MenuItems />
          )}
        </nav>
      </header>
    )
  }
}

export default Header;
