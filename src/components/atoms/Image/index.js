import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import './style.css';
import logo from '../../../images/logo.png';

export const ImageSize = {
  LOGO: 'logo',
  CARD: 'card',
  OFFER: 'offer',
};

const Image = (props) => {
  const {
    imageBoxSize,
    className,
  } = props;

  const classProps = classnames(
    imageBoxSize,
    className,
  );

  return (
    <div className={classProps}>
      <img src={logo} alt="Logo" />
    </div>
  );
};

Image.defaultProps = {
  imageBoxSize: ImageSize.LOGO,
  className: '',
};

Image.propTypes = {
  imageBoxSize: PropTypes.string,
  className: PropTypes.string,
};

export default Image;
