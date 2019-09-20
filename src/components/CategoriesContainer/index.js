import React, {Component} from 'react'
import CategoriesButton from '../CategoriesButton'
import categoriesData from '../../data/categoriesData'


class CategoriesContainer extends Component {
  render() {

    const categoriesComponents = categoriesData.map(item => <CategoriesButton key={item.id} name={item.name} category={item.category} color={item.color}/>)

    return(
      <div>
        {categoriesComponents}
      </div>
    )
  }
}

export default CategoriesContainer
