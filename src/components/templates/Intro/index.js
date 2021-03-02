import React from 'react';
import PropTypes from 'prop-types';
import Header from '../../organisms/Header/index';
import Jumbotron from '../../organisms/Jumbotron/index';
import Image, { ShapePosition } from '../../atoms/Image/index';
import Shape1 from '../../../images/shape_1.png';
import Shape2 from '../../../images/shape_2.png';
import './style.css';

const IntroTemplate = (props) => {
  const { bodyText } = props;
  return (
    <section className="wrapper--intro">
      <div className="inner">
        <Image width="100%" height="196" position={ShapePosition.SHAPE_UP} url={Shape1} />
        <Header />
        <Jumbotron text={bodyText} />
        <Image width="100%" height="147" position={ShapePosition.SHAPE_DOWN} url={Shape2} />
      </div>
    </section>
  );
};

IntroTemplate.defaultProps = {
  bodyText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
};

IntroTemplate.propTypes = {
  bodyText: PropTypes.string,
};

export default IntroTemplate;
