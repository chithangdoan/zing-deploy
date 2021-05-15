import React from 'react';
import { SearchOutlined } from '@ant-design/icons';
import './style.scss';

const SearchBoxButton = () => {
  return (
    <div className='search-box-button'>
      <button>
        <SearchOutlined />
      </button>
    </div>
  );
};

export default SearchBoxButton;
