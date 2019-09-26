import React from 'react';
import arrow from '../../assets/images/arrow.png';
import './CategoriesButton.css';
import { Link } from 'react-router-dom';


const CategoriesButton = (props) =>  {
  return(
    <Link to={{pathname:"/category/"+props.category}}>
      <button className="categories-button">
        <span className="categories-text">{props.category}</span>
        <img className="categories-arrow" src={arrow} alt=""/>
      </button>
    </Link>
  );
};

export default CategoriesButton;
