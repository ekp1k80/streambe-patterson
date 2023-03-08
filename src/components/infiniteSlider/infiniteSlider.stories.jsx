import React from 'react';
import SliderComponent from './infiniteSlider';
import TestImage from '../../image/test.jpg';

export default {
  title: 'Components/Slider',
  component: SliderComponent,
};

const items = [
  {
    image: TestImage,
    alt: 'Test Image 1',
    normalText: 'Item Name 1',
    boldText: '$9.99',
  },
  {
    image: TestImage,
    alt: 'Test Image 2',
    normalText: 'Item Name 2',
    boldText: '$19.99',
  },
  {
    image: TestImage,
    alt: 'Test Image 3',
    normalText: 'Item Name 3',
    boldText: '$29.99',
  },
  {
    image: TestImage,
    alt: 'Test Image 4',
    normalText: 'Item Name 4',
    boldText: '$39.99',
  },
  {
    image: TestImage,
    alt: 'Test Image 5',
    normalText: 'Item Name 5',
    boldText: '$49.99',
  },
  {
    image: TestImage,
    alt: 'Test Image 6',
    normalText: 'Item Name 6',
    boldText: '$59.99',
  },
];

export function Default() {
  return (
    <SliderComponent
      items={items}
    />
  );
}
