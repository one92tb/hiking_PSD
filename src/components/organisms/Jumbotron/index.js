import React from 'react';
import Title from '../../atoms/Title/index';
import Subtitle, { SubtitleSize, SubtitleColor } from '../../atoms/Subtitle/index';
import Button, { ButtonSize, ButtonTheme } from '../../atoms/Button/index';
import './style.css';

const Jumbotron = () => (
  <div className="jumbotron">
    <Title>
      it&acute;s time
      <br />
      for hiking
    </Title>
    <Subtitle size={SubtitleSize.INTRO} color={SubtitleColor.DARK_1}>loremipsum dolor</Subtitle>
    <Button size={ButtonSize.SMALL} theme={ButtonTheme.LIGHT}>read more</Button>
  </div>
);

export default Jumbotron;
