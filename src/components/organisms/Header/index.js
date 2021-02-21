import React from 'react';
import './style.css';
import Nav, { NavLinks, NavPosition } from '../../molecules/Nav/index';
import { LinkSize, LinkTheme } from '../../atoms/Link';
import Image from '../../atoms/Image/index';
import logo from '../../../images/logo.png';

const Header = () => (
  <header className="header">
    <Image width="91" height="94" url={logo} alt="logo" />
    <Nav
      links={NavLinks.INTRO}
      linkSize={LinkSize.UPPERCASE}
      linkTheme={LinkTheme.DARK}
      position={NavPosition.HORIZONTAL}
    />
  </header>
);

export default Header;
