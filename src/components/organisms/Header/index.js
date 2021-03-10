import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';
import LetsGo from '../../templates/LetsGo/index';
import Offer from '../../templates/Offer/index';
import Description from '../../templates/Description/index';
import Subscribe from '../../templates/Subscribe/index';
import Nav, { NavLinks, NavPosition, NavVisible } from '../../molecules/Nav/index';
import Hamburger from '../../molecules/Hamburger/index';
import Button, {
  ButtonHidden,
  ButtonPosition,
  ButtonSize,
  ButtonTheme,
} from '../../atoms/Button/index';
import { LinkSize, LinkTheme } from '../../atoms/Link';
import Image, { ImageBox } from '../../atoms/Image/index';
import logo from '../../../images/logo.png';
import Icon, { IconColor, IconSize } from '../../atoms/Icon/index';

import './style.css';

const Header = (props) => {
  const { refs } = props;
  const [isChecked, setChecked] = useState(false);
  const [scrollBtnAppear, setScrollBtnAppear] = useState(false);

  const visibleNav = !isChecked && NavVisible.HIDDEN;
  const visibleScrollBtn = !scrollBtnAppear && ButtonHidden.HIDDEN;

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setScrollBtnAppear(true);
      } else {
        setScrollBtnAppear(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrollBtnAppear]);

  const backToIntroComponent = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <header className="header">
      <Image width="100%" height="100%" url={logo} alt="logo" size={ImageBox.LOGO} type="checkbox" />
      <Hamburger setChecked={setChecked} isChecked={isChecked} />
      <Nav
        links={NavLinks.INTRO}
        linkSize={LinkSize.UPPERCASE}
        linkTheme={LinkTheme.DARK}
        position={NavPosition.HORIZONTAL}
        visible={visibleNav}
        refs={refs}
        setChecked={setChecked}
        isChecked={isChecked}
      />
      <Button
        size={ButtonSize.VERYSMALL}
        position={ButtonPosition.SCROLL}
        theme={ButtonTheme.TRANSPARENT}
        visible={visibleScrollBtn}
        onClick={backToIntroComponent}
      >
        <Icon
          icon={faArrowUp}
          size={IconSize.LARGE}
          color={IconColor.SCROLL}
        />
      </Button>
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
