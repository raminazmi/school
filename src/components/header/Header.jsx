import React, { useState, useEffect } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import { FaBars } from 'react-icons/fa';
import Logo from '../../assets/logo.png';
import Nav from './Nav';
import NavMobile from './NavMobile';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useThemeStyles } from '../../Hooks/useThemeStyles';
import Button from '../Button';
import footerIMGLight from "../../assets/footer-pattern-light.webp";
import footerIMGDark from "../../assets/footer-pattern-dark.webp";
const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const Open = useSelector((state) => state.open.open);
  const [isMobileLogo, setIsMobileLogo] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const { BGStyle, textStyle } = useThemeStyles();
  const stateDark = useSelector((state) => state.darkMode);
  const stateColor = useSelector((state) => state.color);

  useEffect(() => {
    const handleResize = () => {
      const isMobileLogo = window.innerWidth <= 1024;
      const isMobile = window.innerWidth <= 770;
      setIsMobileLogo(!isMobileLogo);
      setIsMobile(!isMobile);
    };

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav 
    className={`fixed gap-2 z-[999999999] w-[100%]`}
    style={BGStyle}
    >
      <div className="mx-auto flex items-center justify-between px-12 max-[768px]:px-4 py-2">
        <div className="md:hidden">
          <button style={textStyle} className={`${isOpen ? "absolute top-[20px] z-[999999999]" : "" }`} onClick={toggleMenu}>
            {isOpen ? <AiOutlineClose size={28} /> : <FaBars size={28} />}
          </button>
        </div>
        <div className='flex justify-start items-center'>
          <Link to='/' className='flex justify-start items-center gap-2'>
            <img
              className={`w-[60px] h-[60px]`}
              src={Logo}
              alt='logo-img'
            />
            {isMobileLogo ? <div className='flex flex-col justify-center items-center'>
              <h1 style={textStyle}>مدرسة المهاجرين الشرعية</h1>
              <h1 style={textStyle}>لتحفيظ القرآن الكريم</h1>
            </div>
            :
            ""
            }
          </Link>
        </div>
        <div className="hidden md:flex">
          <ul className="flex space-x-4">
            <li className="nav-link ml-6">
              <a href="#"
                style={textStyle}
                className='transition-all delay-200'
              >
                الرئيسية
              </a>
              </li>
            <li className="nav-link">
              <a href="#about"
                style={textStyle}
                className='transition-all delay-200'
              >
                حولنا
              </a>
            </li>
            <li className="nav-link">
              <a href="#SchoolActivities"
                style={textStyle}
                className='transition-all delay-200'
              >
                أنشطة المدرسة
              </a>
            </li>
            <li className="nav-link">
              <a href="#advantages"
                style={textStyle}
                className='transition-all delay-200'
              >
                ما يميزنا
              </a>
            </li>
            <li className="nav-link">
              <a href="#Contact"
                style={textStyle}
                className='transition-all delay-200'
              >
                تواصل معنا
              </a>
            </li>
          </ul>
        </div>
        {isMobile ?
          <div>
          <Button title="انضم لنا" link="/" />
          </div>
          :
          ""
        }
      </div>
      <div
      style={{
        backgroundColor: 
        stateDark.darkMode
        ? "#0e1b29"
        : "#ffffff",
                backgroundImage: stateDark.darkMode
          ? `url(${footerIMGDark})`
          : `url(${footerIMGLight})`,
        backgroundSize: "cover",
        boxShadow: "0px 2px 8px rgba(0, 0, 0, 0.2)"
      }}
      className={`pl-2 drawer flex flex-col justify-center items-start fixed top-0 right-0 w-[70%] min-h-screen transition-transform duration-300 transform  ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}
      >
      <div 
      className="p-4 w-full h-full">
        <div 
        className="p-4 ">
          <ul className="space-y-4">
            <li className="nav-link">
              <a href="#"
                style={textStyle}
                className='transition-all delay-200'
              >
                الرئيسية
              </a>
            </li>
            <li className="nav-link">
              <a href="#about"
                style={textStyle}
                className='transition-all delay-200'
              >
                حولنا
              </a>
            </li>
            <li className="nav-link">
              <a href="#SchoolActivities"
                style={textStyle}
                className='transition-all delay-200'
              >
                أنشطة المدرسة
              </a>
            </li>
            <li className="nav-link">
              <a href="#advantages"
                style={textStyle}
                className='transition-all delay-200'
              >
                ما يميزنا
              </a>
            </li>
            <li className="nav-link">
              <a href="#Contact"
                style={textStyle}
                className='transition-all delay-200'
              >
                تواصل معنا
              </a>
            </li>
          </ul>
          <div className='mt-4 w-[100%] mb-1'>
            <Button title="انضم لنا" link="/" />
          </div>
        </div>
      </div>
      </div>
    </nav>
  );
};

export default Header;
