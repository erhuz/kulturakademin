import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import DefaultLayout from '../../layouts/Default';
import YouTube from 'react-youtube';
import SwipeContainer from '../../components/SwipeContainer';
import './Webcast.css'

const Webcast = ({match}) => {
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



  const playerOptions = {
    height: (window.innerHeight / 4),
    width: window.innerWidth,
    playerVars: { // https://developers.google.com/youtube/player_parameters
      modestbranding: 1
    }
  }

  return (
    <DefaultLayout>
    <YouTube
      videoId={match.params.id}
      opts={playerOptions} />

      {/* Video info */}
      <div className="webcast-info-container">
        <div className="top-container">
          <div className="webcast-description-container">
            <h4 className="webcast-description-title">Description</h4>
            <p className="webcast-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Turpis est lorem neque, volutpat dolor phasellus. Ut amet, amet egestas nibh bibendum urna</p>
          </div>
        </div>
        <div className="bottom-container">
          <div className="webcast-cast-container">
            <h4 className="webcast-cast-title">Medverkande</h4>
            <p className="webcast-cast">Christer Petterson, Ola Sävenäs</p>
          </div>
        </div>
      </div>

      <SwipeContainer items={testItems}/>

    </DefaultLayout>
  )
}

export default Webcast

