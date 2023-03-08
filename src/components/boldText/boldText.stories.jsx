import React from 'react';
import BoldTextComponent from './boldText';

export default {
  title: 'Components/BoldText',
  component: BoldTextComponent,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
};

function Template(args) {
  // eslint-disable-next-line react/jsx-props-no-spreading
  return (
    <BoldTextComponent {...args} />
  );
}

export const BoldText = Template.bind({});
BoldText.args = {
  children: 'This is a Bold Text',
};
