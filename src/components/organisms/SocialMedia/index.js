import React from 'react';
import PropTypes from 'prop-types';
import Subtitle, { SubtitleColor, SubtitleSize } from '../../atoms/Subtitle/index';
import BodyText, { BodyTextColor, BodyTextSize } from '../../atoms/BodyText/index';
import SocialIcons from '../../molecules/SocialIcons/index';
import './style.css';

const SocialMedia = (props) => {
  const { title, text } = props;

  return (
    <div className="socialMedia">
      <Subtitle size={SubtitleSize.FOOTER} color={SubtitleColor.WHITE}>{title}</Subtitle>
      <BodyText size={BodyTextSize.FOOTER} color={BodyTextColor.WHITE}>{text}</BodyText>
      <SocialIcons />
    </div>
  );
};

export default SocialMedia;

SocialMedia.defaultProps = {
  title: 'title',
  text: 'text',
};

SocialMedia.propTypes = {
  title: PropTypes.string,
  text: PropTypes.string,
};
