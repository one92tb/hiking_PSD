import React from 'react';
import PropTypes from 'prop-types';
import './style.css';

const Hamburger = (props) => {
  const { setChecked, isChecked } = props;

  return (
    <label
      htmlFor="toggle"
      className="hamburger"
      aria-hidden="true"
    >
      <input
        type="checkbox"
        id="toggle"
        className="input--hidden input--hamburger"
        onClick={() => setChecked(!isChecked)}
      />
      <div className="toggle" />
      <div className="toggle" />
      <div className="toggle" />
    </label>
  );
};

export default Hamburger;

Hamburger.defaultProps = {
  isChecked: false,
  setChecked: () => {},
};

Hamburger.propTypes = {
  isChecked: PropTypes.bool,
  setChecked: PropTypes.func,
};
