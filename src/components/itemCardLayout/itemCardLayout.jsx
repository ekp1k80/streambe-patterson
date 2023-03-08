import React from 'react';
import PropTypes from 'prop-types';
import './itemCardLayout.scss';
import ItemCard from '../itemCard';
import NormalText from '../normalText';
import BoldText from '../boldText';

function ItemCardLayout({
  item, addToCart,
}) {
  return (
    <div className="item-card-layout">
      <ItemCard item={item} addToCart={addToCart} />
      <NormalText>{item.name}</NormalText>
      <BoldText>{`$${item.price}`}</BoldText>
    </div>
  );
}

ItemCardLayout.defaultProps = {
  addToCart: () => {},
};

ItemCardLayout.propTypes = {
  addToCart: PropTypes.func,
  item: PropTypes.shape({
    id: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
  }).isRequired,
};

export default ItemCardLayout;
