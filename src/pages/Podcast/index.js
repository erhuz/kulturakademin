import React, { Component } from 'react';
import DefaultLayout from '../../layouts/Default';
import playPod from '../../assets/images/playPod.png';
import nextPod from '../../assets/images/nextPod.png';
import previousPod from '../../assets/images/previousPod.png';
import progressBar from '../../assets/images/progressBar.png';
import fakePodSlide from '../../assets/images/fakePodSlide.png';
import './Podcast.css';

class Podcast extends Component {
  render() {
    return (
      <DefaultLayout>
        <div className="playing">
          <img src={fakePodSlide} alt="fake slide" />
        </div>
        <div className="player-container">
          <img src={progressBar} alt="fake progressbar"/>
          <div className="options">
            <div className="previous">
              <img src={previousPod} alt="previous pod icon"/>
            </div>
            <div className="play-pause">
              <img src={playPod} alt="play pod icon"/>
            </div>
            <div className="next">
              <img src={nextPod} alt="next pod icon"/>
            </div>
          </div>
        </div>
        <div className="podcast-description-container">

        </div>
        <div className="related-container">

        </div>
      </DefaultLayout>
    )
  }
}

export default Podcast

