import React from 'react';
import SwipeContainer from '../SwipeContainer';
import Header from '../Header';
import Footer from '../Footer';
import CategoriesComponent from '../CategoriesComponent'
import './App.css';

function App() {



  return (
    <div className="App">
        <Header />
        <CategoriesComponent />
        <SwipeContainer/>
        <h1 > Hello World </h1>
        <Footer />
    </div>
  )
}

export default App;
