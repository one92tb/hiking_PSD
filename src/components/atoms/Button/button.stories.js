import React from 'react';
import { action } from '@storybook/addon-actions';

import Button, { ButtonSize, ButtonTheme, ButtonType } from '.';

const Template = (args) => <Button {...args}>button</Button>;

export const JumbotronBtn = Template.bind({});
JumbotronBtn.storyName = 'small light button';
JumbotronBtn.args = {
  size: ButtonSize.SMALL,
  theme: ButtonTheme.LIGHT,
  type: ButtonType.Button,
  onClick: action('clicked'),
};

export const FormBtn = Template.bind({});
FormBtn.storyName = 'medium dark button';
FormBtn.args = {
  size: ButtonSize.MEDIUM,
  theme: ButtonTheme.DARK,
  type: ButtonType.Button,
  onClick: action('clicked'),
};

export const ShowMoreBtn = Template.bind({});
ShowMoreBtn.storyName = 'large grey button';
ShowMoreBtn.args = {
  size: ButtonSize.LARGE,
  theme: ButtonTheme.GREY,
  type: ButtonType.Button,
  onClick: action('clicked'),
};

export const ReadMoreBtn = Template.bind({});
ReadMoreBtn.storyName = 'large creamy button';
ReadMoreBtn.args = {
  size: ButtonSize.LARGE,
  theme: ButtonTheme.CREAMY,
  type: ButtonType.SUBMIT,
  onClick: action('clicked'),
};

export default {
  title: 'Atoms/Button',
  component: [JumbotronBtn, ShowMoreBtn, ReadMoreBtn, FormBtn],
  argTypes: {
    size: {
      control: {
        type: 'select',
        options: [
          ButtonSize.SMALL,
          ButtonSize.MEDIUM,
          ButtonSize.LARGE,
        ],
      },
    },
    theme: {
      control: {
        type: 'select',
        options: [
          ButtonTheme.LIGHT,
          ButtonTheme.CREAMY,
          ButtonTheme.GREY,
          ButtonTheme.DARK,
        ],
      },
    },
    type: {
      control: {
        type: 'select',
        options: [
          ButtonType.BUTTON,
          ButtonType.SUBMIT,
        ],
      },
    },
    onClick: { action: 'clicked' },
  },
};
