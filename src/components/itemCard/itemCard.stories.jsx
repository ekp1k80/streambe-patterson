import React from 'react';
import TestImage from '../../image/test.jpg';
import ItemCardComponent from './itemCard';

export default {
  title: 'Components/ItemCard',
  component: ItemCardComponent,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
};

function Template(args) {
  // eslint-disable-next-line react/jsx-props-no-spreading
  return (
    <div style={{ background: '#000', width: '100vw', height: '100vh' }}>
      <ItemCardComponent {...args} />
    </div>
  );
}

export const ItemCard = Template.bind({});
ItemCard.args = {
  image: TestImage,
  alt: 'Test Image',
};
