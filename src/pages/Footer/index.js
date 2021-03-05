import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import FooterTemplate from '../../components/templates/Footer/index';

const Footer = () => {
  const data = useStaticQuery(graphql`
    {
      allContentfulHikingFooter {
        edges {
          node {
            title
            text
          }
        }
      }
    }
  `);
  return <FooterTemplate data={data} />;
};

export default Footer;
