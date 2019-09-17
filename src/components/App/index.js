import React from 'react';
import SwipeContainer from '../SwipeContainer';
import Header from '../Header';
import Footer from '../Footer';
import CategoriesButton from '../CategoriesButton'
import categoriesData from '../CategoriesButton/categoriesData'
import './App.css';
import FeedComponent from '../FeedComponent';

function App() {

  const categoriesComponents = categoriesData.map(item => <CategoriesButton key={item.id} name={item.name} category={item.category} color={item.color}/>)

  return (
    <div className="App">
        <Header />
        <FeedComponent />
        {categoriesComponents}
        <SwipeContainer/>
        <h1 > Hello World </h1>
        <Footer />
    </div>
  )
}

export default App;
