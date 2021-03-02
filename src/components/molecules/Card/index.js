import React from 'react';
import PropTypes from 'prop-types';
import Subtitle, { SubtitleColor, SubtitleSize } from '../../atoms/Subtitle/index';
import BodyText, { BodyTextSize, BodyTextTheme } from '../../atoms/BodyText/index';
import Image, { ImageBox } from '../../atoms/Image/index';
import './style.css';

const Card = (props) => {
  const { data } = props;
  const { image, text, title } = data.node;

  return (
    <div className="card">
      <Image width="100%" height="100%" url={image.file.url} alt="lorem img" size={ImageBox.CARD} />
      <Subtitle size={SubtitleSize.CARD} color={SubtitleColor.WHITE}>{title}</Subtitle>
      <BodyText size={BodyTextSize.CARD} theme={BodyTextTheme.CARD}>
        {text}
      </BodyText>
    </div>
  );
};

export default Card;

Card.propTypes = {
  data: PropTypes.shape({
    node: PropTypes.shape({
      order: PropTypes.number,
      image: PropTypes.shape({
        file: PropTypes.shape({
          contentType: PropTypes.string,
          fileName: PropTypes.string,
          url: PropTypes.string,
        }),
        id: PropTypes.string,
        title: PropTypes.string,
      }),
      text: PropTypes.string,
      title: PropTypes.string,
    }),
  }),
};

Card.defaultProps = {
  data: {
    node: {
      order: 1,
      image: {
        file: {
          contentType: 'image/png',
          fileName: 'fileName',
          url: '',
        },
        id: '',
        title: 'title',
      },
      text: 'text',
      title: 'title',
    },
  },
};
