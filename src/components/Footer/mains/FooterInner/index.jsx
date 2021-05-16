import React from 'react';
import FooterLogo from '../../components/FooterLogo';
import FooterMultiList from '../../components/FooterMultiList';
import FooterOther from '../../components/FooterOther';
import FooterTextBox from '../../components/FooterTextBox';
import './style.scss';

const FooterInner = () => (
  <div className='footer-inner'>
    <FooterLogo />
    <FooterTextBox />
    <FooterMultiList />
    <FooterOther />
  </div>
);

export default FooterInner;
