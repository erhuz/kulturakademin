import React, { Component } from 'react'
import DefaultLayout from '../../layouts/Default'
import FeedContainer from '../../components/FeedContainer'
import './Category.css'
import BackButton from '../../components/BackButton'

class Category extends Component {
  render() {
    return (
      <DefaultLayout>
        <BackButton />
        <h2 className="category-header">{this.props.match.params.name}</h2>
        <FeedContainer category={this.props.match.params.name}/>
      </DefaultLayout>
    )
  }
}

export default Category

