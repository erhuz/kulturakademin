import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import './DefaultLayout.css';

function DefaultLayout(props) {

  return (
    <div className="App">
        <Header />
          {props.children}
        <Footer />
    </div>
  )
}

export default DefaultLayout;
