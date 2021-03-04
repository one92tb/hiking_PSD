import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import QuotationTemplate from '../../components/templates/Quotation/index';

const Quotation = () => (
  <StaticQuery
    query={graphql`
      {
        allContentfulHikingQuotation {
          edges {
            node {
              quotation
              author
            }
          }
        }
        allContentfulHikingLoremIpsum {
          edges {
            node {
              text
              title
              order
            }
          }
        }
      }
    `}
    render={(data) => <QuotationTemplate data={data} />}
  />
);

export default Quotation;
