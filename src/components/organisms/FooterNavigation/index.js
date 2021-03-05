import React from 'react';
import { LinkSize, LinkTheme } from '../../atoms/Link';
import Nav, { NavLinks, NavPosition } from '../../molecules/Nav/index';
import Subtitle, { SubtitleColor, SubtitleSize } from '../../atoms/Subtitle/index';
import './style.css';

const FooterNavigation = () => {
  const subtitles = ['About', 'Services', 'Other'];
  return (
    <div className="footerNavs">
      {subtitles.map((subtitle) => (
        <div className="footerNav" key={subtitle}>
          <Subtitle size={SubtitleSize.FOOTER} color={SubtitleColor.WHITE}>{subtitle}</Subtitle>
          <Nav
            position={NavPosition.VERTICAL}
            links={NavLinks[subtitle.toUpperCase()]}
            linkSize={LinkSize.NORMAL}
            linkTheme={LinkTheme.LIGHT}
          />
        </div>
      ))}
    </div>
  );
};

export default FooterNavigation;
