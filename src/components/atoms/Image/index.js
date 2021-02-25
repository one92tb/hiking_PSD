import React from 'react';
import PropTypes from 'prop-types';
import './style.css';

export const ImageBox = {
  LOGO: 'imgBox-logo',
  CARD: 'imgBox--card',
  OFFER: 'imgBox--offer',
  SNOW_FIRST: 'imgBox--snowFirst',
  SNOW_SECOND: 'imgBox--snowSecond',
};

export const shapePosition = {
  SHAPE_UP: 'imgBox--shapeUp',
  SHAPE_DOWN: 'imgBox--shapeDown',
};

const Image = (props) => {
  const {
    width,
    height,
    url,
    alt,
    size,
    position,
  } = props;

  return (
    <div className={size}>
      <img src={url} alt={alt} width={width} height={height} className={position} />
    </div>
  );
};

Image.defaultProps = {
  width: '91',
  height: '94',
  size: '',
  url: '',
  alt: '',
  position: '',
};

Image.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string,
  url: PropTypes.string,
  alt: PropTypes.string,
  size: PropTypes.string,
  position: PropTypes.string,
};

export default Image;
