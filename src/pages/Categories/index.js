import React, { Component } from 'react'
import DefaultLayout from "../../layouts/Default"
import CategoriesContainer from '../../components/CategoriesContainer'

class Categories extends Component {
  render() {
    return (
      <DefaultLayout>
        <CategoriesContainer />
      </DefaultLayout>
    )
  }
}

export default Categories

