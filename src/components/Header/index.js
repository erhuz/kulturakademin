import React from 'react';
import './Header.css';
import classnames from "classnames";
import MenuItems from '../MenuItems';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import logo from '../../assets/images/logo.svg';
import menuIcon from '../../assets/images/Cog.svg';

class Header extends React.Component {

  constructor() {
    super();

    this.state = {
      prevScrollpos: window.pageYOffset,
      visible: true,
      showBackButton: false,
      menuIsOn: false
    };
  };

  openMenu = () => {
    this.setState({
      menuIsOn: !this.state.menuIsOn
    });
  };

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  handleScroll = () => {

    const {prevScrollpos} = this.state;
    const currentScrollPos = window.pageYOffset;
    const visible = prevScrollpos > currentScrollPos;

    this.setState({
      prevScrollpos: currentScrollPos,
      visible
    });
  };

  render() {
    let currentPath = window.location.pathname;
    let navbar;

    if (currentPath != "/test") {
      navbar =
        <nav className = {
          classnames("navbar", {
            "navbar--hidden": !this.state.visible
              })
            }>
          <Link to="/"><img className="logo" src={logo} alt="logo"/></Link>
          <button onClick={this.openMenu}><img className="menu-button" src={menuIcon} alt="menu"/></button>
            {this.state.menuIsOn && (
              <MenuItems />
            )}
        </nav>;
    } else {
      navbar = <BackButton />;
    }

    return (
      <div>
        {navbar}
      </div>
    );

  }
}

export default Header;
