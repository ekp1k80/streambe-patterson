import React from 'react';

import RightSliderButtonComponent from './rightSliderButton';

export default {
  title: 'Components/sliderButton',
  component: RightSliderButtonComponent,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
};

function Template(args) {
  // eslint-disable-next-line react/jsx-props-no-spreading
  return (
    <RightSliderButtonComponent {...args} />
  );
}

export const RightSliderButton = Template.bind({});
RightSliderButton.args = {
};
