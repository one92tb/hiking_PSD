import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import './style.css';
import '../Icon/style.css';

export const ButtonType = {
  BUTTON: 'button',
  SUBMIT: 'submit',
};

export const ButtonTheme = {
  LIGHT: 'button--light',
  CREAMY: 'button--creamy',
  GREY: 'button--grey',
  DARK: 'button--dark',
  TRANSPARENT: 'button--transparent',
};

export const ButtonSize = {
  VERYSMALL: 'button--verySmall',
  SMALL: 'button--small',
  MEDIUM: 'button--medium',
  LARGE: 'button--large',
};

export const ButtonPosition = {
  LETSGO: 'button--letsGoPosition',
  SUBSCRIBE: 'button--subscribePosition',
  SCROLL: 'button--ScrollPosition ',
};

export const ButtonHidden = {
  HIDDEN: 'button--hidden',
};

const Button = (props) => {
  const {
    type, onClick, children, theme, size, className, position, visible,
  } = props;
  const classProps = classnames(
    'button',
    theme,
    size,
    className,
    position,
    visible,
  );
  return (
    <button type={type} onClick={onClick} className={classProps}>
      {children}
    </button>
  );
};

Button.defaultProps = {
  type: ButtonType.BUTTON,
  theme: ButtonTheme.GREY,
  size: ButtonSize.SMALL,
  onClick: () => {},
  className: '',
  position: '',
  visible: '',
};

Button.propTypes = {
  theme: PropTypes.string,
  type: PropTypes.string,
  size: PropTypes.string,
  onClick: PropTypes.func,
  className: PropTypes.string,
  position: PropTypes.string,
  children: PropTypes.node.isRequired,
  visible: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.string,
  ]),
};

export default Button;
