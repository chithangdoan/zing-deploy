import React from 'react';
import NavbarLeft from '../../components/NavbarLeft';
import NavbarRight from '../../components/NavbarRight';

import './style.scss';

const NavbarInner = () => (
  <div className='navbar-inner'>
    <NavbarLeft />
    <NavbarRight />
  </div>
);

export default NavbarInner;
