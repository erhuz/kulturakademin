import React from 'react';

const Slide = (props)  => {

  const SlideStyle = {
    color: '#fff',
    background: `linear-gradient(0deg, rgba(36, 36, 36, 0.8) 0%, rgba(0,0,0,0) 100%), url(${props.img})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center center',
    height: '29vh',
    width: '100vw',
    display: 'inline-block',
  }

  const TextContainer = {
    padding: 16,
    width: '50%',
  }

  const SlideTitle = {
    fontSize: 36,
    fontWeight: 'normal',
  }

  const SlideDesc = {
    fontSize: 20
  }

  return (
    <div style={SlideStyle}>
      <div style={TextContainer}>
        <h4 style={SlideTitle}>{props.title}</h4>
        <p style={SlideDesc}>{props.description}</p>
      </div>
    </div>
  )
}

export default Slide;
