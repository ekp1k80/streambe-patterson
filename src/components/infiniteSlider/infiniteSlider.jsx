import React from 'react';
import PropTypes from 'prop-types';
import './infiteSlider.scss';
import {
  CarouselProvider, Slider, Slide, ButtonBack, ButtonNext,
} from 'pure-react-carousel';
import ItemCardLayout from '../itemCardLayout';
import LeftSliderButton from '../sliderButton/leftSliderButton';
import RightSliderButton from '../sliderButton/rightSliderButton';
import 'pure-react-carousel/dist/react-carousel.es.css';

function ItemCardSlider({ items, addToCart }) {
  return (
    <CarouselProvider
      totalSlides={items.length}
      visibleSlides={4}
      isIntrinsicHeight
      dragEnabled={false}
      touchEnabled={false}
      infinite
      className="slider-container"
    >
      <Slider>
        {items.map((item, index) => (
          <Slide index={index + 1} key={`Slider-Item${index}`} className="slider-item">
            <ItemCardLayout
              addToCart={addToCart}
              item={item}
            />
          </Slide>
        ))}
      </Slider>
      <ButtonBack className="slider-button slider-button-left">
        <LeftSliderButton />
      </ButtonBack>
      <ButtonNext className="slider-button slider-button-right">
        <RightSliderButton />
      </ButtonNext>
    </CarouselProvider>
  );
}

ItemCardSlider.defaultProps = {
  addToCart: () => {},
};

ItemCardSlider.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      price: PropTypes.string.isRequired,
    }),
  ).isRequired,
  addToCart: PropTypes.func,
};

export default ItemCardSlider;
