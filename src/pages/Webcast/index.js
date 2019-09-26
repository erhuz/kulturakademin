import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import DefaultLayout from '../../layouts/Default';
import YouTube from 'react-youtube';
import SwipeContainer from '../../components/SwipeContainer';
import BackButton from '../../components/BackButton'
import './Webcast.css'
import ContentDescriptionContainer from '../../components/ContentDescriptionContainer';

const Webcast = ({match}) => {

  const playerOptions = {
    height: (window.innerHeight / 4),
    width: window.innerWidth,
    playerVars: { // https://developers.google.com/youtube/player_parameters
      modestbranding: 1
    }
  }

  return (
    <DefaultLayout>
      <BackButton />
    <YouTube
      videoId={match.params.id}
      opts={playerOptions} />

      {/* Video info */}
      <ContentDescriptionContainer platform={'youtube'} videoId={match.params.id} />

      <SwipeContainer title={'Relaterat'} />

    </DefaultLayout>
  )
}

export default Webcast

