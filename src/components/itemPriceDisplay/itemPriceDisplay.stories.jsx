import React from 'react';
import ItemPriceDisplayComponent from './itemPriceDisplay';
import TestImage from '../../image/test.jpg';
import CartWrapper from '../cartWrapper';
import ItemsPriceToPurchase from '../itemsPriceToPurchase/itemsPriceToPurchase';

export default {
  title: 'Components/ItemPriceDisplay',
  component: ItemPriceDisplayComponent,
  parameters: {
    layout: 'centered',
  },
};

function Template(args) {
  return (
    <CartWrapper>
      <ItemsPriceToPurchase boxTitleText="Items to Purchase">
        <ItemPriceDisplayComponent {...args} />
      </ItemsPriceToPurchase>
    </CartWrapper>
  );
}

export const ItemPriceDisplay = Template.bind({});
ItemPriceDisplay.args = {
  price: 19.99,
  name: 'Example Item',
  image: TestImage,
};
