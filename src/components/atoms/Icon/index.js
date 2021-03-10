import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classnames from 'classnames';
import './style.css';

export const IconSize = {
  SMALL: 'icon--small',
  LARGE: 'icon--large',
};

export const IconColor = {
  SCROLL: 'icon--scrollColor',
  SOCIALMEDIA: 'icon--socialMediaColor',
};

const Icon = (props) => {
  const { icon, size, color } = props;

  const classProps = classnames(
    'icon',
    size,
    color,
  );

  return (
    <FontAwesomeIcon icon={icon} className={classProps} />
  );
};
export default Icon;

Icon.defaultProps = {
  icon: {},
  size: 'icon--small',
  color: 'icon--socialMediaColor',
};

Icon.propTypes = {
  icon: PropTypes.object,
  size: PropTypes.string,
  color: PropTypes.string,
};
