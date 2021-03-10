import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Nav, { NavLinks, NavPosition, NavVisible } from '../../molecules/Nav/index';
import { LinkSize, LinkTheme } from '../../atoms/Link';
import Image, { ImageBox } from '../../atoms/Image/index';
import logo from '../../../images/logo.png';
import Hamburger from '../../molecules/Hamburger/index';
import LetsGo from '../../templates/LetsGo/index';
import Offer from '../../templates/Offer/index';
import Description from '../../templates/Description/index';
import Subscribe from '../../templates/Subscribe/index';
import './style.css';

const Header = (props) => {
  const { refs } = props;
  const [isChecked, setChecked] = useState(false);
  const visible = !isChecked && NavVisible.HIDDEN;

  return (
    <header className="header">
      <Image width="100%" height="100%" url={logo} alt="logo" size={ImageBox.LOGO} type="checkbox" />
      <Hamburger setChecked={setChecked} isChecked={isChecked} />
      <Nav
        links={NavLinks.INTRO}
        linkSize={LinkSize.UPPERCASE}
        linkTheme={LinkTheme.DARK}
        position={NavPosition.HORIZONTAL}
        visible={visible}
        refs={refs}
        setChecked={setChecked}
        isChecked={isChecked}
      />
    </header>
  );
};

export default Header;

Header.defaultProps = {
  refs: {
    home: { current: LetsGo },
    menu: { current: Offer },
    'our story': { current: Description },
    'contact us': { current: Subscribe },
  },
};

Header.propTypes = {
  refs: PropTypes.shape({
    home: PropTypes.oneOfType([
      PropTypes.func,
      PropTypes.shape({ current: PropTypes.instanceOf(LetsGo) }),
    ]),
    menu: PropTypes.oneOfType([
      PropTypes.func,
      PropTypes.shape({ current: PropTypes.instanceOf(Offer) }),
    ]),
    'our story': PropTypes.oneOfType([
      PropTypes.func,
      PropTypes.shape({ current: PropTypes.instanceOf(Description) }),
    ]),
    'contact us': PropTypes.oneOfType([
      PropTypes.func,
      PropTypes.shape({ current: PropTypes.instanceOf(Subscribe) }),
    ]),
  }),
};
