import React from 'react';
import BolderTitleComponent from './bolderTitle';

export default {
  title: 'Components/BolderTitle',
  component: BolderTitleComponent,
  parameters: {
    layout: 'fullscreen',
  },
};

function Template(args) {
  return <BolderTitleComponent {...args} />;
}

export const BolderTitle = Template.bind({});
BolderTitle.args = {
  children: 'This is a Bolder Title',
};
