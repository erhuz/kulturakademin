import React, { Component } from 'react'
import ShowMoreText from 'react-show-more-text'
import './FeedCard.css'

class FeedCard extends Component {
  render() {
    return (
      <div className="feedCard">
          <button className="cardBtn">
            {/* <div className="type">{this.props.type}</div> */}
          </button>
          <div className="feedText">
              {/* <h3>{this.props.header}</h3> */}
              <h3>Lorem ipsum</h3>
              <ShowMoreText className="showMore"
                  lines={4}
                  more="Visa mer"
                  less="Visa mindre"
                  anchorClass=""
                  onClick={this.executeOnClick}
                  expanded={false}
              >
                  {/* <p>{this.props.description}</p> */}
                <p>Nullam cursus lacinia erat. Vestibulum fringilla pede sit amet augue. Pellentesque libero tortor, tincidunt et, tincidunt eget, semper nec, quam.</p>
            </ShowMoreText>
          </div>
      </div>
    )
  }
}

export default FeedCard
