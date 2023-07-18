import React, { useState } from 'react';
import { MdSettings } from 'react-icons/md';
import { FaTimes } from 'react-icons/fa';
import Menu from './Menu/menu';
import { useThemeStyles } from '../../Hooks/useThemeStyles';

const SettingMenu = () => {
  const { BGStyle, BGColorStyle } = useThemeStyles();
  const [isOpen, setOpen] = useState(false);
  const toggleDrawer = () => {
    setOpen(!isOpen);
  };

  return (
    <div className={`fixed gap-2 z-[9999999999]`}>
    <button
        onClick={toggleDrawer}
        className={`p-[10px] pl-[6px] rounded-r-lg transition-transform duration-300 transform ${isOpen ? 'translate-x-64' : 'translate-x-0'
          }`}
      >
    <div className="fixed -top-[120px] right-0 w-[100vw] h-[100vh] z-[90000000]" style={{...{ display: isOpen ? "block" : "none" }}}></div>
    </button> 
    <button
        style={BGColorStyle}
        onClick={toggleDrawer}
        className={`fixed top-[25%] left-0  p-[10px] pl-[6px] rounded-r-lg transition-transform duration-300 transform ${isOpen ? 'translate-x-64' : 'translate-x-0'
          }`}
      >
      {isOpen ?
        <FaTimes
          className="text-white text-2xl"
        />
        :
        <MdSettings
        className="text-white text-2xl transition-all hover:rotate-180 duration-300"
      />
      }
      </button>
      <div
        style={BGStyle}
        className={`shadow-xl p-4 pl-2 drawer  fixed top-0 left-0 w-64 h-full transition-transform duration-300 transform  ${isOpen ? 'translate-x-0' : '-translate-x-full'} z-[9999999]`}
      >
        <Menu />
      </div>
    </div>
  );
}

export default SettingMenu;

