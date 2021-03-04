import React from 'react';
import PropTypes from 'prop-types';
import Opinion from '../../molecules/Opinion/index';
import './style.css';

const Opinions = (props) => {
  const { edges } = props;

  return (
    <div className="opinions">
      {
        edges.sort((first, second) => first.node.order - second.node.order)
          .map((edge) => <Opinion key={edge.node.order} edge={edge} />)
      }
    </div>
  );
};

export default Opinions;

Opinions.defaultProps = {
  edges: [{
    node: {
      order: 1,
      title: 'title',
      text: 'text',
    },
  }],
};

Opinions.propTypes = {
  edges: PropTypes.arrayOf(PropTypes.shape({
    node: PropTypes.shape({
      order: PropTypes.number,
      title: PropTypes.string,
      text: PropTypes.string,
    }),
  })),
};
