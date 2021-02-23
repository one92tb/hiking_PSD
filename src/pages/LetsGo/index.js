import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import LetsGoTemplate from '../../components/templates/LetsGo/index';

const LetsGo = () => (
  <StaticQuery
    query={graphql`
      {
        allContentfulHikingLetsgoText {
          edges {
            node {
              bodyText
              title
            }
          }
        }
        allContentfulHikingLetsgo {
          edges {
            node {
              id
              title
              text
              image {
                id
                title
                file {
                  url
                  fileName
                  contentType
                }
              }
            }
          }
        }
      }
    `}
    render={(data) => (
      <LetsGoTemplate data={data} />
    )}
  />
);

export default LetsGo;
