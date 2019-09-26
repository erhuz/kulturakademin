import React from 'react';
import './MenuItems.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import facebookIcon from '../../assets/images/Vector2.svg';
import instagramIcon from '../../assets/images/Vector3.svg';
import twitterIcon from '../../assets/images/Vector1.svg';
import linkedinIcon from '../../assets/images/Vector.svg';
import closeButton from '../../assets/images/x.svg';
import navlinks from '../../data/navlinks';
import linkTo from '../../assets/images/to.svg';
class MenuItems extends React.Component{

    constructor() {
        super();

  this.handleClick = this.handleClick.bind(this);
    this.state ={
      on: true,
    };
  }

  handleClick () {
    this.setState({
      on: !this.state.on
    });
  };

  render() {
    return(
      this.state.on &&(
        <div className="menu">
          <div className="close-button">
            <a onClick={this.handleClick}><img src={closeButton} alt="icon"/></a>
          </div>
          <div className="menu-tittle">
            <h1>Meny</h1>
            <hr className="line"></hr>
          </div>
          <div className="menu-items">

            {navlinks.map(link =>
              <Link to={link.path}>{link.text}</Link>
            )}

          </div>
          <div className="link-to">
            <Link to="https://www.kulturakademin.com">Kulturakademin</Link>
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
      )
    )
  }
}

export default MenuItems;
