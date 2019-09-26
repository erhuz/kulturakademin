import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import TimeAgo from 'javascript-time-ago';
import sv from 'javascript-time-ago/locale/sv'
import webcast from '../../assets/images/video.png';
import headphones from '../../assets/images/headphones.png';
import './SwipeItem.css';

class SwipeItem extends Component {

  constructor(props){
    super(props);

    this.state = {
    }
  }

  render() {
    const {item} = this.props;

    const swipeItemContainer = {
      margin: '0 10.87px',
      // flex: '0 0 19.7%',
      width: '121px',
      minWidth: '121px',
      maxWidth: '121px',

    }

    const swipeItem = {
      borderRadius: '8px',
      textAlign: 'center',
      height: '121px',
      minHeight: '121px',
      maxHeight: '121px',
      background: 'linear-gradient(225deg, rgba(0,0,0,0) 25%, rgba(255,255,255,0.35) 100%), url(' + item.snippet.thumbnails.medium.url + ')',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center center',
      userSelect : 'none'
    }

    const h4 = {
      color: '#fff',
      fontSize: 14,
      fontWeight: 'normal',
      marginTop: '8px',
      wordWrap: 'break-word',
    }

    const p = {
      color: '#fff',
      opacity: '0.6',
      fontWeight: 'normal',
      fontSize: 12,
      marginTop: '4px'
    }

    const howLongAgoStyles = {
      color: '#ccc',
      fontWeight: 'normal',
      fontSize: 12,
    }

    let itemDescription = '';

    if(item.snippet.description.length >= 50){
      itemDescription = item.snippet.description.substring(0,50) + '...';
    }else{
      itemDescription = item.snippet.description
    }

    let itemTitle = '';

    if(item.snippet.title.length >= 20){
      itemTitle = item.snippet.title.substring(0,20) + '...';
    }else{
      itemTitle = item.snippet.title
    }

    TimeAgo.addLocale(sv)
    const timeAgo = new TimeAgo('sv-SE')
    const howLongAgo = timeAgo.format(new Date(item.snippet.publishedAt)).replace('för ', '');

    let showType;
    let linkPath;

    // if(props.type === "podcast") {
    //   showType = headphones;
    //   linkPath = "/podcast";
    // } else {
      showType = webcast;
      linkPath = '/webcast/' + item.id.videoId;
    // };

    return (
        <div style={swipeItemContainer}>
          <Link to={linkPath}>
          <button className="btn btn-image" style={swipeItem}>
          <div className="play-btn">
            {/* Keeps rest in place. Change css later */}
          </div>

          <div className="btn-info">
            <div className="play-type">
              <img src={showType} alt=""/>
            </div>
            <div className="play-length">
              <p>09:27</p>
            </div>
          </div>

        </button>
            <h4 style={h4}>{itemTitle}</h4>
            <p style={p}>{itemDescription}</p>
            <p style={howLongAgoStyles}>{howLongAgo}</p>
          </Link>
        </div>
    );
  }
}

export default SwipeItem;
