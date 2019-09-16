import React from 'react';
import SwipeContainer from '../SwipeContainer';
import Header from '../Header';
import Footer from '../Footer';
import CategoriesButton from '../CategoriesButton'
import categoriesData from '../CategoriesButton/categoriesData'
import './App.css';

function App() {

  const categoriesComponents = categoriesData.map(item => <CategoriesButton key={item.id} name={item.name} category={item.category} color={item.color}/>)

  const AppStyle = {
    backgroundColor: '#242424'
  }

  return (
    <div style={AppStyle} className="App">
        <Header />
        {categoriesComponents}
        <SwipeContainer/>
        <Footer />
    </div>
  )
}

export default App;
