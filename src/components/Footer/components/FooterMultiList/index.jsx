import React from 'react';
import FooterList from '../FooterList';
import './style.scss';
const listItem = [
  {
    list: ['Giới thiệu', 'Copyright', 'APIs'],
  },
  {
    list: ['Giới thiệu', 'Copyright', 'APIs'],
  },
  {
    list: ['Giới thiệu', 'Copyright', 'APIs'],
  },
  {
    list: ['Giới thiệu', 'Copyright', 'APIs'],
  },
];

const renderList = listItem.map((item) => <FooterList list={item.list} />);
const FooterMultiList = () => {
  return <div className='footer-multi-list'>{renderList}</div>;
};

export default FooterMultiList;
