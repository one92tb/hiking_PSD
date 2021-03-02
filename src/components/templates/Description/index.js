import React from 'react';
import PropTypes from 'prop-types';
import './style.css';
import Subtitle, { SubtitleColor, SubtitleSize } from '../../atoms/Subtitle/index';
import BodyText, { BodyTextSize, BodyTextTheme } from '../../atoms/BodyText/index';
import Image, { ShapePosition } from '../../atoms/Image/index';
import Shape3 from '../../../images/shape_3.png';
import Shape4 from '../../../images/shape_4.png';

const DescriptionTemplate = (props) => {
  const { data } = props;
  const { title, text } = data.allContentfulHikingDescription.edges[0].node;
  return (
    <section className="wrapper--description">
      <Image width="100%" height="210" position={ShapePosition.SHAPE_UP} url={Shape3} />
      <Subtitle size={SubtitleSize.DESCRIPTION} color={SubtitleColor.WHITE}>{title}</Subtitle>
      <BodyText size={BodyTextSize.DESCRIPTION} theme={BodyTextTheme.DESCRIPTION}>{text}</BodyText>
      <Image width="100%" height="315" position={ShapePosition.SHAPE_FOUR} url={Shape4} />
    </section>
  );
};

export default DescriptionTemplate;

DescriptionTemplate.defaultProps = {
  data: {
    allContentfulHikingDescription: {
      edges: [{
        node: {
          title: 'title',
          text: 'text',
        },
      }],
    },
  },
};

DescriptionTemplate.propTypes = {
  data: PropTypes.shape({
    allContentfulHikingDescription: PropTypes.shape({
      edges: PropTypes.arrayOf(PropTypes.shape({
        node: PropTypes.shape({
          title: PropTypes.string,
          text: PropTypes.string,
        }),
      })),
    }),
  }),
};
