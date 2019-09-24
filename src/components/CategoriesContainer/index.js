import React, {Component} from 'react';
import CategoriesButton from '../CategoriesButton';
import feedData from '../../data/feedData';


class CategoriesContainer extends Component {
  render() {

    const categoriesComponents = feedData.map(item => <CategoriesButton key={item.key} category={item.category}/>);

    return(
      <div>
        {categoriesComponents}
      </div>
    )
  }
};

export default CategoriesContainer;
