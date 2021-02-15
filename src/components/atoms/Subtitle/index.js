import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import './style.css';

export const SubtitleSize = {
  INTRO: 'intro',
  LETSGO: 'letsgo',
  CARD: 'card',
  OFFER: 'offer',
  EXPLORE: 'explore',
  LOREMIPSUM: 'loremipsum',
  QUOTATION: 'quotation',
  SUBSCRIBE: 'subscribe',
  FOOTER: 'footer',
};

export const SubtitleColor = {
  WHITE: 'white',
  DARK_1: 'dark1',
  DARK_2: 'dark2',
  CREAMY_1: 'creamy1',
  CREAMY_2: 'creamy2',
};

export const SubtitleShadow = {
  SHADOW: true,
};

const Subtitle = (props) => {
  const {
    size, color, children, className,
  } = props;

  let {
    shadow,
  } = props;

  if (shadow) {
    shadow = 'shadow';
  }

  const classProps = classnames(
    'subtitle',
    size,
    color,
    shadow,
    className,
  );
  return (
    <h2 className={classProps}>{children}</h2>
  );
};

Subtitle.defaultProps = {
  size: SubtitleSize.LETSGO,
  color: SubtitleColor.DARK_1,
  shadow: !SubtitleShadow.SHADOW,
  className: '',
};

Subtitle.propTypes = {
  children: PropTypes.node.isRequired,
  size: PropTypes.string,
  color: PropTypes.string,
  shadow: PropTypes.bool,
  className: PropTypes.string,
};

export default Subtitle;
