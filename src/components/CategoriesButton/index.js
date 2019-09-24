import React, {Component} from 'react'
import arrow from '../../assets/images/arrow.png'
import './CategoriesButton.css'
import { Link } from 'react-router-dom'

class CategoriesButton extends Component {
    render() {
        return(
          <Link to={{pathname:"/category/"+this.props.category}}>
            <button className="categories-button">
                <span className="categories-text">{this.props.category}</span>
                <img className="categories-arrow" src={arrow} alt=""/>
            </button>
          </Link>

        )
    }
}

export default CategoriesButton
