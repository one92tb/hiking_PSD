import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import './style.css';

export const ButtonType = {
  BUTTON: 'button',
  SUBMIT: 'submit',
};

export const ButtonTheme = {
  LIGHT: 'light',
  CREAMY: 'creamy',
  GREY: 'grey',
  DARK: 'dark',
};

export const ButtonSize = {
  SMALL: 'small',
  MEDIUM: 'medium',
  LARGE: 'large',
};

const Button = (props) => {
  const {
    type, onClick, children, theme, size, className,
  } = props;
  const classProps = classnames(
    'button',
    theme,
    size,
    className,
  );
  return (
    <button type={type} onClick={onClick} className={classProps}>
      {children}
    </button>
  );
};

Button.defaultProps = {
  type: ButtonType.BUTTON,
  theme: ButtonTheme.LIGHT,
  size: ButtonSize.SMALL,
  onClick: () => {},
  className: '',
};

Button.propTypes = {
  theme: PropTypes.string,
  type: PropTypes.string,
  size: PropTypes.string,
  onClick: PropTypes.func,
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default Button;
