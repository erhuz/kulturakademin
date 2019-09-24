import React, { Component } from 'react'
import DefaultLayout from '../../layouts/Default'
import FeedContainer from '../../components/FeedContainer'
import './Category.css'

class Category extends Component {
  render() {
    return (
      <DefaultLayout>
        <h2>{this.props.match.params.name}</h2>
        <FeedContainer category={this.props.match.params.name}/>
      </DefaultLayout>
    )
  }
}

export default Category

