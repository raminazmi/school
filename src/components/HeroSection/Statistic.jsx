import React from 'react';
import { useThemeStyles } from '../../Hooks/useThemeStyles';
import Counter from './Counter'; 

const Vedio = ({ number, title }) => {
  const { textStyle } = useThemeStyles();

  return (
    <div className='flex flex-col justify-center items-center max-[1050px]:pb-4'>
      <h1 style={textStyle} className='text-[18px] max-[700px]:text-[16px]'>
        <Counter Number={number}/>
      </h1>
      <h1 style={textStyle} className='text-[20px] font-bold max-[700px]:text-[14px] max-[700px]:font-semibold'>
        {title}
      </h1>
    </div>
  );
};

export default Vedio;
