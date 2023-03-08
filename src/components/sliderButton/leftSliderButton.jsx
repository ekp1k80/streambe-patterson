import React from 'react';
import LeftArrowIcon from '../../icons/leftArrow';
import './sliderButton.scss';

function LeftSliderButton() {
  return (
    <button type="button" className="sliderButton__button">
      <LeftArrowIcon fill="#fff" height={25} width={25} />
    </button>
  );
}

export default LeftSliderButton;
