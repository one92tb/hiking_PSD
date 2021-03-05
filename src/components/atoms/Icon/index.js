import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './style.css';

const Icon = (props) => {
  const { icon } = props;

  return (
    <FontAwesomeIcon icon={icon} className="icon" />
  );
};
export default Icon;

Icon.defaultProps = {
  icon: {},
};

Icon.propTypes = {
  icon: PropTypes.object,
};
