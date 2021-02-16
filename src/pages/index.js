import * as React from 'react';
import './index.css';
import Link, { LinkTheme, LinkSize } from '../components/atoms/Link/index';
import Subtitle, { SubtitleSize, SubtitleColor } from '../components/atoms/Subtitle/index';

const IndexPage = () => (
  <div>
    <Subtitle size={SubtitleSize.INTRO} color={SubtitleColor.DARK_1}>loremipsum dolor</Subtitle>
    <Link size={LinkSize.UPPERCASE} theme={LinkTheme.DARK}>link</Link>
  </div>
);

export default IndexPage;
