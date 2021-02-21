import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import './style.css';

export const ImagePosition = {
  UP: 'position--up',
  DOWN: 'position--down',
};

const Image = (props) => {
  const {
    width,
    height,
    className,
    position,
    url,
    alt,
  } = props;

  const classProps = classnames(
    'image',
    position,
    className,
  );

  return (
    <img className={classProps} src={url} alt={alt} width={width} height={height} />
  );
};

Image.defaultProps = {
  className: '',
  width: '91',
  height: '94',
  position: '',
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
};

export default Image;
