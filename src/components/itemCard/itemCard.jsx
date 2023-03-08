import React from 'react';
import PropTypes from 'prop-types';
import './itemCard.scss';
import estrella from '../../icons/estrella.svg';
import CarritoIcon from '../../icons/carrito';

function ItemCard({
  showOverlay, showStars, addToCart, item,
}) {
  const starsCount = Math.floor(Math.random() * 5) + 1;
  const stars = [];

  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < starsCount; i++) {
    stars.push(<img src={estrella} alt="Estrella" key={i} />);
  }

  return (
    <div className="item-card" onClick={() => addToCart(item)}>
      <div className="item-card-image">
        {/* eslint-disable-next-line jsx-a11y/img-redundant-alt */}
        <img src={item.image} alt={`${item.name}-image`} />
      </div>
      {
        showStars && (
          <div className="item-card-stars">
            {stars}
          </div>
        )
      }

      {
        showOverlay && (
          <div className="item-card-overlay">
            <CarritoIcon color="#fff" className="cart-icon" />
          </div>
        )
      }

    </div>
  );
}

ItemCard.defaultProps = {
  showOverlay: true,
  showStars: true,
  addToCart: () => {},
};

ItemCard.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
  }).isRequired,
  showOverlay: PropTypes.bool,
  showStars: PropTypes.bool,
  addToCart: PropTypes.func,
};

export default ItemCard;
