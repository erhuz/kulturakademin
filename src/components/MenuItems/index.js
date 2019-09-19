import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import navlinks from './navlinks';
import './MenuItems.css';
class MenuItems extends React.Component{

  state ={
    on: true,
  };

  closeMenu = () =>{
    this.setState({
      on: !this.state.on
    });
  };

  render() {
    return(
      this.state.on &&(
        <div className="menu">
          <div className="close-button">
            <button onClick={this.closeMenu}>X</button>
          </div>
          <div className="menu-tittle">
            <h1>Inställningar</h1>
            <hr className="line"></hr>
          </div>
          <div className="menu-items">

            {navlinks.map(link =>
              <Link to={link.path}>{link.text}</Link>
            )}

            <hr className="line"></hr>
          </div>
        </div>
      )
    )
  }
}

export default MenuItems;
