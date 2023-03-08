import React from 'react';
import PropTypes from 'prop-types';
import './itemsPriceToPurchase.scss';
import BolderTitle from '../bolderTitle/bolderTitle';

function ItemsPriceToPurchase({ boxTitleText, children }) {
  return (
    <div className="items-price-to-purchase-container">
      <div className="box-title">
        <BolderTitle>{boxTitleText}</BolderTitle>
      </div>
      <div className="box-items">{children}</div>
    </div>
  );
}

ItemsPriceToPurchase.propTypes = {
  boxTitleText: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default ItemsPriceToPurchase;
