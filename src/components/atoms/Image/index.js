import React from 'react';
import PropTypes from 'prop-types';
import './style.css';

export const ImageBox = {
  LOGO: 'imgBox--logo',
  CARD: 'imgBox--card',
  OFFER: 'imgBox--offer',
  SHODOW_FIRST: 'imgBox--shadow_1',
  SHADOW_SECOND: 'imgBox--shadow_2',
  SHADOW_THIRD: 'imgBox--shadow_3',
};

export const ShapePosition = {
  SHAPE_ONE: 'img--shapeOne',
  SHAPE_TWO: 'img--shapeTwo',
  SHAPE_THREE: 'img--shapeThree',
  SHAPE_FOUR: 'img--shapeFour',
  SHAPE_FIVE: 'img--shapeFive',
  SHAPE_SIX: 'img--shapeSix',
  SHAPE_SEVEN: 'img--shapeSeven',
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
