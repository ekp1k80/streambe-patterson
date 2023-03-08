import React from 'react';
import PropTypes from 'prop-types';
import './boldText.scss';

function BoldText({ children }) {
  return <p className="bold-text">{children}</p>;
}

BoldText.propTypes = {
  children: PropTypes.node.isRequired,
};

export default BoldText;
