import React from 'react';
import './sliderButton.scss';
import RightArrowSVG from '../../icons/rightArrow';

function RightSliderButton() {
  return (
    <button type="button" className="sliderButton__button">
      <RightArrowSVG fill="#fff" height={20} width={20} />
    </button>
  );
}

export default RightSliderButton;
