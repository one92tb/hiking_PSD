import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import './style.css';
import Link from '../../atoms/Link/index';
import Input, { InputSize, InputColor } from '../../atoms/Input/index';

export const NavLinks = {
  INTRO: ['home', 'menu', 'our story', 'contact us'],
  ABOUT: ['History', 'Our Team', 'Brand Guidelines', 'Terms& Condition', 'Privacy Policy'],
  SERVICES: ['How to Order', 'Our Product', 'Order Status', 'Promo', 'Payment Method'],
  OTHER: ['Contact Us', 'Help', 'Privacy'],
};

export const NavPosition = {
  HORIZONTAL: 'nav--horizontal',
  VERTICAL: 'nav--vertical',
};

export const NavVisible = {
  HIDDEN: 'nav--hidden',
};

const Nav = (props) => {
  const {
    links,
    linkSize,
    linkTheme,
    position,
    visible,
    className,
  } = props;

  const classProps = classnames(
    'nav',
    position,
    className,
    visible,
  );

  return (
    <nav className={classProps}>
      {links.map((link) => (
        <Link key={link} size={linkSize} theme={linkTheme}>{link}</Link>
      ))}
      {links[0] === 'home'
        && <Input size={InputSize.SMALL} color={InputColor.DARK} type="text" />}
    </nav>
  );
};

Nav.defaultProps = {
  links: ['home', 'menu', 'our story', 'contact us'],
  linkSize: 'link--uppercase',
  linkTheme: 'link--dark',
  position: 'horizontal',
  visible: '',
  className: '',
};

Nav.propTypes = {
  links: PropTypes.array,
  linkSize: PropTypes.string,
  linkTheme: PropTypes.string,
  position: PropTypes.string,
  visible: PropTypes.string,
  className: PropTypes.string,
};

export default Nav;
