import React from 'react';
import { action } from '@storybook/addon-actions';

import Link, { LinkSize, LinkTheme } from '.';

const Template = (args) => <Link {...args}>Link</Link>;

export const IntroLink = Template.bind({});
IntroLink.storyName = 'dark uppercase link';
IntroLink.args = {
  size: LinkSize.UPPERCASE,
  theme: LinkTheme.DARK,
  onClick: action('clicked'),
};

export const FooterLink = Template.bind({});
FooterLink.storyName = 'light normal link';
FooterLink.args = {
  size: LinkSize.NORMAL,
  theme: LinkSize.LIGHT,
  onClick: action('clicked'),
};

export default {
  title: 'Atoms/Link',
  component: [IntroLink],
  argTypes: {
    size: {
      control: {
        type: 'select',
        options: [
          LinkSize.NORMAL,
          LinkSize.UPPERCASE,
        ],
      },
    },
    theme: {
      control: {
        type: 'select',
        options: [
          LinkTheme.LIGHT,
          LinkTheme.DARK,
        ],
      },
    },
    onClick: { action: 'clicked' },
  },
};
