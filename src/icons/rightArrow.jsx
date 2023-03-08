import React from 'react';
import PropTypes from 'prop-types';

function RightArrowSVG({
  fill = '#000000', height = '800px', width = '800px', ...props
}) {
  return (
    <svg viewBox="0 0 330 330" height={height} width={width} {...props}>

      <path
        fill={fill}
        d="M250.606,154.389l-150-149.996c-5.857-5.858-15.355-5.858-21.213,0.001
c-5.857,5.858-5.857,15.355,0.001,21.213l139.393,139.39L79.393,304.394c-5.857,5.858-5.857,15.355,0.001,21.213
C82.322,328.536,86.161,330,90,330s7.678-1.464,10.607-4.394l149.999-150.004c2.814-2.813,4.394-6.628,4.394-10.606
C255,161.018,253.42,157.202,250.606,154.389z"
      />

    </svg>
  );
}

RightArrowSVG.defaultProps = {
  fill: '#000000',
  height: '50px',
  width: '50px',
};

RightArrowSVG.propTypes = {
  fill: PropTypes.string,
  height: PropTypes.string,
  width: PropTypes.string,
};

export default RightArrowSVG;
