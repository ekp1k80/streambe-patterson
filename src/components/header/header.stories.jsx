import React from 'react';

import HeaderComponent from './header';

export default {
  title: 'Components/Header',
  component: HeaderComponent,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
};

function Template(args) {
  // eslint-disable-next-line react/jsx-props-no-spreading
  return (
    <div style={{ width: '100vw', height: '100vh', background: '#000' }}>
      <HeaderComponent {...args} />
    </div>
  );
}

export const Header = Template.bind({});
Header.args = {
  itemCount: 2,
};
