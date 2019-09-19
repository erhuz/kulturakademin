import React, { Component } from 'react'
import ShowMoreText from 'react-show-more-text'
import './FeedCard.css'
import Playknapp from '../../assets/images/Playknapp.png'

class FeedCard extends Component {
  render() {
    return (
      <div className="feedCard">
          <button className="cardBtn">
            <img className="play" src={Playknapp}/>
            {/* <div className="type">{this.props.type}</div> */}
          </button>
          <div className="feedText">
              <h3>{this.props.header}</h3>
              <ShowMoreText className="showMore"
                  lines={4}
                  more="Visa mer"
                  less="Visa mindre"
                  anchorClass=""
                  onClick={this.executeOnClick}
                  expanded={false}
              >
                  <p>{this.props.description}</p>
            </ShowMoreText>
          </div>
      </div>
    )
  }
}

export default FeedCard
