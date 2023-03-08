import React from 'react';
import PropTypes from 'prop-types';
import './normalText.scss';

function NormalText({ children }) {
  return <p className="normal-text">{children}</p>;
}

NormalText.propTypes = {
  children: PropTypes.node.isRequired,
};

export default NormalText;
