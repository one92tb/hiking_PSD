import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import OfferTemplate from '../../components/templates/Offer/index';

const Offer = React.forwardRef((props, ref) => (
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
    render={(data) => <OfferTemplate data={data} ref={ref} />}
  />
));

export default Offer;
