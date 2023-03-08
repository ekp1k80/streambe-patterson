import React from 'react';
import CartWrapperComponent from './cartWrapper';

export default {
  title: 'Components/CartWrapper',
  component: CartWrapperComponent,
  parameters: {
    layout: 'fullscreen',
  },
};

function Template(args) {
  return <CartWrapperComponent {...args} />;
}

export const CartWrapper = Template.bind({});
CartWrapper.args = {
  children: 'This is a Cart Wrapper',
};
