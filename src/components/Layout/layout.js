import React from 'react';
import PropTypes from 'prop-types';
import './style.css';

export default function Layout({ children }) {
  return (
    <div style={{ margin: '0', overflowX: 'hidden' }}>
      {children}
    </div>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};
