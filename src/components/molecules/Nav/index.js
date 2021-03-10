import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import './style.css';
import Link from '../../atoms/Link/index';
import Input, { InputSize, InputColor } from '../../atoms/Input/index';
import LetsGo from '../../templates/LetsGo/index';
import Offer from '../../templates/Offer/index';
import Description from '../../templates/Description/index';
import Subscribe from '../../templates/Subscribe/index';

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

const scrollToComponent = (refs, link, setChecked, isChecked) => {
  Object.keys(refs).find((ref) => ref === link);
  const refPropertyName = Object.keys(refs).find((ref) => ref === link);
  if (refPropertyName) {
    window.scrollTo({
      top: refs[refPropertyName].current.offsetTop,
      behavior: 'smooth',
    });
    setChecked(!isChecked);
  }
};

const Nav = (props) => {
  const {
    links,
    linkSize,
    linkTheme,
    position,
    visible,
    className,
    refs,
    setChecked,
    isChecked,
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
        <Link
          key={link}
          size={linkSize}
          theme={linkTheme}
          onClick={() => scrollToComponent(refs, link, setChecked, isChecked)}
        >
          {link}
        </Link>
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
  refs: {
    home: { current: LetsGo },
    menu: { current: Offer },
    'our story': { current: Description },
    'contact us': { current: Subscribe },
  },
  setChecked: () => {},
  isChecked: false,
};

Nav.propTypes = {
  links: PropTypes.array,
  linkSize: PropTypes.string,
  linkTheme: PropTypes.string,
  position: PropTypes.string,
  visible: PropTypes.string,
  className: PropTypes.string,
  refs: PropTypes.shape({
    home: PropTypes.oneOfType([
      PropTypes.func,
      PropTypes.shape({ current: PropTypes.any }),
    ]),
    menu: PropTypes.oneOfType([
      PropTypes.func,
      PropTypes.shape({ current: PropTypes.any }),
    ]),
    'our story': PropTypes.oneOfType([
      PropTypes.func,
      PropTypes.shape({ current: PropTypes.any }),
    ]),
    'contact us': PropTypes.oneOfType([
      PropTypes.func,
      PropTypes.shape({ current: PropTypes.any }),
    ]),
  }),
  setChecked: PropTypes.func,
  isChecked: PropTypes.bool,
};

export default Nav;
