import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from "@fortawesome/free-solid-svg-icons";
import {Link} from 'react-router-dom';

const Navigation = () => {
  return (
    <div className='w-full max-w-screen-xl bg-[#2C2C2C] text-lg mx-3 py-1'>
      <FontAwesomeIcon icon={faBars} className='text-white lg:hidden px-6'/>
      <div className='sm: hidden lg:block'>
        <div className='flex gap-5 justify-evenly'>
        <Link to='/' className='text-white'>Home</Link>
        <Link to='/catagories' className='text-white'>Catagories</Link>
        <Link to='/order' className='text-white'>Order</Link>
        <Link to='/about-us' className='text-white'>About Us</Link>
        </div>
      </div>
    </div>
  );
};

export default Navigation;