import React from 'react';
import './FeedCard.css';
import webcast from '../../assets/images/video.png';
import headphones from '../../assets/images/headphones.png';
import arrow from '../../assets/images/arrow.png';
import { Link } from 'react-router-dom';

const FeedCard = (props) =>  {

  const bg = {
    background: 'linear-gradient(225deg, rgba(0,0,0,0) 25%, rgba(255,255,255,0.35) 100%), url(' + props.thumbnail + ')',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center center',
    userSelect: 'none',
  };

  let showType;
  let linkPath;

  if(props.type === "podcast") {
    showType = headphones;
    linkPath = "/podcast";
  } else {
    showType = webcast;
    linkPath = "/webcast";
  };

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
            <h2>{props.header}</h2>
            <img className="feed-arrow" src={arrow} alt=""/>
          </div>
          <p>{props.description}</p>
        </div>
      </div>
    </Link>
  );
};

export default FeedCard
