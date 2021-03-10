import React from 'react';
import PropTypes from 'prop-types';
import { StaticQuery, graphql } from 'gatsby';
import IntroTemplate from '../../components/templates/Intro/index';
import LetsGo from '../../components/templates/LetsGo';
import Offer from '../../components/templates/Offer/index';
import Description from '../../components/templates/Description/index';
import Subscribe from '../../components/templates/Subscribe/index';

const Intro = (props) => {
  const { refs } = props;

  return (
    <StaticQuery
      query={graphql`
      {
        allContentfulHikingIntro {
          edges {
            node {
              text
            }
          }
        }
      }
    `}
      render={(data) => {
        const { text } = data.allContentfulHikingIntro.edges[0].node;
        return (
          <IntroTemplate bodyText={text} refs={refs} />
        );
      }}
    />
  );
};

export default Intro;

Intro.propTypes = {
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

Intro.defaultProps = {
  refs: {
    home: { current: LetsGo },
    menu: { current: Offer },
    'our story': { current: Description },
    'contact us': { current: Subscribe },
  },
};
