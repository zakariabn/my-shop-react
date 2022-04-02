import React from 'react';
import logo from '../../../asset/icon/mt-shop-logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faShoppingCart } from "@fortawesome/free-solid-svg-icons";


const MainHeader = () => {
  return (
    <div className='w-full flex justify-between items-center px-5 py-2'>
      <div>
        <img src={logo} alt="" />
      </div>
      <div className='flex items-center justify-center'>
        <div className='flex items-center'>
          <input 
            type="text" 
            name="search" 
            id="search" 
            placeholder='search'
            className='border h-[30px] w-[200px] rounded-full shadow-inner pl-3'
          />
          <FontAwesomeIcon 
            icon={faSearch} 
            className='bg-[#2C2C2C] text-white text-sm p-2 rounded-full relative right-5 hover:cursor-pointer'
          />
        </div>

        <div className='flex justify-center items-center mr-2'>
        <FontAwesomeIcon 
          icon={faShoppingCart} 
          className='bg-[#009BCB] text-[12px] text-white p-2 rounded-full mr-2'
        />
        <span>{0}items</span> - <span>${0.00}</span>
        </div>
      </div>
    </div>
  );
};

export default MainHeader;