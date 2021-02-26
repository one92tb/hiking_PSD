import React from 'react';
import PropTypes from 'prop-types';
import './style.css';
import Discount from '../../organisms/Discount/index';

const OfferTemplate = (props) => {
  const { data } = props;
  const { edges } = data.allContentfulHikingOffer;

  return (
    <section>
      { edges.sort((first, second) => first.node.order - second.node.order)
        .map((edge) => <Discount edge={edge} key={edge.node.title} />)}
    </section>
  );
};

export default OfferTemplate;

OfferTemplate.propTypes = {
  data: PropTypes.shape({
    allContentfulHikingOffer: PropTypes.shape({
      edges: PropTypes.arrayOf(PropTypes.shape({
        node: PropTypes.shape({
          order: PropTypes.number,
          image: PropTypes.shape({
            title: PropTypes.string,
            file: PropTypes.shape({
              contentType: PropTypes.string,
              fileName: PropTypes.string,
              url: PropTypes.string,
            }),
          }),
          text: PropTypes.string,
          title: PropTypes.string,
        }),
      })),
    }),
  }),
};

OfferTemplate.defaultProps = {
  data: {
    allContentfulHikingOffer: {
      edges: [{
        node: {
          order: 1,
          image: {
            file: {
              contentType: 'contentType',
              fileName: 'fileName',
              url: '',
            },
            title: 'title',
          },
          text: 'text',
          title: 'title',
        },
      }],
    },
  },
};
