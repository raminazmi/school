import React, { useState, useEffect } from 'react'
import { useThemeStyles } from '../../Hooks/useThemeStyles';
import { BsChevronDown } from 'react-icons/bs';

function TimeLineContent({ Title, number, details, open }) {
  const { BGColorStyle, textStyle, textColorStyle } = useThemeStyles();
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    open ? setIsOpen(true) : setIsOpen(false);
  }, [])

  return (
    <div className="mb-[16px] mr-4 w-[100%]">
      <div style={BGColorStyle} className={` absolute font-bold flex  items-start justify-center w-6 h-6 rounded-[2px]  -right-3 `}>
        {number}
      </div>
      <button
        className="flex items-start justify-between w-full font-medium focus:outline-none focus-visible:ring focus-visible:ring-gray-500 focus-visible:ring-opacity-50  border-t-1"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className='mx-4 max-[450px]:mx-[3px] flex justify-between w-full items-center gap-4'>
          <h3 style={textStyle} className={`flex  items-center mb-1 text-[18px] text-start max-[450px]:text-[17px]`}>
            {Title}
          </h3>
          <span className="flex-shrink-0">
            {isOpen ? (
              <BsChevronDown style={textColorStyle} className="h-5 w-5 font-bold rotate-180" />
            ) : (
              <BsChevronDown style={textColorStyle} className="h-5 w-5 font-bold" />
            )}
          </span>
        </div>
      </button>
      {isOpen && (
        <p class="mx-4 max-[450px]:mx-[3px] mb-4 text-base font-normal  max-[450px]:text-[15px] w-[90%] text-gray-500 dark:text-gray-400">
          {details}
        </p>
      )}

    </div>
  )
}

export default TimeLineContent;