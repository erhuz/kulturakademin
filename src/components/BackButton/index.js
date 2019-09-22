import React from 'react';
import './BackButton.css'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import backButtonIcon from '../../assets/images/arrow-left.svg';


const BackButton = () => {

    return (
      <div className="back-button">
        <Link to="/"><img className="back-button-icon" src={backButtonIcon} alt="back-button-icon"/></Link>
      </div>
    );

}

export default BackButton;
