import React from 'react';
import PropTypes from 'prop-types';
import Subtitle, { SubtitleColor, SubtitleSize } from '../../atoms/Subtitle/index';
import BodyText, { BodyTextSize, BodyTextTheme } from '../../atoms/BodyText/index';
import './style.css';

const Opinion = (props) => {
  const { edge } = props;
  const { title, text } = edge.node;
  return (
    <div className="opinion">
      <Subtitle size={SubtitleSize.LOREMIPSUM} color={SubtitleColor.CREAMY_1}>{title}</Subtitle>
      <BodyText size={BodyTextSize.LOREMIPSUM} theme={BodyTextTheme.LOREMIPSUM}>{text}</BodyText>
    </div>
  );
};

export default Opinion;

Opinion.defaultProps = {
  edge: {
    node: {
      order: 1,
      title: 'title',
      text: 'text',
    },
  },
};

Opinion.propTypes = {
  edge: PropTypes.shape({
    node: PropTypes.shape({
      order: PropTypes.number,
      title: PropTypes.string,
      text: PropTypes.string,
    }),
  }),
};
