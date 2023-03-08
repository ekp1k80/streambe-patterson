import React from 'react';
import PropTypes from 'prop-types';
import Header from '../../components/header';
import ShowCaseHead from '../../components/showCaseHead';
import ItemCardSlider from '../../components/infiniteSlider/infiniteSlider';

function ShowCase(props) {
  const {
    items, cartItems, addToCart, navigateToCart, navigateToShowCase,
  } = props;

  return (
    <div style={{
      width: '100vw', height: '100vh', display: 'flex', flexDirection: 'column',
    }}
    >
      <Header
        itemCount={cartItems.length}
        navigateToCart={navigateToCart}
        navigateToShowCase={navigateToShowCase}
      />
      <div style={{ width: '100vw', height: '-webkit-fill-available', background: '#ececec' }}>
        <div style={{ width: '100%', paddingTop: '2%' }}>
          <ShowCaseHead />
        </div>
        <div style={{ width: '95%', paddingTop: '2%' }}>
          <ItemCardSlider
            items={items}
            cartItems={cartItems}
            addToCart={addToCart}
          />
        </div>
      </div>
    </div>
  );
}

ShowCase.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
  })).isRequired,
  cartItems: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
  })).isRequired,
  addToCart: PropTypes.func.isRequired,
  navigateToCart: PropTypes.func.isRequired,
  navigateToShowCase: PropTypes.func.isRequired,
};

export default ShowCase;
