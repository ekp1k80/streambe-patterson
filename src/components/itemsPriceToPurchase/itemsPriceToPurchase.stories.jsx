import React from 'react';
import ItemsPriceToPurchaseComponent from './itemsPriceToPurchase';

export default {
  title: 'Components/ItemsPriceToPurchase',
  component: ItemsPriceToPurchaseComponent,
  parameters: {
    layout: 'fullscreen',
  },
};

function Template(args) {
  return <ItemsPriceToPurchaseComponent {...args} />;
}

export const ItemsPriceToPurchase = Template.bind({});
ItemsPriceToPurchase.args = {
  boxTitleText: 'Title',
  children: 'This is the items container',
};
