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
      transition: 'transform 100ms linear',
      transform: `translateX(${this.state.offsetPosition}px)`,
    }
    


    let testItems = [
      {index : 1},
      {index : 2},
      {index : 3},
      {index : 4},
      {index : 5},
      {index : 6},
      {index : 7},
      {index : 8},
    ];
    
    let childElements = testItems.map(item => <SwipeItem key={item.index} index={item.index} />)

    return (
      <Swipe
        onSwipeStart={this.onSwipeStart}
        onSwipeMove={(position, event) => this.onSwipeMove(position, event)}
        onSwipeEnd={(event) => this.onSwipeEnd(event)}>
        <div style={outerSwipeContainer}>
          <div style={innerSwipeContainer}>
            { childElements }
          </div>
        </div>
      </Swipe>
    );
  }
}
 
export default SwipeContainer;