import React from 'react';
import PropTypes from 'prop-types';
import Header from '../../components/header';
import ItemsPriceToPurchase from '../../components/itemsPriceToPurchase/itemsPriceToPurchase';
import ItemPriceDisplayComponent from '../../components/itemPriceDisplay/itemPriceDisplay';
import CartWrapper from '../../components/cartWrapper';
import TicketPurchase from '../../components/ticketPurchase/ticketPurchase';
import EmptyImage from '../../image/empty.png';
import DiscountCodeInput from '../../components/discountCodeInput/discountCodeInput';

function CartPage({
  cartItems,
  navigateToCart,
  navigateToShowCase,
  removeFromCart,
  totalPrice,
  setDiscountCode,
  discountCode,
}) {
  return (
    <div style={{
      width: '98vw', height: '100vh', display: 'flex', flexDirection: 'column', overflowX: 'hidden', paddingBottom: '4%',
    }}
    >
      <Header
        itemCount={cartItems.length}
        navigateToCart={navigateToCart}
        navigateToShowCase={navigateToShowCase}
      />
      {cartItems.length === 0 ? (
        <div style={{
          width: '100%', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column',
        }}
        >
          <h1 style={{ color: 'black' }}>Your Cart is Empty</h1>
          <img src={EmptyImage} alt="Wow So much empty" />
        </div>
      ) : (
        <div style={{ paddingTop: '2%' }}>
          <CartWrapper>
            <ItemsPriceToPurchase boxTitleText="Items to Purchase">
              {
                cartItems.map((item) => (
                  <ItemPriceDisplayComponent
                    item={item}
                    removeFromCart={removeFromCart}
                  />
                ))
              }
            </ItemsPriceToPurchase>
            <div style={{ display: 'flex', flexDirection: 'column', width: '26%' }}>
              <TicketPurchase
                items={cartItems}
                totalPrice={totalPrice}
                discountCode={discountCode}
              />
              <div style={{ width: '100%', paddingBottom: '2rem' }} />
              <DiscountCodeInput onChange={setDiscountCode} />
            </div>
          </CartWrapper>
        </div>
      )}

    </div>
  );
}

CartPage.propTypes = {
  cartItems: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
  })).isRequired,
  totalPrice: PropTypes.string.isRequired,
  discountCode: PropTypes.string.isRequired,
  navigateToCart: PropTypes.func.isRequired,
  navigateToShowCase: PropTypes.func.isRequired,
  removeFromCart: PropTypes.func.isRequired,
  setDiscountCode: PropTypes.func.isRequired,
};

export default CartPage;
