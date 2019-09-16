import React from 'react';
import SwipeContainer from '../SwipeContainer';
import Header from '../Header';
import Footer from '../Footer';
import CategoriesComponent from '../CategoriesComponent'
import './App.css';

function App() {



  const AppStyle = {
    backgroundColor: '#242424'
  }

  return (
    <div style={AppStyle} className="App">
        <Header />
        <CategoriesComponent />
        <SwipeContainer/>
        <Footer />
    </div>
  )
}

export default App;
