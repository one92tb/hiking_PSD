import React from 'react';
import PropTypes from 'prop-types';
import './style.css';
import Card from '../../molecules/Card/index';

const Cards = (props) => {
  const { edges } = props;
  return (
    <div className="cards">
      {edges.map((edge) => <Card data={edge} />)}
    </div>
  );
};

export default Cards;

Cards.propTypes = {
  edges: PropTypes.arrayOf(PropTypes.shape({
    node: PropTypes.shape({
      id: PropTypes.string,
      image: PropTypes.shape({
        file: PropTypes.shape({
          contentType: PropTypes.string,
          fileName: PropTypes.string,
          url: PropTypes.string,
        }),
        id: PropTypes.string,
        title: PropTypes.string,
      }),
      text: PropTypes.string,
      title: PropTypes.string,
    }),
  })),
};

Cards.defaultProps = {
  edges: [{
    node: {
      id: '',
      image: {
        file: {
          contentType: 'image/png',
          fileName: 'fileName',
          url: '',
        },
        id: '',
        title: 'title',
      },
      text: 'text',
      title: 'title',
    },
  }],
};
