import React, {Component} from 'react'
import arrow from '../../assets/images/arrow.png'
import './CategoriesButton.css'

class CategoriesButton extends Component {
    render() {
        return(
            <button className="categories-button">
                <span className="categories-text">{this.props.name}</span>
                <img className="categories-arrow" src={arrow}/>
            </button>
        )
    }
}

export default CategoriesButton
