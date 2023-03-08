import React from 'react';
import TicketPurchaseComponent from './ticketPurchase';

export default {
  title: 'Components/TicketPurchase',
  component: TicketPurchaseComponent,
  parameters: {
    layout: 'centered',
  },
};

const items = [
  {
    name: 'Item 1',
    price: '$9.99',
  },
  {
    name: 'Item 2',
    price: '$14.99',
  },
  {
    name: 'Item 3',
    price: '$19.99',
  },
];

function Template(args) {
  return <div style={{ width: '100vw' }}><TicketPurchaseComponent {...args} /></div>;
}

export const Default = Template.bind({});
Default.args = {
  items,
};
