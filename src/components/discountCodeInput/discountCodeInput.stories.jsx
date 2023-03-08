import React from 'react';
import DiscountCodeInput from './discountCodeInput';

export default {
  title: 'Components/DiscountCodeInput',
  component: DiscountCodeInput,
};

export const Default = () => (
  <DiscountCodeInput label="Codigo de descuento" placeholder="Ingresa el código" />
);
