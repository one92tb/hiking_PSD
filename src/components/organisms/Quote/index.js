import React from 'react';
import PropTypes from 'prop-types';
import Subtitle, { SubtitleColor, SubtitleSize } from '../../atoms/Subtitle/index';
import BodyText, { BodyTextSize, BodyTextTheme } from '../../atoms/BodyText/index';
import './style.css';

const Quote = (props) => {
  const { author, quotation } = props;

  return (
    <div>
      <Subtitle size={SubtitleSize.QUOTATION} color={SubtitleColor.DARK_2}>&#x22;</Subtitle>
      <BodyText size={BodyTextSize.QUOTATION} theme={BodyTextTheme.QUOTATION}>{quotation}</BodyText>
      <BodyText
        size={BodyTextSize.QUOTATION_AUTHOR}
        theme={BodyTextTheme.QUOTATION}
      >
        {author}
      </BodyText>
    </div>
  );
};

export default Quote;

Quote.defaultProps = {
  author: 'author',
  quotation: 'quotation',
};

Quote.propTypes = {
  author: PropTypes.string,
  quotation: PropTypes.string,
};
