import React from 'react';
import PropTypes from 'prop-types';
import './ticketPurchase.scss';
import NormalText from '../normalText';
import BoldText from '../boldText';
import CallToActionButton from '../callToActionButton/callToActionButton';

function TicketPurchase({ items, totalPrice, discountCode }) {
  const discountText = discountCode === 'DTO10' ? '10%' : discountCode === 'DTO50' ? '50%' : '';
  const discountMultiplier = discountCode === 'DTO10' ? 0.9 : discountCode === 'DTO50' ? 0.5 : 1;

  return (
    <div className="ticket-purchase-container">
      <div className="items-layout">
        {items.map(({ name, price }) => (
          <div key={name} className="item-container">
            <NormalText>{name}</NormalText>
            <BoldText>{`$${price}`}</BoldText>
          </div>
        ))}
        {
          (discountCode === 'DTO10' || discountCode === 'DTO50') && (
            <div className="item-container">
              <NormalText>{'Discount: '}</NormalText>
              <BoldText>{discountText}</BoldText>
            </div>
          )
        }
        <div className="item-container">
          <NormalText>{'Total: '}</NormalText>
          <BoldText>{`$${(totalPrice * discountMultiplier).toFixed(2)}`}</BoldText>
        </div>
      </div>
      <div className="purchase-button">
        <CallToActionButton>Purchase</CallToActionButton>
      </div>
    </div>
  );
}

TicketPurchase.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    image: PropTypes.string,
  })).isRequired,
  totalPrice: PropTypes.string.isRequired,
  discountCode: PropTypes.string.isRequired,
};

export default TicketPurchase;
