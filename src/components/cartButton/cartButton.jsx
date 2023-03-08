import React from 'react';
import PropTypes from 'prop-types';
import Cart from '../cart';
import './cartButton.scss';

function CartButton({ itemCount, onClick }) {
  return (
    <button onClick={onClick} type="button" className="cart-button">
      <Cart itemCount={itemCount} />
      <span className="cart-button-text">Ver Carrito</span>
    </button>
  );
}

CartButton.defaultProps = {
  onClick: () => {},
};

CartButton.propTypes = {
  itemCount: PropTypes.number.isRequired,
  onClick: PropTypes.func,
};

export default CartButton;
