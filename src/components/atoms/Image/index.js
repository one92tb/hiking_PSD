import React from 'react';
import PropTypes from 'prop-types';
import './style.css';

export const ImageBox = {
  LOGO: 'imgBox--logo',
  CARD: 'imgBox--card',
  OFFER: 'imgBox--offer',
  LEAF_FIRST: 'imgBox--leafFirst',
  LEAF_SECOND: 'imgBox--leafSecond',
};

export const ShapePosition = {
  SHAPE_UP: 'img--shapeUp',
  SHAPE_DOWN: 'img--shapeDown',
  SHAPE_FOUR: 'img--shapeFour',
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
