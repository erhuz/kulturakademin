import React from 'react';
import share from '../../assets/images/share.png';
import bookmark from '../../assets/images/bookmark.png';
import './ContentDescriptionContainer.css';

const ContentDescriptionContainer = () => {
  return(
    <div className="content-info-container">
      <div className="top-container">
        <div className="content-description-container">
          <h4 className="content-description-title">Description</h4>
          <p className="content-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Turpis est lorem neque, volutpat dolor phasellus. Ut amet, amet egestas nibh bibendum urna</p>
        </div>
        <div className="call-to-action">
          <img className="share-btn" src={share} alt=""/>
          <img className="bookmark-btn" src={bookmark} alt=""/>
        </div>
      </div>
      <div className="bottom-container">
        <div className="content-cast-container">
          <h4 className="content-cast-title">Medverkande</h4>
          <p className="content-cast">Christer Petterson, Ola Sävenäs</p>
        </div>
      </div>
    </div>
  )
};

export default ContentDescriptionContainer;
