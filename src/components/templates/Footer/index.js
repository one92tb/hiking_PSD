import React from 'react';
import PropTypes from 'prop-types';
import SocialMedia from '../../organisms/SocialMedia/index';
import FooterNavigation from '../../organisms/FooterNavigation/index';
import './style.css';

const FooterTemplate = (props) => {
  const { data } = props;
  const { title, text } = data.allContentfulHikingFooter.edges[0].node;

  return (
    <footer className="wrapper--footer">
      <div className="inner--footer">
        <SocialMedia title={title} text={text} />
        <FooterNavigation />
      </div>
    </footer>
  );
};

export default FooterTemplate;

FooterTemplate.defaultProps = {
  data: {
    allContentfulHikingFooter: {
      edges: [{
        node: {
          title: 'title',
          text: 'text',
        },
      }],
    },
  },
};

FooterTemplate.propTypes = {
  data: PropTypes.shape({
    allContentfulHikingFooter: PropTypes.shape({
      edges: PropTypes.arrayOf(PropTypes.shape({
        node: PropTypes.shape({
          title: PropTypes.string,
          text: PropTypes.string,
        }),
      })),
    }),
  }),
};
