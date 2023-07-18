import React, { useState, useEffect } from 'react';
import Logo from '../../assets/logo.png';
import Nav from './Nav';
import NavMobile from './NavMobile';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useThemeStyles } from '../../Hooks/useThemeStyles';
import Button from '../Button';

const Header = () => {
  const isOpen = useSelector((state) => state.open.open);
  const [isMobileView, setIsMobileView] = useState(true);
  const { BGStyle, textStyle } = useThemeStyles();

  useEffect(() => {
    const handleResize = () => {
      const isMobile = window.innerWidth <= 1024;
      setIsMobileView(isMobile);
    };

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className={`scroll-smooth shadow-xl z-[10000]`}>
      <header
        style={BGStyle}
        className={`${isMobileView ? "px-3 py-[7px]" : "p-3"} lg:px-0  top-0 left-0  
      transition-all duration-300 `}
      >
        <div className={`flex justify-between  ${isMobileView && isOpen ? "items-start" : "items-center"} ${isMobileView ? "mx-2 flex-row-reverse" : "mx-10 "}`}>
          <div className='flex justify-start items-center'>
            <Link to='/' className='flex justify-start items-center gap-2'>
              <img
                className={`w-[60px] h-[60px]`}
                src={Logo}
                alt='logo-img'
              />
              {isMobileView ? "" : <div className='flex flex-col justify-center items-center'>
                <h1 style={textStyle}>مدرسة المهاجرين الشرعية</h1>
                <h1 style={textStyle}>لتحفيظ القرآن الكريم</h1>
              </div>
              }
            </Link>
          </div>
          {isMobileView ? <NavMobile /> : <Nav />}
        </div>
        {(isMobileView && isOpen) ?
          <div className='mt-4 w-[100%] mb-1'>
            <Button title="انضم لنا" link="/" />
          </div>
          :
          ""
        }
      </header>
    </div>
  );
};

export default Header;
