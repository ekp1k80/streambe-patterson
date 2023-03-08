import React from 'react';
import './showCaseHead.scss';
import BolderTitle from '../bolderTitle/bolderTitle';

function ShowCaseHead() {
  return (
    <div className="showcase-head">
      <BolderTitle>
        Productos destacados
      </BolderTitle>
      <div className="showcase-head-right">
        home / productos destacados
      </div>
    </div>
  );
}

export default ShowCaseHead;
