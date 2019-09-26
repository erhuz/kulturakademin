import React from 'react';
import share from '../../assets/images/share.png';
import bookmark from '../../assets/images/bookmark.png';
import './ContentDescriptionContainer.css';

const ContentDescriptionContainer = () => {
  return(
    <div className="content-info-container">
      <div className="top-container">
        <div className="content-description-container">
          <h4 className="content-description-title">Adaptionsseminarium</h4>
          <p className="content-description">Det är alltid speciellt att se en filmatisering av en bok. Vilka val gjorts i filmen och varför? Lyckas det skrivna ordet förmedlas till den vita duken?</p>
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
