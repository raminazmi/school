import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineClose } from 'react-icons/ai';
import { FaBars } from 'react-icons/fa';
import { useThemeStyles } from '../../Hooks/useThemeStyles';
import { useDispatch, useSelector } from 'react-redux';
import { changeOpen } from '../../redux/features/theme/openSlice';

const NavMobile = () => {
  const isOpen = useSelector((state) => state.open.open);
  const { textStyle } = useThemeStyles();
  const dispatch = useDispatch();
  const handleOpenChange = () => {
    dispatch(changeOpen(!isOpen));
  };

  return (
    <div className='lg:hidden flex flex-col items-start z-50 py-4  md:px-10'>
      <div className='flex items-center justify-end'>
        <button
          onClick={handleOpenChange}
          className='text-white focus:outline-none'
        >
          {isOpen ? (
            <AiOutlineClose size={28} style={textStyle} />
          ) : (
            <FaBars size={28} style={textStyle} />
          )}
        </button>
      </div>

      {isOpen && (
        <div>
          <nav className='mt-6'>
            <ul className='text-white text-[18px] leading-6 font-normal'>
              <li className='mb-4'>
                <a href="#"
                  style={textStyle}
                  className='cursor-pointer transition-all delay-200'
                >
                  الرئيسية
                </a>
              </li>
              <li className='mb-4'>
                <a href="#about"
                  style={textStyle}
                  className='cursor-pointer transition-all delay-200'
                >
                  حولنا
                </a>
              </li>
              <li className='mb-4'>
                <a href="#SchoolActivities"
                  style={textStyle}
                  className='cursor-pointer transition-all delay-200'
                >
                أنشطة المدرسة
                </a>
              </li>
              <li className='mb-4'>
                <a href="#advantages"
                  style={textStyle}
                  className='cursor-pointer transition-all delay-200'
                >
                  ما يميزنا
                </a>
              </li>
              <li>
                <a href="#Contact"
                  style={textStyle}
                  className='cursor-pointer transition-all delay-200'
                >
                  تواصل معنا
                </a>
              </li>
            </ul>
          </nav>
        </div>
      )}
    </div>
  );
};

export default NavMobile;
