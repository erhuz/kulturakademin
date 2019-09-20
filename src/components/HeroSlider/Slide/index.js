import React from 'react';

const Slide = (props)  => {

  const SlideStyle = {
    background: `url(${props.img})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center center',
    height: '29vh',
    width: '100vw',
    display: 'inline-block',
  }

  return (
    <div style={SlideStyle}>
      <h4>{props.title}</h4>
      <p>{props.description}</p>
    </div>
  )
}

export default Slide;
