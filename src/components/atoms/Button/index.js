import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import './style.css';

export const ButtonType = {
  BUTTON: 'button',
  SUBMIT: 'submit',
};

export const ButtonTheme = {
  LIGHT: 'button--light',
  CREAMY: 'button--creamy',
  GREY: 'button--grey',
  DARK: 'button--dark',
};

export const ButtonSize = {
  SMALL: 'button--small',
  MEDIUM: 'button--medium',
  LARGE: 'button--large',
};

export const ButtonPosition = {
  CENTER: 'button--center',
};

const Button = (props) => {
  const {
    type, onClick, children, theme, size, className, position,
  } = props;
  const classProps = classnames(
    'button',
    theme,
    size,
    className,
    position,
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
  position: '',
};

Button.propTypes = {
  theme: PropTypes.string,
  type: PropTypes.string,
  size: PropTypes.string,
  onClick: PropTypes.func,
  className: PropTypes.string,
  position: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default Button;
