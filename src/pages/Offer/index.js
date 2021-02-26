import React from 'react';
import { StaticQuery, graphql } from 'gatsby';

const Offer = () => (
  <StaticQuery
    query={graphql`
        {
          allContentfulHikingOffer {
            edges {
              node {
                order
                title
                text
                image {
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
    render={(data) => <pre>{JSON.stringify(data, null, 4)}</pre>}
  />
);

export default Offer;
