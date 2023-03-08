import React from 'react';
import PropTypes from 'prop-types';
import './callToActionButton.scss';

function CallToActionButton({ children, ...props }) {
  return (
    <button type="button" className="call-to-action-button" {...props}>
      <p className="call-to-action-text">{children}</p>
    </button>
  );
}

CallToActionButton.propTypes = {
  children: PropTypes.node.isRequired,
};

export default CallToActionButton;
