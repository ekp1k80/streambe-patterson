import React from 'react';
import PropTypes from 'prop-types';

function LeftArrowSVG({
  fill, height, width, ...props
}) {
  return (
    <svg viewBox="0 0 31.494 31.494" height={height} width={width} {...props}>
      <path
        fill={fill}
        d="M20.982,0.521v2.006L8.57,12.315c-0.121,0.101-0.195,0.251-0.195,0.41s0.074,0.311,0.195,0.41l12.412,9.79v2.005
c0,0.199-0.115,0.383-0.297,0.469c-0.178,0.086-0.395,0.064-0.549-0.061L4.664,13.136c-0.122-0.1-0.194-0.251-0.194-0.41
s0.072-0.31,0.194-0.41L20.136,0.113c0.154-0.126,0.371-0.148,0.549-0.061C20.866,0.139,20.982,0.322,20.982,0.521z"
      />

    </svg>
  );
}

LeftArrowSVG.defaultProps = {
  fill: '#000000',
  height: '50px',
  width: '50px',
};

LeftArrowSVG.propTypes = {
  fill: PropTypes.string,
  height: PropTypes.string,
  width: PropTypes.string,
};

export default LeftArrowSVG;
