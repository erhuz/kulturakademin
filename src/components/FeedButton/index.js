import React from 'react';
import Playknapp from '../../assets/images/Playknapp.png';
import video from '../../assets/images/video.png';
import headphones from '../../assets/images/headphones.png';
import './FeedButton.css';



const FeedButton = () => {
  return(
    <button className="btn">
      <div className="play-btn">
        <img src={Playknapp}/>
      </div>
      <div className="btn-info">
        <div className="play-type">
          <img src={headphones}/>
        </div>
        <div className="play-length">
          <p>09:27</p>
        </div>
      </div>
    </button>
  )
};

export default FeedButton;
