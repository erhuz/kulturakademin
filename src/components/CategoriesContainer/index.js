import React from 'react';
import CategoriesButton from '../CategoriesButton';
import feedData from '../../data/feedData';


const CategoriesContainer = () => {

  const categoriesComponents = feedData.map(item => <CategoriesButton key={item.key} category={item.category}/>);

  return(
    <div>
      {categoriesComponents}
    </div>
  )
};

export default CategoriesContainer;
