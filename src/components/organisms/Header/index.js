import React from 'react';
import './style.css';
import Nav, { NavLinks, NavPosition } from '../../molecules/Nav/index';
import { LinkSize, LinkTheme } from '../../atoms/Link';
import Image, { ImageSize } from '../../atoms/Image/index';

const Header = () => (
  <header className="header">
    <Image imageBoxSize={ImageSize.LOGO} />
    <Nav
      links={NavLinks.INTRO}
      linkSize={LinkSize.UPPERCASE}
      linkTheme={LinkTheme.DARK}
      position={NavPosition.HORIZONTAL}
    />
  </header>
);

export default Header;
