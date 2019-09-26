import React, { Component } from 'react';
import DefaultLayout from '../../layouts/Default';
import SwipeContainer from '../../components/SwipeContainer';
import BackButton from '../../components/BackButton'
import playPod from '../../assets/images/playPod.png';
import nextPod from '../../assets/images/nextPod.png';
import previousPod from '../../assets/images/previousPod.png';
import progressBar from '../../assets/images/progressBar.png';
import fakePodSlide from '../../assets/images/fakePodSlide.png';
import share from '../../assets/images/share.png';
import bookmark from '../../assets/images/bookmark.png';
import './Podcast.css';

const testItems = [

  {
    index : 1,
    backgroundUrl : 'https://images.unsplash.com/photo-1568622155247-675b7a01d1e4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80',
  },
  {
    index : 2,
    backgroundUrl : 'https://images.unsplash.com/photo-1568502748968-996f6a82e508?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=670&q=80',
  },
  {
    index : 3,
    backgroundUrl : 'https://images.unsplash.com/photo-1568478555168-38688f1f58fd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=701&q=80',
  },
  {
    index : 4,
    backgroundUrl : 'https://images.unsplash.com/photo-1568621779193-e6e6c9ab80f0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80',
  },
  {
    index : 5,
    backgroundUrl : 'https://images.unsplash.com/photo-1568622155247-675b7a01d1e4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80',
  },
  {
    index : 6,
    backgroundUrl : 'https://images.unsplash.com/photo-1568502748968-996f6a82e508?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=670&q=80',
  },
  {
    index : 7,
    backgroundUrl : 'https://images.unsplash.com/photo-1568478555168-38688f1f58fd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=701&q=80',
  },
  {
    index : 8,
    backgroundUrl : 'https://images.unsplash.com/photo-1568621779193-e6e6c9ab80f0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80',
  },
];

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
            <button className="previous">
              <img src={previousPod} alt="previous pod icon"/>
            </button>
            <button className="play-pause">
              <img src={playPod} alt="play pod icon"/>
            </button>
            <button className="next">
              <img src={nextPod} alt="next pod icon"/>
            </button>
          </div>
        </div>

        <div className="middle-container">
          <div className="podcast-description-container">
            <h4>Medverkande:</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
            <div className="action-buttons">
              <div>
                <img src={share} alt=""/>
              </div>
              <div>
                <img src={bookmark} alt=""/>
              </div>
            </div>
        </div>

          <SwipeContainer className="related-container" items={testItems}/>

        <BackButton / >

      </DefaultLayout>
    )
  }
}

export default Podcast

