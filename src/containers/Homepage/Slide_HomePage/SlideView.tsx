import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { StyledSlide } from './styled';

export default class SimpleSlider extends Component {
  render() {
    const image = [
      '/images/slideshow_1.jpg',
      '/images/slideshow_2.jpg',
      '/images/slideshow_3.jpg'
    ]
      

    
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <StyledSlide>
        <Slider {...settings}>
          <div>
            <div className="slide-image" >
              <img
                className="item_img"
                src={window.location.origin  + image[0]}
                alt=""
              />
            </div>
          </div>
          <div>
            <div className="slide-image" >
              <img
                className="item_img"
                src={window.location.origin  + image[1]}
                alt=""
              />

            </div>
          </div>
          <div>
            <div className="slide-image">
              <img
                className="item_img"
                src={window.location.origin  + image[2]}
                alt=""
              />
            </div>
          </div>
        </Slider>
      </StyledSlide>
    );
  }
}