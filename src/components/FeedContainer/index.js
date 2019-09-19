import React, { Component } from 'react';
import FeedCard from '../FeedCard';
import feedData from './feedData'

class FeedContainer extends Component {
  render() {

    const feedContainer = feedData.map(item => <FeedCard key={item.id} type={item.type} header={item.header} description={item.description}/>)

    return(
      <div>
        {feedContainer}
      </div>
    )
  }
}

export default FeedContainer
