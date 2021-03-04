import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import './style.css';

export const BodyTextSize = {
  INTRO: 'bodyText_size--intro',
  LETSGO: 'bodyText_size--letsgo',
  CARD: 'bodyText_size--card',
  OFFER: 'bodyText_size--offer',
  DESCRIPTION: 'bodyText_size--description',
  LOREMIPSUM: 'bodyText_size--loremipsum',
  QUOTATION: 'bodyText_size--quotation',
  QUOTATION_AUTHOR: 'bodyText_size--quotation-author',
  SUBSCRIBE: 'bodyText_size--subscribe',
  FOOTER: 'bodyText_size--footer',
};

export const BodyTextColor = {
  WHITE: 'bodyText--white',
  DARK_1: 'bodyText--dark1',
  DARK_2: 'bodyText--dark2',
  DARK_3: 'bodyText--dark3',
  GREY_1: 'bodyText--grey1',
  GREY_2: 'bodyText--grey2',
};

export const BodyTextItalic = {
  ITALIC: 'bodyText--italic',
};

const BodyText = (props) => {
  const {
    children,
    color,
    size,
    italic,
    className,
  } = props;

  const classProps = classnames(
    'bodyText',
    color,
    size,
    italic,
    className,
  );

  return (
    <p size={size} color={color} className={classProps}>{children}</p>
  );
};

BodyText.defaultProps = {
  size: BodyTextSize.INTRO,
  color: BodyTextColor.WHITE,
  italic: '',
  className: '',
};

BodyText.propTypes = {
  color: PropTypes.string,
  size: PropTypes.string,
  italic: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default BodyText;
