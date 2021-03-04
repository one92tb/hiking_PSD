import React from 'react';
import './style.css';
import Subtitle, { SubtitleColor, SubtitleShadow, SubtitleSize } from '../../components/atoms/Subtitle/index';
import Image, { ShapePosition } from '../../components/atoms/Image/index';
import Shape5 from '../../images/shape_5.png';

const Explore = () => (
  <section className="wrapper--explore">
    <div className="inner--explore">
      <Subtitle
        size={SubtitleSize.EXPLORE}
        color={SubtitleColor.CREAMY_1}
        shadow={SubtitleShadow.SHADOW}
      >
        explore
      </Subtitle>
      <Subtitle
        size={SubtitleSize.EXPLORE}
        color={SubtitleColor.DARK_1}
        shadow={SubtitleShadow.SHADOW}
      >
        the world
      </Subtitle>
      <Image
        width="100%"
        height="203"
        position={ShapePosition.SHAPE_FIVE}
        url={Shape5}
        alt="shape"
      />
    </div>
  </section>
);

export default Explore;
