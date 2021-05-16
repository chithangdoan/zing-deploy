import React from 'react';
import PartnerPhoto from '../PartnerPhoto';
import './style.scss';

const PartnerItem = ({ item }) => {
  return (
    <div className='partner-item'>
      <PartnerPhoto img={item.img} />
    </div>
  );
};

export default PartnerItem;
