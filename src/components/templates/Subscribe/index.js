import React from 'react';
import PropTypes from 'prop-types';
import Subtitle, { SubtitleColor, SubtitleSize } from '../../atoms/Subtitle/index';
import BodyText, { BodyTextSize, BodyTextColor } from '../../atoms/BodyText';
import SubscribeForm from '../../molecules/SubscribeForm/index';
import Image, { ShapePosition } from '../../atoms/Image/index';
import Shape6 from '../../../images/shape_6.png';
import Shape7 from '../../../images/shape_7.png';
import './style.css';

const SubscribeTemplate = React.forwardRef((props, ref) => {
  const { data } = props;
  const { title, text } = data.allContentfulHikingSubscribe.edges[0].node;

  return (
    <section className="wrapper--subscribe" ref={ref}>
      <div className="inner-subscribe">
        <Subtitle size={SubtitleSize.SUBSCRIBE} color={SubtitleColor.WHITE}>{title}</Subtitle>
        <BodyText size={BodyTextSize.SUBSCRIBE} color={BodyTextColor.DARK_1}>{text}</BodyText>
        <SubscribeForm />
      </div>
      <Image
        width="100%"
        height="110"
        position={ShapePosition.SHAPE_SIX}
        url={Shape6}
        alt="shape"
      />
      <Image
        width="100%"
        height="187"
        position={ShapePosition.SHAPE_SEVEN}
        url={Shape7}
        alt="shape"
      />
    </section>
  );
});

export default SubscribeTemplate;

SubscribeTemplate.defaultProps = {
  data: {
    allContentfulHikingSubscribe: {
      edges: [{
        node: {
          title: 'title',
          text: 'text',
        },
      }],
    },
  },
};

SubscribeTemplate.propTypes = {
  data: PropTypes.shape({
    allContentfulHikingSubscribe: PropTypes.shape({
      edges: PropTypes.arrayOf(PropTypes.shape({
        node: PropTypes.shape({
          title: PropTypes.string,
          text: PropTypes.string,
        }),
      })),
    }),
  }),
};
