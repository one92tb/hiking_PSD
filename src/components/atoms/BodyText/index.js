import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import './style.css';

export const BodyTextSize = {
  INTRO: 'size--intro',
  LETSGO: 'size--letsgo',
  CARD: 'size--card',
  OFFER: 'size--offer',
  DESCRIPTION: 'size--description',
  LOREMIPSUM: 'size--loremipsum',
  QUOTATION: 'size--quotation',
  SUBSCRIBE: 'size--subscribe',
  FOOTER: 'size--footer',
};

export const BodyTextTheme = {
  INTRO: 'theme--intro',
  LETSGO: 'theme--letsgo',
  CARD: 'theme--card',
  OFFER: 'theme--offer',
  DESCRIPTION: 'theme--description',
  LOREMIPSUM: 'theme--loremipsum',
  QUOTATION: 'theme--quotation',
  SUBSCRIBE: 'theme--subscribe',
  FOOTER: 'theme--footer',
};

const BodyText = (props) => {
  const {
    children,
    bodyTextTheme,
    bodyTextSize,
    className,
  } = props;

  const classProps = classnames(
    'bodyText',
    bodyTextTheme,
    bodyTextSize,
    className,
  );

  return (
    <p size={bodyTextSize} theme={bodyTextTheme} className={classProps}>{children}</p>
  );
};

BodyText.defaultProps = {
  bodyTextSize: BodyTextSize.INTRO,
  bodyTextTheme: BodyTextTheme.INTRO,
  className: '',
};

BodyText.propTypes = {
  bodyTextTheme: PropTypes.string,
  bodyTextSize: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default BodyText;
