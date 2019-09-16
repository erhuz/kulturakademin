import React, {Component} from 'react';
import Swipe from 'react-easy-swipe';
import SwipeItem from '../SwipeItem';
import './SwipeContainer.css';

class SwipeContainer extends Component {

  constructor(props){
    super(props);

    this.state = {
      offsetPosition: 0,
    }
  }

  lastOffsetPosition = 0;

  setOffset(offset){

    let currentOffset = (offset.x + this.lastOffsetPosition);

    // console.log('Current: ' + currentOffset);

    this.setState( {
      offsetPosition: currentOffset
    });
    // console.log(this.state.offsetPosition);
  }


  onSwipeStart(event) {
    // Run this on swipe-start
  }

  onSwipeMove(pos, event){
    // Run this on each swipe movement
    this.setOffset(pos);
  }


  onSwipeEnd(event) {
    // Run this on swipe-end
    this.lastOffsetPosition = this.state.offsetPosition;
  }

  render(props) {


    const outerSwipeContainer = {
      maxWidth: '100vw',
      overflow: 'hidden',
      padding: '0',
    };

    const innerSwipeContainer = {
      display: 'flex',
      // transition: 'transform 100ms linear', // Kind of broken
      transform: `translateX(${this.state.offsetPosition}px)`,
    }



    let testItems = [
      {
        index : 1,
        backgroundUrl : 'https://cdn.shortpixel.ai/client/to_webp,q_glossy,ret_img,w_2400/https://blog.snappa.com/wp-content/uploads/2018/01/youtube-thumbnail-size.png',
      },
      {
        index : 2,
        backgroundUrl : 'https://cdn.shortpixel.ai/client/to_webp,q_glossy,ret_img,w_2400/https://blog.snappa.com/wp-content/uploads/2018/01/youtube-thumbnail-size.png',
      },
      {
        index : 3,
        backgroundUrl : 'https://cdn.shortpixel.ai/client/to_webp,q_glossy,ret_img,w_2400/https://blog.snappa.com/wp-content/uploads/2018/01/youtube-thumbnail-size.png',
      },
      {
        index : 4,
        backgroundUrl : 'https://cdn.shortpixel.ai/client/to_webp,q_glossy,ret_img,w_2400/https://blog.snappa.com/wp-content/uploads/2018/01/youtube-thumbnail-size.png',
      },
      {
        index : 5,
        backgroundUrl : 'https://images.unsplash.com/photo-1568622155247-675b7a01d1e4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80',
      },
      {
        index : 6,
        backgroundUrl : 'https://images.unsplash.com/photo-1568502748968-996f6a82e508?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=670&q=80',
      },
      {
        index : 7,
        backgroundUrl : 'https://images.unsplash.com/photo-1568478555168-38688f1f58fd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=701&q=80',
      },
      {
        index : 8,
        backgroundUrl : 'https://images.unsplash.com/photo-1568621779193-e6e6c9ab80f0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80',
      },
    ];

    const childElements = testItems.map(item => <SwipeItem key={item.index} index={item.index} backgroundUrl={item.backgroundUrl}/>)

    return (
      <div>


        <Swipe
          allowMouseEvents={true}
          onSwipeStart={this.onSwipeStart}
          onSwipeMove={(position, event) => this.onSwipeMove(position, event)}
          onSwipeEnd={(event) => this.onSwipeEnd(event)}>
          <div style={outerSwipeContainer}>
            <div style={innerSwipeContainer}>
              { childElements }
            </div>
          </div>
        </Swipe>
      </div>
    );
  }
}

export default SwipeContainer;
