import React from 'react';
import PropTypes from 'prop-types';
import Opinions from '../../organisms/Opinions/index';
import Quote from '../../organisms/Quote/index';
import './style.css';
import Shadow3 from '../../../images/shadow_3.png';
import Image, { ImageBox } from '../../atoms/Image';

const QuotationTemplate = (props) => {
  const { data } = props;
  const { edges } = data.allContentfulHikingLoremIpsum;
  const { author, quotation } = data.allContentfulHikingQuotation.edges[0].node;
  return (
    <section className="wrapper--quotation">
      <div className="inner--quotation">
        <Opinions edges={edges} />
        <Quote author={author} quotation={quotation} />
      </div>
      <Image
        width="812"
        height="579"
        position={ImageBox.SHADOW_THIRD}
        url={Shadow3}
        alt="shadow"
      />
    </section>
  );
};

export default QuotationTemplate;

QuotationTemplate.defaultProps = {
  data: {
    allContentfulHikingQuotation: {
      edges: [{
        node: {
          quotation: 'quotation',
          author: 'author',
        },
      }],
    },
    allContentfulHikingLoremIpsum: {
      edges: [{
        node: {
          order: 1,
          title: 'title',
          text: 'text',
        },
      }],
    },
  },
};

QuotationTemplate.propTypes = {
  data: PropTypes.shape({
    allContentfulHikingQuotation: PropTypes.shape({
      edges: PropTypes.arrayOf(PropTypes.shape({
        node: PropTypes.shape({
          quotation: PropTypes.string,
          author: PropTypes.string,
        }),
      })),
    }),
    allContentfulHikingLoremIpsum: PropTypes.shape({
      edges: PropTypes.arrayOf(PropTypes.shape({
        node: PropTypes.shape({
          order: PropTypes.number,
          title: PropTypes.string,
          text: PropTypes.string,
        }),
      })),
    }),
  }),
};
