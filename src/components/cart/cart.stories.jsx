import React from 'react';

import CartComponent from './cart';

export default {
  title: 'Components/Cart',
  component: CartComponent,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
};

function Template(args) {
  // eslint-disable-next-line react/jsx-props-no-spreading
  return <CartComponent {...args} />;
}

export const Cart = Template.bind({});
Cart.args = {
  itemCount: 2,
};
