import React, { Component } from 'react';
import DefaultLayout from '../../layouts/Default';
import CategoriesContainer from '../../components/CategoriesContainer';
import './Categories.css';

class Categories extends Component {
  render() {
    return (
      <DefaultLayout>
        <CategoriesContainer />
      </DefaultLayout>
    )
  }
};

export default Categories;

