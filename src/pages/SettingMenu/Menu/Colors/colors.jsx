import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { changeColor } from '../../../../redux/features/theme/colorSlice';
import { FaCheck } from 'react-icons/fa';

function Colors() {
  const dispatch = useDispatch();
  const [selectedColor, setSelectedColor] = useState(
    localStorage.getItem('selectedColor') || "#FFBA59"
  );
  useEffect(() => {
    localStorage.setItem('selectedColor', selectedColor);
  }, [selectedColor]);
  const handleColorChange = (newColor) => {
    dispatch(changeColor(newColor));
    setSelectedColor(newColor);
  };

  return (
    <div className='flex justify-center items-center gap-2 w-[100%]'>
      <div className='flex justify-center items-center gap-2'>
        <button
          onClick={() => handleColorChange('#FFBA59')}
          className={`rounded-full w-8 h-8 shadow-2xl bg-[#FFBA59] flex justify-center items-center`}>
          {selectedColor === '#FFBA59' &&
            <FaCheck color="white" size={20} strokeWidth={1}/>}
        </button>
        <button
          onClick={() => handleColorChange('#FF1C59')}
          className={`rounded-full w-8 h-8 shadow-2xl bg-[#FF1C59] flex justify-center items-center`}>
          {selectedColor === '#FF1C59' &&
            <FaCheck color="white" size={20} strokeWidth={1}/>}
        </button>
        <button
          onClick={() => handleColorChange('#11D775')}
          className={`rounded-full w-8 h-8 shadow-2xl bg-[#11D775] flex justify-center items-center`}>
          {selectedColor === '#11D775' &&
            <FaCheck color="white" size={20} strokeWidth={1}/>}
        </button>
        <button
          onClick={() => handleColorChange('#1130FF')}
          className={`rounded-full w-8 h-8 shadow-2xl bg-[#1130FF] flex justify-center items-center`}>
          {selectedColor === '#1130FF' &&
            <FaCheck color="white" size={20} strokeWidth={1}/>}
        </button>
        <button
          onClick={() => handleColorChange('#BB3F8E')}
          className={`rounded-full w-8 h-8 shadow-2xl bg-[#BB3F8E] flex justify-center items-center`}>
          {selectedColor === '#BB3F8E' &&
            <FaCheck color="white" size={20} strokeWidth={1}/>}
        </button>
      </div>
    </div>
  );
}

export default Colors;


