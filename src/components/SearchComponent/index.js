import React from 'react';
import { Link } from "react-router-dom";
import './SearchComponent.css'
class SearchComponent extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      searchResultOn: false
     };
  }

  render() {
    return (
      <div>
        <div className="search-bar">
          <input className="search-input" placeholder="Sök"/>
          <Link to=""className="search-cancel">avbryt</Link>
        </div>
          {this.state.searchResultOn && (
            <div className="video-or-podd">
              <Link to=""><p className="video">Video</p></Link>
              <div className="vertical-line"></div>
              <Link to=""> <p className="pod">Pod</p></Link>
            </div>
            )}
      </div>
    );
  }
}

export default SearchComponent;
