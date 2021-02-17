import * as React from 'react';
import Nav, { NavLinks, NavPosition } from '../components/molecules/Nav/index';
import { LinkSize, LinkTheme } from '../components/atoms/Link/index';

const IndexPage = () => (
  <div>
    <Nav
      links={NavLinks.INTRO}
      linkSize={LinkSize.UPPERCASE}
      linkTheme={LinkTheme.DARK}
      position={NavPosition.HORIZONTAL}
    />
  </div>
);

export default IndexPage;
