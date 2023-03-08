import React from 'react';
import CallToActionButton from './callToActionButton';

export default {
  title: 'Components/CallToActionButton',
  component: CallToActionButton,
  parameters: {
    layout: 'centered',
  },
};

function Template(args) {
  return <CallToActionButton {...args} />;
}

export const Default = Template.bind({});
Default.args = {
  children: 'Call To Action',
};
