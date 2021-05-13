import React from 'react';
import SearchBoxInput from '../SearchBoxInput';
import SearchBoxButton from '../SearchBoxButton';
import './style.scss';

const SearchBox = () => {
  return (
    <div>
      <SearchBoxInput />
      <SearchBoxButton />
    </div>
  );
};

export default SearchBox;
