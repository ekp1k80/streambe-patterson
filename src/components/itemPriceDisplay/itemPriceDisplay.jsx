import React from 'react';
import PropTypes from 'prop-types';
import './itemPriceDisplay.scss';
import ItemCard from '../itemCard';
import BoldText from '../boldText';
import NormalText from '../normalText';
import TrashSVG from '../../icons/trash';

function ItemPriceDisplay({ item, removeFromCart }) {
  return (
    <div className="item-price-display">
      <ItemCard item={item} showOverlay={false} showStars={false} />
      <NormalText>{item.name}</NormalText>
      <BoldText>{`$${item.price}`}</BoldText>
      <button type="button" className="delete-button" onClick={() => removeFromCart(item)}>
        <TrashSVG width={15} height={20} fill="#cecece" />
      </button>
    </div>
  );
}

ItemPriceDisplay.propTypes = {
  item: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
  })).isRequired,
  removeFromCart: PropTypes.func.isRequired,
};

export default ItemPriceDisplay;
