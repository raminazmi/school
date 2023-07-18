import React from 'react';
import Colors from './Colors/colors';
import DarkMode from './darkMode';
import TransparentEffect from './TransparentEffect';
import { useThemeStyles } from '../../../Hooks/useThemeStyles';

function menu() {
    const { textStyle } = useThemeStyles();

    return (
        <div className='mt-4'>
            <h1 className='pb-2 font-semibold text-[18px]' style={textStyle}>الإعدادات</h1>
            <hr className='mb-4 w-[97%]' />
            <div className='mb-4'>
                <h1 className='pb-[10px]' style={textStyle}>ألوان الموقع</h1>
                <Colors />
            </div>
            <hr className='mb-4 w-[97%]' />
            <div className='flex justify-between items-center mb-2'>
                <h1 className='pb-2' style={textStyle}>الوضع الداكن</h1>
                <DarkMode />
            </div>
            <hr className='mb-4 w-[97%]' />
            <div className='flex justify-between items-center mb-2'>
                <h1 className='pb-2' style={textStyle}>التأثير الشفاف</h1>
                <TransparentEffect />
            </div>
        </div>
    );
}

export default menu;

