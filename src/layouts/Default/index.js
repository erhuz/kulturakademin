import React from 'react';
import Header from '../../components/Header';
import BottomNav from '../../components/BottomNav';
import './DefaultLayout.css';

function DefaultLayout(props) {

  return (
    <div className="App">
        <Header />
          {props.children}
        <BottomNav / >
    </div>
  )
}

export default DefaultLayout;
