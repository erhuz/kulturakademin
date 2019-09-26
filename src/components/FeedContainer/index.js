import React from 'react';
import FeedCard from '../FeedCard';
import feedData from '../../data/feedData';
import youtubeVideos from '../../data/youtubeVideos.json';

const FeedContainer = (props) => {
  // const feedContainer = feedData.map(item => {

  //   if(props.category == item.category){

  //     return item.data.map(obj => (
  //       <FeedCard
  //         key={obj.id}
  //         thumbnail={obj.thumbnail}
  //         header={obj.header}
  //         description={obj.description}
  //         type={obj.type}
  //       />
  //     ))
  //   };
  // });



  const feedContainer = youtubeVideos.items.map( (item, index) => {
    if(item.id.kind !== 'youtube#channel'){

      return (
        <FeedCard
          key={index}
          item={item}
        />
      )
    }
  });

  return(
    <div>
      {feedContainer}
    </div>
  );
};

export default FeedContainer;
