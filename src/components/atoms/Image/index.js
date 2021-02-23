import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import './style.css';

export const ImagePosition = {
  SHAPE_UP: 'img_position--shapeUp',
  SHAPE_DOWN: 'img_position--shapeDown',
  SNOW_ONE: 'img_position--snowFirst',
  SNOW_TWO: 'img_position--snowSecond',
};

export const ImageBoxSize = {
  LOGO: 'imgBox_size--logo',
  CARD: 'imgBox_size--card',
  OFFER: 'imgBox_size--offer',
  SNOW_FIRST: 'imgBox_size--snowFirst',
  SNOW_SECOND: 'imgBox_size--snowSecond',
};

const Image = (props) => {
  const {
    width,
    height,
    className,
    position,
    url,
    alt,
    size,
  } = props;

  const classProps = classnames(
    position,
    className,
  );

  return (
    <div className={size}>
      <img className={classProps} src={url} alt={alt} width={width} height={height} />
    </div>
  );
};

Image.defaultProps = {
  className: '',
  width: '91',
  height: '94',
  position: '',
  size: '',
  url: '',
  alt: '',
};

Image.propTypes = {
  className: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string,
  position: PropTypes.string,
  url: PropTypes.string,
  alt: PropTypes.string,
  size: PropTypes.string,
};

export default Image;
