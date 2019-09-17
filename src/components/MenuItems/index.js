import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
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
            <button onClick={this.closeMenu}> &times; </button>
          </div>
          <div className="menu-tittle">
            <h1 >Inställningar</h1>
          </div>
          <div className="menu-items">
            <Link to="/">menuitem</Link>
            <Link to="/">menuitem</Link>
            <Link to="/">menuitem</Link>
            <Link to="/">menuitem</Link>
            <Link to="/">menuitem</Link>
            <Link to="/">menuitem</Link>
          </div>
        </div>
      )
    )
  }
}

export default MenuItems;
