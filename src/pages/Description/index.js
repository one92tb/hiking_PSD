import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import DescriptionTemplate from '../../components/templates/Description/index';

const Description = React.forwardRef((props, ref) => (
  <StaticQuery
    query={graphql`
      {
        allContentfulHikingDescription {
          edges {
            node {
              title
              text
            }
          }
        }
      }
    `}
    render={(data) => <DescriptionTemplate data={data} ref={ref} />}
  />
));

export default Description;
