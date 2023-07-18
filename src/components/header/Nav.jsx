import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { useThemeStyles } from '../../Hooks/useThemeStyles';

const Nav = () => {
  const { textStyle, BGColorStyle } = useThemeStyles();

  return (
    <nav className='hidden lg:flex flex justify-between gap-10' >
      <ul className='text-white lg:flex space-x-6 items-center text-[18px] leading-6 font-normal lg:mr-32'>
        <li className='ml-6 '>
          <a href="#" style={textStyle} className='cursor-pointer transition-all delay-200'> الرئيسية</a>
          </li>
        <li>
          <a href="#about" style={textStyle} className='cursor-pointer transition-all delay-200'>حولنا</a>
          </li>
        <li>
          <a href="#SchoolActivities" style={textStyle} className='cursor-pointer transition-all delay-200'>أنشطة المدرسة</a>
        </li>
        <li>
        <a href="#advantages" style={textStyle} className='cursor-pointer transition-all delay-200'>ما يميزنا</a>
      </li>
      <li>
      <a href="#Contact" style={textStyle} className='cursor-pointer transition-all delay-200'>تواصل معنا</a>
    </li>
      </ul>
      <div className='flex justify-end'>
      <Link to='/'>
        <button
          style={BGColorStyle}
          className='text-[var(--textDark)] rounded-md transition-all delay-100  py-2 px-4 text-[18px] font-medium leading-6 hover:text-[#2289FF] hover:border-[#2289FF]'
        >
          انضم لنا
        </button>
      </Link>
    </div>
    </nav>
  )
}
export default Nav