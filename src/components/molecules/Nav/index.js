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
  Other: ['Contact Us', 'Help', 'Privacy'],
};

export const NavPosition = {
  HORIZONTAL: 'horizontal',
  VERTICAL: 'vertical',
};

const Nav = (props) => {
  const {
    links,
    linkSize,
    linkTheme,
    position,
    className,
  } = props;

  const classProps = classnames(
    'nav',
    position,
    className,
  );

  return (
    <nav className={classProps}>
      {links.map((link) => (
        <Link key={link} size={linkSize} theme={linkTheme}>{link}</Link>
      ))}
      {NavLinks.INTRO.length === links.length
        && <Input size={InputSize.SMALL} color={InputColor.DARK} />}
    </nav>
  );
};

Nav.defaultProps = {
  links: ['home', 'menu', 'our story', 'contact us'],
  linkSize: 'link--uppercase',
  linkTheme: 'link--dark',
  position: 'horizontal',
  className: '',
};

Nav.propTypes = {
  links: PropTypes.array,
  linkSize: PropTypes.string,
  linkTheme: PropTypes.string,
  position: PropTypes.string,
  className: PropTypes.string,
};

export default Nav;
