import React from 'react';
import PropTypes from 'prop-types';
import CartButton from '../cartButton';
import './header.scss';
import Logo from '../../icons/patterson-agency-logo.png';

function Header(props) {
  const { itemCount, navigateToCart, navigateToShowCase } = props;

  return (
    <header className="header">
      <div className="logo" onClick={navigateToShowCase}>
        <img src={Logo} alt="Patterson Agency Logo" />
      </div>
      <CartButton onClick={navigateToCart} itemCount={itemCount} />
    </header>
  );
}

Header.propTypes = {
  itemCount: PropTypes.number.isRequired,
  navigateToCart: PropTypes.func.isRequired,
  navigateToShowCase: PropTypes.func.isRequired,
};

export default Header;
