import React from 'react';
import classnames from "classnames";
// OBS! Dont remove un-used statements on the line below. It breaks the Links
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './Header.css';
import logo from '../../assets/images/logo.png';
import menuIcon from '../../assets/images/menu.png';
import MenuItems from '../MenuItems';

class Header extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      prevScrollpos: window.pageYOffset,
      visible: true
    };
  };

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  handleScroll = () => {
    const {
      prevScrollpos
    } = this.state;

    const currentScrollPos = window.pageYOffset;
    const visible = prevScrollpos > currentScrollPos;

    this.setState({
      prevScrollpos: currentScrollPos,
      visible
    });
  };

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
        <nav className = {
          classnames("navbar", {
            "navbar--hidden": !this.state.visible
              })
            }>
          <Link to="/"><img className="logo" src={logo} alt="logo"/></Link>
          <button onClick={this.openMenu}><img className="menu-button" src={menuIcon} alt="menu"/></button>
            {this.state.on && (
              <MenuItems />
            )}
        </nav>
    )
  }
}

export default Header;
