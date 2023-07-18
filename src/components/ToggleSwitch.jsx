import React from 'react';
import { useSelector } from 'react-redux';

const ToggleSwitch = ({ handleChange, enabled }) => {
  const stateColor = useSelector((state) => state.color);

  return (
    <div className="relative flex flex-col items-center justify-center overflow-hidden">
      <div className="flex">
        <label className="inline-flex relative items-center ml-5 cursor-pointer">
          <input type="checkbox" className="sr-only peer" checked={enabled} readOnly />
          <button
            onClick={handleChange}
            className={`w-11 h-6 bg-gray-200 rounded-full peer  peer-focus:ring-green-300  peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:right-[23px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:!bg-green-400`}
          ></button>
        </label>
      </div>
    </div>
  );
};

export default ToggleSwitch;
