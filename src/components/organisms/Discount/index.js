import React from 'react';
import PropTypes from 'prop-types';
import './style.css';
import Image, { ImageBox } from '../../atoms/Image/index';
import DiscountInfo from '../../molecules/DiscountInfo/index';

const Discount = (props) => {
  const { edge } = props;
  const { image, text, title } = edge.node;

  return (
    <div className="wrapper--discount">
      <div className="inner--discount">
        <DiscountInfo title={title} text={text} />
        <Image
          url={image.file.url}
          alt={image.title}
          width="717"
          height="780"
          size={ImageBox.OFFER}
        />
      </div>
    </div>
  );
};

export default Discount;

Discount.propTypes = {
  edge: PropTypes.shape({
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
  }),
};

Discount.defaultProps = {
  edge: {
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
  },
};
