import React from 'react';
import ShowCaseComponent from './showCase';

export default {
  title: 'Pages/ShowCase',
  component: ShowCaseComponent,
  parameters: {
  },
};

function Template(args) {
  return <ShowCaseComponent {...args} />;
}

export const ShowCase = Template.bind({});
ShowCase.args = {
};
