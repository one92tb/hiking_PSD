import React from 'react';
import PropTypes from 'prop-types';
import Header from '../../organisms/Header/index';
import Jumbotron from '../../organisms/Jumbotron/index';
import Image, { ShapePosition } from '../../atoms/Image/index';
import Shape1 from '../../../images/shape_1.png';
import Shape2 from '../../../images/shape_2.png';
import LetsGo from '../LetsGo/index';
import Offer from '../Offer/index';
import Description from '../Description/index';
import Subscribe from '../Subscribe/index';
import './style.css';

const IntroTemplate = (props) => {
  const { bodyText, refs } = props;

  return (
    <section className="wrapper--intro">
      <div className="inner">
        <Image width="100%" height="196" position={ShapePosition.SHAPE_ONE} url={Shape1} />
        <Header refs={refs} />
        <Jumbotron text={bodyText} />
        <Image width="100%" height="147" position={ShapePosition.SHAPE_TWO} url={Shape2} />
      </div>
    </section>
  );
};

IntroTemplate.propTypes = {
  bodyText: PropTypes.string,
  refs: PropTypes.shape({
    home: PropTypes.oneOfType([
      PropTypes.func,
      PropTypes.shape({ current: PropTypes.instanceOf(LetsGo) }),
    ]),
    menu: PropTypes.oneOfType([
      PropTypes.func,
      PropTypes.shape({ current: PropTypes.instanceOf(Offer) }),
    ]),
    'our story': PropTypes.oneOfType([
      PropTypes.func,
      PropTypes.shape({ current: PropTypes.instanceOf(Description) }),
    ]),
    'contact us': PropTypes.oneOfType([
      PropTypes.func,
      PropTypes.shape({ current: PropTypes.instanceOf(Subscribe) }),
    ]),
  }),
};

IntroTemplate.defaultProps = {
  bodyText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  refs: {
    home: { current: LetsGo },
    menu: { current: Offer },
    'our story': { current: Description },
    'contact us': { current: Subscribe },
  },
};

export default IntroTemplate;
