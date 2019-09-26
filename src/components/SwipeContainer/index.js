import React, {Component} from 'react';
import Swipe from 'react-easy-swipe';
import SwipeItem from '../SwipeItem';
import './SwipeContainer.css';
import YoutubeVideos from '../../data/youtubeVideos.json';
// Look kids, don't be this guy. Dont put '.js' at the end of your npm package...
import momentum from 'momentum.js/dist/momentum.min.js';

class SwipeContainer extends Component {

  constructor(props){
    super(props);

    this.state = {
      offsetPosition: 0,
      windowWidth: 0,
      amountOfChildren: 0,
      totalChildWidth: 0,
    }

    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
    this.InnerContainer = React.createRef();
  }


  componentDidMount() {
    let childWidth = parseFloat(this.InnerContainer.children[0].style.width.replace('px', ''));
    childWidth += parseFloat(this.InnerContainer.children[0].style.marginLeft.replace('px', ''));
    childWidth += parseFloat(this.InnerContainer.children[0].style.marginRight.replace('px', ''));

    this.setState({ amountOfChildren: this.InnerContainer.children.length, totalChildWidth: childWidth });

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

    let currentOffset = (offset.x + this.lastOffsetPosition);

    // negative because the offset translates to a negative offset
    // (((width-of-swipe-item + (halfMargin * 2)) * amount-of-swipe-items) - screen-width)
    let totalWidth = -(((this.state.totalChildWidth) * this.state.amountOfChildren) - this.state.windowWidth);

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
      fontWeight: 'normal'
    }

    const TitleContainer = {
      borderBottom: '1px solid #fff',
      margin: '10.87px',
      padding: '10.87px 0',
      fontSize: '24px',
      fontWeight: 'normal'
    }

    const titleArrow = {
      transform: 'translateY(3px)',
    }

    const testTitle = this.props.title;

    const childElements = YoutubeVideos.items.map( (item, index) => {
      if(item.id.kind !== 'youtube#channel'){
        return (<SwipeItem key={index} item={item} />)
      }
    })

    return (
      <div>
        <div style={TitleContainer}>
          <h4 style={ContainerTitle}>{testTitle} ({childElements.length - 1}) <img style={titleArrow} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAVCAYAAAByrA+0AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAB/SURBVHgBxZJbDYAwDEUXFFTCJEzCJOAApCBhDjYHSEECEpBwKaEJ+yDskTTcpOnPOVub1JieAJhxZyqxg3SSnlgaTU0YXOSXg8upSqFHSplkW6VdT2KIuLZMohrJ4YkvwVZevhJLMGXw9w4vs/8Bi7C2wFEN9mi5Tlk0oPKUT39+ICU165QZAAAAAElFTkSuQmCC" alt=""></img></h4>
        </div>

        <Swipe
          allowMouseEvents={true}
          onSwipeStart={this.onSwipeStart}
          onSwipeMove={(position, event) => this.onSwipeMove(position, event)}
          onSwipeEnd={(event) => this.onSwipeEnd(event)}>
          <div style={OuterSwipeContainer}>
            <div ref={(ref) => this.InnerContainer = ref} style={InnerSwipeContainer}>
              { childElements }
            </div>
          </div>
        </Swipe>
      </div>
    );
  }
}

export default SwipeContainer;
