import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import './style.css';

export const InputSize = {
  SMALL: 'input--small',
  LARGE: 'input--large',
  HIDDEN: 'input--hiden',
};

export const InputColor = {
  LIGHT: 'input--light',
  DARK: 'input--dark',
};

const Input = (props) => {
  const {
    size, color, className, type, id,
  } = props;

  const classProps = classnames(
    'input',
    size,
    color,
    className,
  );

  if (size === 'input--small') {
    return <input type={type} placeholder="&#61442;" className={classProps} />;
  }
  return <input type={type} placeholder="Your Email" className={classProps} id={id} />;
};

Input.defaultProps = {
  size: 'input--small',
  color: 'input--dark',
  type: 'text',
  id: 'toggle',
  className: '',
};

Input.propTypes = {
  size: PropTypes.string,
  color: PropTypes.string,
  className: PropTypes.string,
  type: PropTypes.string,
  id: PropTypes.string,
};

export default Input;
