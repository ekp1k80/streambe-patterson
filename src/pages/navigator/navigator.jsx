import React, { useState, useEffect, useCallback } from 'react';
import ShowCase from '../showCase/showCase';
import CartPage from '../cartPage/cartPage';
import getProducts from '../../utils/getItems';

const Navigator = () => {
  const [showCart, setShowCart] = useState(false);
  const [items, setItems] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [discountCode, setDiscountCode] = useState('');

  useEffect(() => {
    async function fetchItems() {
      const data = await getProducts();
      setItems(data);
    }
    fetchItems();
  }, []);

  const addToCart = useCallback((item) => {
    if (!cartItems.some((i) => i.id === item.id)) {
      setCartItems([...cartItems, item]);
      setTotalPrice(totalPrice + item.price);
    }
  }, [cartItems, totalPrice]);

  const removeFromCart = (item) => {
    setCartItems(cartItems.filter((cartItem) => cartItem.id !== item.id));
    setTotalPrice(totalPrice - item.price);
  };

  const navigateToCart = () => {
    setShowCart(true);
  };

  const navigateToShowCase = () => {
    setShowCart(false);
  };

  if (showCart) {
    return (
      <CartPage
        cartItems={cartItems}
        totalPrice={totalPrice}
        removeFromCart={removeFromCart}
        navigateToShowCase={navigateToShowCase}
        navigateToCart={navigateToCart}
        setDiscountCode={setDiscountCode}
        discountCode={discountCode}
      />
    );
  }
  return (
    <ShowCase
      cartItems={cartItems}
      items={[...items, ...items]}
      addToCart={addToCart}
      navigateToShowCase={navigateToShowCase}
      navigateToCart={navigateToCart}
    />
  );
};

export default Navigator;
