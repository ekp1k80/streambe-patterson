import React from 'react';
import CartPageComponent from './cartPage';

export default {
  title: 'Pages/CartPage',
  component: CartPageComponent,
  parameters: {
  },
};

function Template(args) {
  return <CartPageComponent {...args} />;
}

export const CartPage = Template.bind({});
CartPage.args = {
};
