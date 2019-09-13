import React, { Component } from 'react';
import SwipeContainer from '../SwipeContainer';
import Header from '../Header';
import Footer from '../Footer';
import './App.css';

function App() {
  return (
    <div className="App">
        <Header />
        <SwipeContainer/>
        <h1 > Hello World </h1>
        <Footer />
    </div>
  )
}

export default App;
