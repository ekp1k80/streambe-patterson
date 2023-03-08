import React from 'react';
import PropTypes from 'prop-types';
import './cart.scss';
import CarritoIcon from '../../icons/carrito';

function Cart({ itemCount }) {
  return (
    <div className="cart-wrapper">
      <CarritoIcon className="cart-icon" />
      {itemCount > 0 && (
        <div className="cart-count">{itemCount}</div>
      )}
    </div>
  );
}

Cart.propTypes = {
  itemCount: PropTypes.number.isRequired,
};

export default Cart;
