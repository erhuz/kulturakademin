import React, { Component } from 'react';
import FeedCard from '../FeedCard';
import feedData from '../../data/feedData'

class FeedContainer extends Component {
  render() {
    const feedContainer = feedData.map(item => {

      if(this.props.category == item.category){

        return item.data.map(obj => (
          <FeedCard
            key={obj.id}
            thumbnail={obj.thumbnail}
            header={obj.header}
            description={obj.description}
            type={obj.type}
          />
        ))
      }
    })

    return(
      <div>
        {feedContainer}
      </div>
    )
  }
}

export default FeedContainer
