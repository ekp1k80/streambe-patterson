import React from 'react';

import LeftSliderButtonComponent from './leftSliderButton';

export default {
  title: 'Components/sliderButton',
  component: LeftSliderButtonComponent,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
};

function Template(args) {
  // eslint-disable-next-line react/jsx-props-no-spreading
  return (
    <LeftSliderButtonComponent {...args} />
  );
}

export const LeftSliderButton = Template.bind({});
LeftSliderButton.args = {
};
