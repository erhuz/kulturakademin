import React from 'react';
import './Header.css';
import menuIcon from '../../assets/images/hamburger-menu.svg';
import facebookIcon from '../../assets/images/Vector2.svg';
import instagramIcon from '../../assets/images/Vector3.svg';
import twitterIcon from '../../assets/images/Vector1.svg';
import linkedinIcon from '../../assets/images/Vector.svg';
import closeButton from '../../assets/images/x.svg';
import navlinks from '../../data/navlinks';
import linkTo from '../../assets/images/to.svg';
import classnames from "classnames";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import logo from '../../assets/images/logo.svg';

class Header extends React.Component {

  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);

    this.state = {
      prevScrollpos: window.pageYOffset,
      visible: true,
      showBackButton: false,
      menuIsOn: false,
    };
  };

  handleClick () {
      this.setState({
        menuIsOn: !this.state.menuIsOn,
    });
  }

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  handleScroll = () => {

    const {prevScrollpos} = this.state;
    const currentScrollPos = window.pageYOffset;
    const visible = (prevScrollpos > currentScrollPos ||  65 > currentScrollPos);

    this.setState({
      prevScrollpos: currentScrollPos,
      visible
    });
  };

  render() {
    return (
      <nav className = {
        classnames("navbar", {
          "navbar--hidden": !this.state.visible
            })
          }>

        <Link to="/">
          <img className="logo" src={logo} alt="logo"/>
        </Link>

        <Link onClick={this.handleClick}>
          <img className="menu-button" src={menuIcon} alt="menu"/>
        </Link>

          {this.state.menuIsOn && (

            <div className="menu">
              <div className="close-button">
                <a onClick={this.handleClick}  > <img src={closeButton} alt="icon"/></a>
              </div>
              <div className="menu-tittle">
                <h1>Meny</h1>
                <hr className="line"></hr>
              </div>
              <div className="menu-items">
                {navlinks.map(link =>
                  <Link to={link.path} key={link.id}>{link.text}</Link>
                )}
              </div>
              <div className="link-to">
                <a href="https://www.kulturakademin.com">Kulturakademin</a>
                <img src={linkTo} alt="icon"/>
              </div>
              <hr className="line-2"></hr>
              <div className="social-media">
                  <p>Följ oss</p>
                  <Link to=""><img src={instagramIcon} alt="icon"/></Link>
                  <Link to=""><img src={facebookIcon} alt="icon"/></Link>
                  <Link to=""><img src={twitterIcon} alt="icon"/></Link>
                  <Link to=""><img src={linkedinIcon} alt="icon"/></Link>
              </div>
          </div>
          )}

      </nav>
    )
  }
}

export default Header;
