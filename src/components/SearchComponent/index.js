import React from 'react';
import './SearchComponent.css'

class SearchComponent extends React.Component {

  constructor(props) {
    super(props);
    this.state = {  };
  }

  render() {
    return (
      <div className="search-bar">
        <input className="search-input" type="text" placeholder="Resultat"/>
        <a className="search-cancel" href="/">avbryt</a>
      </div>
    );
  }
}

export default SearchComponent;
