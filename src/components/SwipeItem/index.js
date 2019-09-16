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
      flex: '0 0 19.7%',
      textAlign: 'center',
      margin: '0 2px',
      width: '200px',
      minWidth: '200px',
      maxWidth: '200px',
      height: '200px',
      minHeight: '200px',
      maxHeight: '200px',
      border: '1px solid black',
      background: 'url(' + backgroundUrl + ')',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center center',
      userSelect : 'none'
    }


    return (
        <div style={swipeItem}>Contentbox #{index}</div>
    );
  }
}

export default SwipeItem;
