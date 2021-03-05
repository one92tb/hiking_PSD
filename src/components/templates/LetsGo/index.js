import React from 'react';
import PropTypes from 'prop-types';
import './style.css';
import Subtitle, { SubtitleColor, SubtitleSize } from '../../atoms/Subtitle/index';
import BodyText, { BodyTextSize, BodyTextColor } from '../../atoms/BodyText/index';
import Cards from '../../organisms/Cards/index';
import Button, { ButtonSize, ButtonTheme, ButtonPosition } from '../../atoms/Button/index';
import Image, { ImageBox } from '../../atoms/Image/index';
import shadowFirst from '../../../images/shadow_1.png';

const LetsGoTemplate = (props) => {
  const { data } = props;
  const { title, bodyText } = data.allContentfulHikingLetsgoText.edges[0].node;
  const { edges } = data.allContentfulHikingLetsgo;

  return (
    <section className="wrapper--letsGo">
      <Subtitle size={SubtitleSize.LETSGO} color={SubtitleColor.CREAMY_2}>
        {title}
      </Subtitle>
      <BodyText size={BodyTextSize.LETSGO} color={BodyTextColor.GREY_2}>{bodyText}</BodyText>
      <Cards edges={edges} />
      <Button
        size={ButtonSize.LARGE}
        theme={ButtonTheme.GREY}
        position={ButtonPosition.LETSGO}
      >
        show more
      </Button>
      <Image
        size={ImageBox.SHADOW_FIRST}
        alt="shadowFirst"
        url={shadowFirst}
        width="876"
        height="512"
      />
    </section>
  );
};

LetsGoTemplate.defualtProps = {
  data: {
    allContentfulHikingLetsgo: {
      edges: [{
        node: {
          order: 1,
          image: {
            file: {
              contentType: 'contentType',
              fileName: 'fileName',
              url: '',
            },
            id: '',
            title: 'title',
          },
          text: 'text',
          title: 'title',
        },
      }],
    },
    allContentfulHikingLetsgoText: {
      edges: [
        {
          node: {
            bodyText: 'bodyText',
            title: 'title',
          },
        },
      ],
    },
  },
};

LetsGoTemplate.propTypes = {
  data: PropTypes.shape({
    allContentfulHikingLetsgo: PropTypes.shape({
      edges: PropTypes.arrayOf(PropTypes.shape({
        node: PropTypes.shape({
          order: PropTypes.number,
          image: PropTypes.shape({
            file: PropTypes.shape({
              contentType: PropTypes.string,
              fileName: PropTypes.string,
              url: PropTypes.string,
            }),
            id: PropTypes.string,
            title: PropTypes.string,
          }),
          text: PropTypes.string,
          title: PropTypes.string,
        }),
      })),
    }),
    allContentfulHikingLetsgoText: PropTypes.shape({
      edges: PropTypes.arrayOf(PropTypes.shape({
        node: PropTypes.shape({
          bodyText: PropTypes.string,
          title: PropTypes.string,
        }),
      })),
    }),
  }).isRequired,
};

export default LetsGoTemplate;
