import React from 'react'
import { Link } from "react-router-dom";
import { useThemeStyles } from '../../Hooks/useThemeStyles';

const Card = ({ NumberOfImage, title, details, image }) => {
    const { textColorStyle, textStyle, BGStyle } = useThemeStyles();
    return (
        <div style={BGStyle} className='rounded-lg shadow-lg pb-[16px]' aria-hidden="true">
        <div>
            <div className=' bg-cover bg-center rounded-t-lg shadow-md rounded-bl-2xl h-[260px] max-lg:h-[240px] max-md:h-[220px]  max-[350px]:h-[200px] '  style={{ backgroundImage: `url(${image})` }}>
                <p className='absolute mt-2 rounded-md p-[14px] top-0 right-4 max-[450px]:right-4 max-[450px]:p-[12px] bg-[#464646b9]  h-5 flex justify-center items-center gap-1'>
                    <div className='text-white text-sm'> {NumberOfImage} صور</div>
                </p>
            </div>
            <h5 
            style={{
                display: '-webkit-box',
                WebkitBoxOrient: 'vertical',
                WebkitLineClamp: 1,
                overflow: 'hidden',
                userSelect: 'none',
                textOverflow: 'ellipsis',
                ...textColorStyle
              }}
            className='pr-3 mt-2 font-semibold text-[16px] text-start'>{title}</h5>
            </div>
            <div>
            <p 
            style={{
                display: '-webkit-box',
                WebkitBoxOrient: 'vertical',
                WebkitLineClamp: 1,
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                lineHeight: '1.2em',
                userSelect: 'none',
                maxHeight: '1.2em',
                ...textStyle
              }}
             className='text-[14px] px-3 mt-2 text-start'>{details}</p>
             </div>
        </div>
    )
}

export default Card