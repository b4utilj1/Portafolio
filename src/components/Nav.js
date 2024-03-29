import React from 'react';


import {BiHomeAlt, BiUser} from 'react-icons/bi'
import {BsClipboardData, BsBriefcase, BsChatSquare} from 'react-icons/bs'



// Links
import {Link} from 'react-scroll'
const Nav = () => {
  return <nav className='fixed bottom-2 lg:bottom-8 w-full overflow-hidden z-50'>
    <div className='container mx-auto'>
      <div className='w-full bg-black/20 h-[96px] backdrop:blur-2x1 rounded-full max-w-[460px] mx-auto px-5 flex justify-between text-2x1 items-center text-white'>
        <Link
        to='home' 
        activeClass='active'
        smooth={true} 
        spy={true}
        offset={-200}
        className='cursor-pointer w-[60px] h-[60px] flex justify-center items-center'>
          <BiHomeAlt/>
          </Link>
        <Link 
        activeClass='active'
        smooth={true}
        to='about'
        spy={true}
        className='cursor-pointer w-[60px] h-[60px] flex justify-center items-center'>
          <BiUser/>
        </Link>
        {/* <Link 
        activeClass='active'
        smooth={true}
        spy={true}
        to='services' 
        className='cursor-pointer w-[60px] h-[60px] flex justify-center items-center'>
          <BsClipboardData/>
        </Link> */}
        <Link 
        activeClass='active'
        smooth={true}
        spy={true}
        to='work' 
        className='cursor-pointer w-[60px] h-[60px] flex justify-center items-center'>
          <BsBriefcase/> 
        </Link>
        <Link 
        activeClass='active'
        smooth={true}
        spy={true}
        to='contact' 
        className='cursor-pointer w-[60px] h-[60px] flex justify-center items-center'>
          <BsChatSquare/> 
        </Link>
      
      </div>
    </div>
  </nav>
};

export default Nav;
