import React from 'react';
import './style.scss';

const SearchBoxInput = () => {
  return (
    <>
      <input
        className='search-box-input'
        type='text'
        placeholder='Nhập nội dung cần tìm'
      />
    </>
  );
};

export default SearchBoxInput;
