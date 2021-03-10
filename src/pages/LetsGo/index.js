import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import LetsGoTemplate from '../../components/templates/LetsGo/index';

const LetsGo = React.forwardRef((props, ref) => (
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
              order
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
      <LetsGoTemplate data={data} ref={ref} />
    )}
  />
));

export default LetsGo;
