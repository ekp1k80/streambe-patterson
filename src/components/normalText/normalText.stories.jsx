import React from 'react';
import NormalTextComponent from './normalText';

export default {
  title: 'Components/NormalText',
  component: NormalTextComponent,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
};

function Template(args) {
  // eslint-disable-next-line react/jsx-props-no-spreading
  return (
    <NormalTextComponent {...args} />
  );
}

export const NormalText = Template.bind({});
NormalText.args = {
  children: 'This is a Normal Text',
};
