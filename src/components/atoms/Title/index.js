import React from 'react';
import PropTypes from 'prop-types';
import './style.css';

const Title = (props) => {
  const { children } = props;

  return <h1 className="title">{children}</h1>;
};

Title.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Title;
