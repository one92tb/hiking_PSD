import React, { useState } from 'react';
import './style.css';
import Nav, { NavLinks, NavPosition, NavVisible } from '../../molecules/Nav/index';
import { LinkSize, LinkTheme } from '../../atoms/Link';
import Image, { ImageBox } from '../../atoms/Image/index';
import logo from '../../../images/logo.png';
import Hamburger from '../../molecules/Hamburger/index';

const Header = () => {
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
      />
    </header>
  );
};

export default Header;
