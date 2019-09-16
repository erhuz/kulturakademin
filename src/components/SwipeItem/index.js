import React, {Component} from 'react';
import './SwipeItem.css';

class SwipeItem extends Component {

  constructor(props){
    super(props);

    this.state = {
    }
  }

  render() {
    const {index, backgroundUrl} = this.props;


    const swipeItem = {
      backgroundColor: 'green',
      borderRadius: '8px',
      flex: '0 0 19.7%',
      textAlign: 'center',
      margin: '0 10.87px',
      width: '121px',
      minWidth: '121px',
      maxWidth: '121px',
      height: '121px',
      minHeight: '121px',
      maxHeight: '121px',
      background: 'linear-gradient(225deg, rgba(0,0,0,0) 25%, rgba(255,255,255,0.35) 100%), url(' + backgroundUrl + ')',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center center',
      userSelect : 'none'
    }


    return (
        <div style={swipeItem}></div>
    );
  }
}

export default SwipeItem;
