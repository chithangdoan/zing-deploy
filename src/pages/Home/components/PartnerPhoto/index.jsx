import React from 'react';
import './style.scss';

const PartnerPhoto = ({ img }) => {
  return (
    <>
      <img className='partner-photo' alt='partner' src={img} />
    </>
  );
};

export default PartnerPhoto;
