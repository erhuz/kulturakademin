import React, { Component } from 'react';
import Slide from './Slide';
import './HeroSlider.css';

class HeroSlider extends Component {
  constructor(props){
    super(props);
    this.state = {
      currentSlide: 0,
    }
  }

  componentDidMount = () => {
    let interval = setInterval(() => {
      this.setNextSlide(this.state.currentSlide, this.props.slides.length)
    }
    , 10000);

  }

  setNextSlide = (currentSlide, amountOfSlides) => {
    const determinedSlide = this.determineNextSlide(currentSlide, amountOfSlides);
    this.setState({currentSlide: determinedSlide});
  }

  determineNextSlide = (currentSlide, amountOfSlides) => {

    let determinedSlide = currentSlide;

    if(currentSlide >= (amountOfSlides - 1)){
      determinedSlide = 0;
    }else{
      determinedSlide++;
    }

    return determinedSlide;
  }

  render(){

    const slides = this.props.slides.map( slide => {
      return <Slide img={slide.img} title={slide.title} description={slide.description} />
    });

    const outerSlideContainerStyles = {
      width: '100vw',
      overflow: 'hidden'
    }

    const innerSlideContainerStyles = {
      width: `${this.props.slides.length}00vw`,
      transform: `translateX(-${this.state.currentSlide}00vw)`,
      transition: 'transform .3s ease-in-out',
    }

    return(
      <div style={outerSlideContainerStyles}>
        <div style={innerSlideContainerStyles}>
          {slides}
        </div>
      </div>
    )
  }
}

export default HeroSlider
