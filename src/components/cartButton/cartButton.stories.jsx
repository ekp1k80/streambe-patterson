import React from 'react';

import CartButtonComponent from './cartButton';

export default {
  title: 'Components/CartButton',
  component: CartButtonComponent,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
};

function Template(args) {
  // eslint-disable-next-line react/jsx-props-no-spreading
  return <CartButtonComponent {...args} />;
}

export const CartButton = Template.bind({});
CartButton.args = {
  itemCount: 2,
};
