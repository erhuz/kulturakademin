import React, {Component} from 'react';
import './SwipeItem.css';

class SwipeItem extends Component {

  constructor(props){
    super(props);

    this.state = {
    }
  }

  render() {
    const {index} = this.props;


    const swipeItem = {
      backgroundColor: 'green',
      flex: '0 0 19.7%',
      textAlign: 'center',
      margin: '0 2px',
      minWidth: '300px',
      minHeight: '150px',
      border: '1px solid black',
      background: 'url(\'https://cdn.shortpixel.ai/client/to_webp,q_glossy,ret_img,w_2400/https://blog.snappa.com/wp-content/uploads/2018/01/youtube-thumbnail-size.png\')',
      backgroundSize: 'contain',
      backgroundRepeat: 'no-repeat',
      userSelect : 'none'
    }


    return (
        <div style={swipeItem}>Contentbox #{index}</div>
    );
  }
}

export default SwipeItem;
