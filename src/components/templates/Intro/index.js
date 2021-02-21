import React from 'react';
import PropTypes from 'prop-types';
import Header from '../../organisms/Header/index';
import Jumbotron from '../../organisms/Jumbotron/index';
import Image, { ImagePosition } from '../../atoms/Image/index';
import './style.css';
import Shape1 from '../../../images/shape_1.png';
import Shape2 from '../../../images/shape_2.png';

const IntroTemplate = (props) => {
  const { bodyText } = props;
  return (
    <section className="wrapper">
      <Image width="100%" height="196" position={ImagePosition.UP} url={Shape1} />
      <Header />
      <Jumbotron text={bodyText} />
      <Image width="100%" height="147" position={ImagePosition.DOWN} url={Shape2} />
    </section>
  );
};

IntroTemplate.defaultProps = {
  bodyText: 'lorem ipsum dolor',
};

IntroTemplate.propTypes = {
  bodyText: PropTypes.string,
};

export default IntroTemplate;
