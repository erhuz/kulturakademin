import React from 'react';
import SwipeContainer from '../SwipeContainer';
import React, {Component} from 'react';
import Header from '../Header';
import Footer from '../Footer';
import './App.css';

function App() {
  return (
    <div className="App">
        <h1>Hello World</h1>
        <SwipeContainer/>
        <Header />
        <h1 > Hello World </h1>
        <Footer />
    </div>
  )
}

export default App;
