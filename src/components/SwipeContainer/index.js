import React, {Component} from 'react';
import Swipe from 'react-easy-swipe';
import SwipeItem from '../SwipeItem';
import './SwipeContainer.css';
// Look kids, don't be this guy. Dont put '.js' at the end of your npm package...
const momentum = require('../../../node_modules/momentum.js/dist/momentum.min.js');

class SwipeContainer extends Component {

  constructor(props){
    super(props);

    this.state = {
      offsetPosition: 0,
      windowWidth: 0,
    }

    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
    this.InnerContainer = React.createRef();
  }


  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener('resize', this.updateWindowDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions);
  }

  updateWindowDimensions() {
    this.setState({ windowWidth: window.innerWidth });
  }

  lastOffsetPosition = 0;

  setOffset(offset){
    // console.log(this.InnerContainer.current);

    let currentOffset = (offset.x + this.lastOffsetPosition);

    // negative because the offset translates to a negative offset
    // (((width-of-swipe-item + (halfMargin * 2)) * amount-of-swipe-items) - screen-width)
    let totalWidth = -(((121 + (10.87 * 2)) * 8) - this.state.windowWidth);

    if(currentOffset >= 0){
      currentOffset = 0;
    }
    if(currentOffset <= totalWidth){
      currentOffset = totalWidth;
    }

      this.setState( {
        offsetPosition: currentOffset
      });
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

  render() {

    const { items } = this.props;

    const OuterSwipeContainer = {
      maxWidth: '100vw',
      overflow: 'hidden',
      padding: '0',
    };

    const InnerSwipeContainer = {
      display: 'flex',
      // transition: 'transform 100ms linear', // Kind of broken
      transform: `translateX(${this.state.offsetPosition}px)`,
    }

    const ContainerTitle = {
      color: '#ffffff',
    }

    const TitleContainer = {
      // Todo: Add roboto light
      borderBottom: '1px solid #fff',
      margin: '10.87px',
      padding: '10.87px 0',
      fontSize: '24px',
    }

    const testTitle = "Recommended";



    const childElements = items.map(item => <SwipeItem key={item.index} index={item.index} backgroundUrl={item.backgroundUrl}/>)

    return (
      <div>
        <div style={TitleContainer}>
          <h4 style={ContainerTitle}>{testTitle}</h4>
        </div>

        <Swipe
          allowMouseEvents={true}
          onSwipeStart={this.onSwipeStart}
          onSwipeMove={(position, event) => this.onSwipeMove(position, event)}
          onSwipeEnd={(event) => this.onSwipeEnd(event)}>
          <div style={OuterSwipeContainer}>
            <div ref={this.InnerContainer} style={InnerSwipeContainer}>
              { childElements }
            </div>
          </div>
        </Swipe>
      </div>
    );
  }
}

export default SwipeContainer;
