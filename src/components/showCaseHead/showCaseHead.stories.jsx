import React from 'react';

import ShowCaseHeadComponent from './showCaseHead';

export default {
  title: 'Components/ShowCaseHead',
  component: ShowCaseHeadComponent,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
};

function Template(args) {
  // eslint-disable-next-line react/jsx-props-no-spreading
  return (
    <ShowCaseHeadComponent {...args} />
  );
}

export const ShowCaseHead = Template.bind({});
ShowCaseHead.args = {
};
