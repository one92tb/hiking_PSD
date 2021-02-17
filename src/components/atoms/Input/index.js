import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import './style.css';

export const InputSize = {
  SMALL: 'input--small',
  LARGE: 'input--large',
};

export const InputColor = {
  LIGHT: 'input--light',
  DARK: 'input--dark',
};

const Input = (props) => {
  const {
    size, color, className,
  } = props;

  const classProps = classnames(
    'input',
    size,
    color,
    className,
  );

  if (size === 'input--small') {
    return <input type="text" placeholder="&#61442;" className={classProps} />;
  }
  return <input type="text" placeholder="Your Email" className={classProps} />;
};

Input.defaultProps = {
  size: 'input--small',
  color: 'input--dark',
  className: '',
};

Input.propTypes = {
  size: PropTypes.string,
  color: PropTypes.string,
  className: PropTypes.string,
};

export default Input;
