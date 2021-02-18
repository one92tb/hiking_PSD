import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import IntroTemplate from '../../components/templates/Intro/index';

const Intro = () => (
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
        <IntroTemplate bodyText={text} />
      );
    }}
  />
);

export default Intro;
