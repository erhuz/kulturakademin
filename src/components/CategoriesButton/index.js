import React, {Component} from 'react'
import './CategoriesButton.css'

class CategoriesButton extends Component {
    render() {
        return(
            <a href={this.props.route}>
                <button className="catBtn" style={{
                    background: `linear-gradient(rgba(${this.props.color}, 0.6), rgba(${this.props.color}, 1))`
                }}>
                    <p>{this.props.name}</p>
                </button>
            </a>
        )
    }
}

export default CategoriesButton
