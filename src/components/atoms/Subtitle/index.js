import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import './style.css';

export const SubtitleSize = {
  INTRO: 'subtitle_size--intro',
  LETSGO: 'subtitle_size--letsgo',
  CARD: 'subtitle_size--card',
  OFFER: 'subtitle_size--offer',
  EXPLORE: 'subtitle_size--explore',
  LOREMIPSUM: 'subtitle_size--loremipsum',
  QUOTATION: 'subtitle_size--quotation',
  SUBSCRIBE: 'subtitle_size--subscribe',
  FOOTER: 'subtitle_size--footer',
};

export const SubtitleColor = {
  WHITE: 'subtitle--white',
  DARK_1: 'subtitle--dark1',
  DARK_2: 'subtitle--dark2',
  CREAMY_1: 'subtitle--creamy1',
  CREAMY_2: 'subtitle--creamy2',
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
    shadow = 'subtitle--shadow';
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
