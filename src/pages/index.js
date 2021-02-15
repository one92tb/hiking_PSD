import * as React from 'react';
import './index.css';
import Title from '../components/atoms/Title/index';
import Subtitle, { SubtitleSize, SubtitleColor, SubtitleShadow } from '../components/atoms/Subtitle/index';

const IndexPage = () => (
  <div>
    <Title>
      it´s time
      <br />
      for hiking
    </Title>
    <Subtitle size={SubtitleSize.INTRO} color={SubtitleColor.DARK_1}>loremipsum dolor</Subtitle>
    <Subtitle
      size={SubtitleSize.LETSGO}
      color={SubtitleColor.DARK_1}
      shadow={SubtitleShadow.SHADOW}
    >
      let&prime; s go
    </Subtitle>
  </div>
);

export default IndexPage;
