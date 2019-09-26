import React from 'react';
import share from '../../assets/images/share.png';
import bookmark from '../../assets/images/bookmark.png';
import youtubeVideos from '../../data/youtubeVideos.json';
import './ContentDescriptionContainer.css';

const ContentDescriptionContainer = (props) => {

  let videoTitle = '';
  let videoDescription = '';

  youtubeVideos.items.forEach(item => {
    if(item.id.videoId === props.videoId){
      videoTitle = item.snippet.title;
      videoDescription = item.snippet.description;
    }
  });


  return(
    <div className="content-info-container">
      <div className="top-container">
        <div className="content-description-container">
          <h4 className="content-description-title">{videoTitle}</h4>
          <p className="content-description">{videoDescription}</p>
        </div>
        <div className="call-to-action">
          <img className="share-btn" src={share} alt=""/>
          <img className="bookmark-btn" src={bookmark} alt=""/>
        </div>
      </div>
      <div className="bottom-container">
        <div className="content-cast-container">
          <h4 className="content-cast-title">Medverkande</h4>
          <p className="content-cast">Pella Kågerman , Hugo Lilja, Sara Bergmark Elfgren, Alexia Wennberg och Jan Göransson,</p>
        </div>
      </div>
    </div>
  )
};

export default ContentDescriptionContainer;
