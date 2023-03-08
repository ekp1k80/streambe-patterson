import React from 'react';
import PropTypes from 'prop-types';
import './cartWrapper.scss';

function CartWrapper({ children }) {
  return <div className="cart-purchase-container">{children}</div>;
}

CartWrapper.propTypes = {
  children: PropTypes.node.isRequired,
};

export default CartWrapper;
