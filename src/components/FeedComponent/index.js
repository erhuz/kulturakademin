import React, { Component } from 'react';
import FeedCard from '../FeedCard';
import feedData from './feedData'

class FeedComponent extends Component {
  render() {

    const feedComponent = feedData.map(item => <FeedCard key={item.id} type={item.type} header={item.header} description={item.description}/>)

    return(
      <div>
        {feedComponent}
      </div>
    )
  }
}

export default FeedComponent
