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
  SUBSCRIBE: 'bodyText_size--subscribe',
  FOOTER: 'bodyText_size--footer',
};

export const BodyTextTheme = {
  INTRO: 'bodyText_theme--intro',
  LETSGO: 'bodyText_theme--letsgo',
  CARD: 'bodyText_theme--card',
  OFFER: 'bodyText_theme--offer',
  DESCRIPTION: 'bodyText_theme--description',
  LOREMIPSUM: 'bodyText_theme--loremipsum',
  QUOTATION: 'bodyText_theme--quotation',
  SUBSCRIBE: 'bodyText_theme--subscribe',
  FOOTER: 'bodyText_theme--footer',
};

const BodyText = (props) => {
  const {
    children,
    theme,
    size,
    className,
  } = props;

  const classProps = classnames(
    'bodyText',
    theme,
    size,
    className,
  );

  return (
    <p size={size} theme={theme} className={classProps}>{children}</p>
  );
};

BodyText.defaultProps = {
  size: BodyTextSize.INTRO,
  theme: BodyTextTheme.INTRO,
  className: '',
};

BodyText.propTypes = {
  theme: PropTypes.string,
  size: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default BodyText;
