import React, {Component} from 'react'
import arrow from '../../assets/images/arrow.png'
import './CategoriesButton.css'

class CategoriesButton extends Component {
    render() {
        return(
            <button className="categories-button">
                <span>{this.props.name}</span>
                <img src={arrow}/>
            </button>
        )
    }
}

export default CategoriesButton
