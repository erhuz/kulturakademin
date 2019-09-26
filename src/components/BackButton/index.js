import React from 'react';
import './BackButton.css'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import backButtonIcon from '../../assets/images/arrow-left.svg';
import { useHistory } from 'react-router'

const BackButton = () => {

    let history = useHistory();

    return (
      <div className="back-button">
        <Link onClick={() => history.goBack()}><img className="back-button-icon" src={backButtonIcon} alt="back-button-icon"/></Link>
      </div>
    );
}


export default BackButton;
