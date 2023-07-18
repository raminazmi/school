import React from 'react';
import { useThemeStyles } from '../../Hooks/useThemeStyles';
import { BsChevronDown } from 'react-icons/bs';

const Minicard = ({ number, text, component, color }) => {
    const { BGColorStyle, textStyle } = useThemeStyles();

    return (
        <div className='flex justifiy-start items-center gap-2 max-[450px]:flex-col'>
            <div style={{backgroundColor: `${color}`}} className={`p-4 rounded-md max-[600px]:w-fit`}>
                {component}
            </div>
            <div>
                <h1 style={textStyle}>{number}</h1>
                <h1 style={textStyle} className='max-[400px]:text-[14px]'>{text}</h1>
            </div>
        </div>
    );
};

export default Minicard;
