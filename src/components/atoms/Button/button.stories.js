import React from 'react';
import { action } from '@storybook/addon-actions';

import Button, { ButtonSize, ButtonTheme } from '.';

const Template = (args) => <Button {...args}>test1</Button>;

export const jumbotronBtn = Template.bind({});
jumbotronBtn.storyName = 'small light button';
jumbotronBtn.args = {
  size: ButtonSize.SMALL,
  theme: ButtonTheme.LIGHT,
  onClick: action('clicked'),
};

export const formBtn = Template.bind({});
formBtn.storyName = 'medium dark button';
formBtn.args = {
  size: ButtonSize.MEDIUM,
  theme: ButtonTheme.DARK,
  onClick: action('clicked'),
};

export const showMoreBtn = Template.bind({});
showMoreBtn.storyName = 'large grey button';
showMoreBtn.args = {
  size: ButtonSize.LARGE,
  theme: ButtonTheme.GREY,
  onClick: action('clicked'),
};

export const readMoreBtn = Template.bind({});
readMoreBtn.storyName = 'large creamy button';
readMoreBtn.args = {
  size: ButtonSize.LARGE,
  theme: ButtonTheme.CREAMY,
  onClick: action('clicked'),
};

export default {
  title: 'Attoms/Button',
  component: [jumbotronBtn, showMoreBtn, readMoreBtn, formBtn],
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
    onClick: { action: 'clicked' },
  },
};
