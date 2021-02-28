import React from 'react';
import './style.css';

const Hamburger = () => (
  <label
    htmlFor="toggle"
    className="hamburger"
    aria-hidden="true"
  >
    <input type="checkbox" id="toggle" className="input--hidden input--hamburger" />
    <div className="toggle" />
    <div className="toggle" />
    <div className="toggle" />
  </label>
);

export default Hamburger;
