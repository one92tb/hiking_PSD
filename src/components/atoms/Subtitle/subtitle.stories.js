import React from 'react';
import Subtitle, { SubtitleColor, SubtitleShadow, SubtitleSize } from '.';

const Template = (args) => <Subtitle {...args}>SubTitle</Subtitle>;

export const IntroSubtitle = Template.bind({});
IntroSubtitle.storyName = 'intro subtitle';
IntroSubtitle.args = {
  size: SubtitleSize.INTRO,
  color: SubtitleColor.DARK_1,
  shadow: SubtitleShadow.SHADOW,
};

export const LetsgoSubtitle = Template.bind({});
LetsgoSubtitle.storyName = 'letsgo subtitle';
LetsgoSubtitle.args = {
  size: SubtitleSize.LETSGO,
  color: SubtitleColor.CREAMY_2,
};

export const CardSubtitle = Template.bind({});
CardSubtitle.storyName = 'card subtitle';
CardSubtitle.args = {
  size: SubtitleSize.CARD,
  color: SubtitleColor.WHITE,
};

export const OfferSubtitle = Template.bind({});
OfferSubtitle.storyName = 'offer subtitle';
OfferSubtitle.args = {
  size: SubtitleSize.OFFER,
  color: SubtitleColor.WHITE,
};

export const ExploreSubtitle = Template.bind({});
ExploreSubtitle.storyName = 'explore subtitle';
ExploreSubtitle.args = {
  size: SubtitleSize.EXPLORE,
  color: SubtitleColor.DARK_1,
};

export const LoremIpsumSubtitle = Template.bind({});
LoremIpsumSubtitle.storyName = 'lorem ipsum subtitle';
LoremIpsumSubtitle.args = {
  size: SubtitleSize.LOREMIPSUM,
  color: SubtitleColor.CREAMY_1,
};

export const QuotationSubtitle = Template.bind({});
QuotationSubtitle.storyName = 'quotation subtitle';
QuotationSubtitle.args = {
  size: SubtitleSize.QUOTATION,
  color: SubtitleColor.DARK_2,
};

export const SubscribeSubtitle = Template.bind({});
SubscribeSubtitle.storyName = 'subscribe subtitle';
SubscribeSubtitle.args = {
  size: SubtitleSize.SUBSCRIBE,
  color: SubtitleColor.WHITE,
};

export const FooterSubtitle = Template.bind({});
FooterSubtitle.storyName = 'footer subtitle';
FooterSubtitle.args = {
  size: SubtitleSize.FOOTER,
  color: SubtitleColor.WHITE,
};

export default {
  title: 'Atoms/Subtitle',
  component: [
    IntroSubtitle,
    LetsgoSubtitle,
    CardSubtitle,
    OfferSubtitle,
    ExploreSubtitle,
    LoremIpsumSubtitle,
    QuotationSubtitle,
    SubscribeSubtitle,
    FooterSubtitle,
  ],
  argTypes: {
    size: {
      control: {
        type: 'select',
        options: [
          SubtitleSize.INTRO,
          SubtitleSize.LETSGO,
          SubtitleSize.CARD,
          SubtitleSize.OFFER,
          SubtitleSize.EXPLORE,
          SubtitleSize.LOREMIPSUM,
          SubtitleSize.QUOTATION,
          SubtitleSize.SUBSCRIBE,
          SubtitleSize.FOOTER,
        ],
      },
    },
    color: {
      control: {
        type: 'select',
        options: [
          SubtitleColor.WHITE,
          SubtitleColor.DARK_1,
          SubtitleColor.DARK_2,
          SubtitleColor.CREAMY_1,
          SubtitleColor.CREAMY_2,
        ],
      },
    },
    shadow: {
      control: {
        type: 'boolean',
      },
    },
  },
};
