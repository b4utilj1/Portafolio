import React from 'react';

import Logo from '../assets/logo.svg';


const Header = () => {
  return <header id='header' className='py-8'>
    <div className='container mx-auto'>
      <div className='flex justify-between items-center'>
        <a href='#'>
          <img src={Logo}  /> 
        </a>

        <button className='btn btn-sm'>Trabajar conmigo</button>
      </div>
    </div>
    </header>;
};

export default Header;
