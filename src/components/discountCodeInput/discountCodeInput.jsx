import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './discountCodeInput.scss';

function DiscountCodeInput({ onChange }) {
  const [code, setCode] = useState('');

  const handleInputChange = (event) => {
    const uppercase = event.target.value.toUpperCase();
    setCode(uppercase);
    if (onChange) {
      onChange(uppercase);
    }
  };

  return (
    <div className="discount-code-input">
      <div className="discount-code-label">Codigo de descuento</div>
      <input
        className="discount-code-field"
        type="text"
        value={code}
        onChange={handleInputChange}
      />
    </div>
  );
}

DiscountCodeInput.defaultProps = {
  onChange: () => {},
};

DiscountCodeInput.propTypes = {
  onChange: PropTypes.func,
};

export default DiscountCodeInput;
