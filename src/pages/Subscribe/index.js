import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import SubscribeTemplate from '../../components/templates/Subscribe/index';

const Subscribe = React.forwardRef((props, ref) => (
  <StaticQuery
    query={graphql`
      {
        allContentfulHikingSubscribe {
          edges {
            node {
              title
              text
            }
          }
        }
      }
    `}
    render={(data) => <SubscribeTemplate data={data} ref={ref} />}
  />
));

export default Subscribe;
