import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Swipe from 'react-easy-swipe';
import './SwipeComponent.css';
 
class SwipeComponent extends Component {
  onSwipeStart(event) {
    console.log('Start swiping...', event);
  }

  onSwipeMove(position, event) {
    console.log(`Moved ${position.x} pixels horizontally`, event);
    console.log(`Moved ${position.y} pixels vertically`, event);
  }

  onSwipeEnd(event) {
    console.log('End swiping...', event);
  }

  render() {
    const swipeContainer = {
      display: 'flex',
      padding: '0 55px'
    };

    const swipeItem = {
      background: 'green',
      flex: '0 0 19.7%',
      textAlign: 'center',
      margin: '0 2px',
      transition: 'transform 300ms ease 100ms'
    }

    return (
      <Swipe
        onSwipeStart={this.onSwipeStart}
        onSwipeMove={this.onSwipeMove}
        onSwipeEnd={this.onSwipeEnd}>
          <div style={swipeContainer}>
            <div style={swipeItem}>Contentbox #1</div>
            <div style={swipeItem}>Contentbox #2</div>
            <div style={swipeItem}>Contentbox #3</div>
          </div>
      </Swipe>
    );
  }
}
 
export default SwipeComponent;