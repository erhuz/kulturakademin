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

    console.log('Current: ' + currentOffset);
    console.log('Last: ' + this.lastOffsetPosition);
    
    
    this.setState( {
      offsetPosition: currentOffset
    });
    // console.log(this.state.offsetPosition);
  }
  
  
  onSwipeStart(event) {
    // console.log('Start swiping...', event);
  }
  
  onSwipeMove(pos, event){
    this.setOffset(pos);
  }
  

  onSwipeEnd(event) {
    // this.lastOffsetPosition = this.state.offsetPosition;
    console.log(this.state.offsetPosition);
    
  }

  render() {
    
    
    const swipeContainer = {
      maxWidth: '100vw',
      overflow: 'hidden',
      display: 'flex',
      padding: '0',
    };
    
    let swipeItem = {
      backgroundColor: 'green',
      flex: '0 0 19.7%',
      textAlign: 'center',
      margin: '0 2px',
      minWidth: '300px',
      minHeight: '150px',
      // transition: 'transform 75ms linear',
      border: '1px solid black',
      background: 'url(\'https://cdn.shortpixel.ai/client/to_webp,q_glossy,ret_img,w_2400/https://blog.snappa.com/wp-content/uploads/2018/01/youtube-thumbnail-size.png\')',
      backgroundSize: 'contain',
      backgroundRepeat: 'no-repeat',
      transform: `translateX(${this.state.offsetPosition}px)`,
    }
    
    let childElements = (
      <div style={swipeContainer}>
        {/* <SwipeItem/> */}
        <div style={swipeItem}>Contentbox #1</div>
        <div style={swipeItem}>Contentbox #2</div>
        <div style={swipeItem}>Contentbox #3</div>
        <div style={swipeItem}>Contentbox #4</div>
        <div style={swipeItem}>Contentbox #5</div>
        <div style={swipeItem}>Contentbox #6</div>
      </div>
    );

    return (
      <Swipe
        onSwipeStart={this.onSwipeStart}
        onSwipeMove={(position, event) => this.onSwipeMove(position, event)}
        onSwipeEnd={(event) => this.onSwipeEnd(event)}>
          {childElements}
      </Swipe>
    );
  }
}
 
export default SwipeContainer;