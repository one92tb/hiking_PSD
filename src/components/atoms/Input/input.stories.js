import React from 'react';
import Input, { InputSize, InputColor } from '.';

const Template = (args) => <Input {...args} />;

export const IntroInput = Template.bind({});
IntroInput.storyName = 'small dark input';
IntroInput.args = {
  size: InputSize.SMALL,
  color: InputColor.DARK,
};

export const SubscribeInput = Template.bind({});
SubscribeInput.storyName = 'large light input';
SubscribeInput.args = {
  size: InputSize.LARGE,
  color: InputColor.LIGHT,
};

export default {
  title: 'Atoms/Input',
  component: [IntroInput],
  argTypes: {
    size: {
      control: {
        type: 'select',
        options: [
          InputSize.SMALL,
          InputSize.LARGE,
        ],
      },
    },
    color: {
      control: {
        type: 'select',
        options: [
          InputColor.LIGHT,
          InputColor.DARK,
        ],
      },
    },
  },
};
