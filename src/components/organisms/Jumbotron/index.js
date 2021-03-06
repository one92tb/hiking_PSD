import React from 'react';
import PropTypes from 'prop-types';
import Title from '../../atoms/Title/index';
import Subtitle, { SubtitleSize, SubtitleColor } from '../../atoms/Subtitle/index';
import Button, { ButtonSize, ButtonTheme } from '../../atoms/Button/index';
import BodyText, { BodyTextColor, BodyTextItalic, BodyTextSize } from '../../atoms/BodyText/index';
import './style.css';

const Jumbotron = (props) => {
  const { text } = props;
  return (
    <div className="jumbotron">
      <Title>
        it&acute;s time
        <br />
        for hiking
      </Title>
      <Subtitle size={SubtitleSize.INTRO} color={SubtitleColor.DARK_1}>loremipsum dolor</Subtitle>
      <Button size={ButtonSize.SMALL} theme={ButtonTheme.LIGHT}>read more</Button>
      <BodyText
        color={BodyTextColor.DARK_1}
        size={BodyTextSize.INTRO}
        italic={BodyTextItalic.ITALIC}
      >
        {text}
      </BodyText>
    </div>
  );
};

Jumbotron.defaultProps = {
  text: 'lorem ipsum dolor',
};

Jumbotron.propTypes = {
  text: PropTypes.string,
};

export default Jumbotron;
