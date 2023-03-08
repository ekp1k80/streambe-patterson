import React from 'react';
import PropTypes from 'prop-types';
import './bolderTitle.scss';

function BolderTitle({ children }) {
  return <p className="bolder-title">{children}</p>;
}

BolderTitle.propTypes = {
  children: PropTypes.node.isRequired,
};

export default BolderTitle;
