import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import './style.css';

export const LinkTheme = {
  LIGHT: 'link--light',
  DARK: 'link--dark',
};

export const LinkSize = {
  NORMAL: 'link--normal',
  UPPERCASE: 'link--uppercase',
};

const Link = (props) => {
  const {
    onClick,
    theme,
    size,
    children,
    className,
  } = props;

  const classProps = classnames(
    'link',
    theme,
    size,
    className,
  );

  return (
    <a className={classProps} onClick={onClick} href="#">{children}</a>
  );
};

Link.defaultProps = {
  className: '',
  theme: LinkTheme.DARK,
  size: LinkSize.NORMAL,
  onClick: () => {},
};

Link.propTypes = {
  theme: PropTypes.string,
  size: PropTypes.string,
  className: PropTypes.string,
  onClick: PropTypes.func,
  children: PropTypes.node.isRequired,
};

export default Link;
