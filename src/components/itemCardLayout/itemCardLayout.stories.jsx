import React from 'react';
import TestImage from '../../image/test.jpg';
import ItemCardLayoutComponent from './itemCardLayout';

export default {
  title: 'Components/ItemCardLayout',
  component: ItemCardLayoutComponent,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
};

function Template(args) {
  // eslint-disable-next-line react/jsx-props-no-spreading
  return (
    <div style={{ background: '#ececec', width: '100vw', height: '100vh' }}>
      <ItemCardLayoutComponent {...args} />
    </div>
  );
}

export const ItemCardLayout = Template.bind({});
ItemCardLayout.args = {
  image: TestImage,
  alt: 'Test Image',
  normalText: 'Normal Text',
  boldText: 'Bold Text',
};
