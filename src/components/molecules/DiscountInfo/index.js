import React from 'react';
import PropTypes from 'prop-types';
import './style.css';
import Subtitle, { SubtitleColor, SubtitleSize } from '../../atoms/Subtitle/index';
import BodyText, { BodyTextSize, BodyTextTheme } from '../../atoms/BodyText/index';
import Button, { ButtonSize, ButtonTheme } from '../../atoms/Button/index';

const DiscountInfo = (props) => {
  const { title, text } = props;
  return (
    <div className="discountInfo">
      <Subtitle size={SubtitleSize.OFFER} color={SubtitleColor.WHITE}>{title}</Subtitle>
      <BodyText size={BodyTextSize.OFFER} theme={BodyTextTheme.OFFER}>{text}</BodyText>
      <Button size={ButtonSize.LARGE} theme={ButtonTheme.CREAMY}>read more</Button>
    </div>
  );
};

export default DiscountInfo;

DiscountInfo.defaultProps = {
  title: 'title',
  text: 'text',
};

DiscountInfo.propTypes = {
  title: PropTypes.string,
  text: PropTypes.string,
};
