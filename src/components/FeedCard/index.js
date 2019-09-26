import React from 'react';
import './FeedCard.css';
import webcast from '../../assets/images/video.png';
import headphones from '../../assets/images/headphones.png';
import arrow from '../../assets/images/arrow.png';
import { Link } from 'react-router-dom';

const FeedCard = (props) =>  {

  const { item } = props;

  const bg = {
    background: 'linear-gradient(225deg, rgba(0,0,0,0) 25%, rgba(255,255,255,0.35) 100%), url(' + props.item.snippet.thumbnails.medium.url + ')',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center center',
    userSelect: 'none',
  };

  let showType;
  let linkPath;

  // if(props.type === "podcast") {
  //   showType = headphones;
  //   linkPath = "/podcast";
  // } else {
    showType = webcast;
    linkPath = '/webcast/' + item.id.videoId;
  // };

  let itemDescription = '';

  if(item.snippet.description.length >= 70){
    itemDescription = item.snippet.description.substring(0,70) + '...';
  }else{
    itemDescription = item.snippet.description
  }

  let itemTitle = '';

  if(item.snippet.title.length >= 20){
    itemTitle = item.snippet.title.substring(0,20) + '...';
  }else{
    itemTitle = item.snippet.title
  }

  return (
    <Link to={{pathname:linkPath}} >
      <div className="feedCard">
        <button className="btn btn-image" style={bg}>
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

        <div className="feedText">
          <div className="bla">
            <h2>{itemTitle}</h2>
            <img className="feed-arrow" src={arrow} alt=""/>
          </div>
          <p>{itemDescription}</p>
        </div>
      </div>
    </Link>
  );
};

export default FeedCard
