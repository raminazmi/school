import React, { useState } from "react";
import { useThemeStyles } from '../Hooks/useThemeStyles';
import { useSelector } from 'react-redux';

export function Taps({ children, contentClassName = "" }) {
  function findActiveTap(a) {
    return a.reduce((accumulator, currentValue, i) => {
      if (currentValue.props.active) {
        return i;
      }
      return accumulator;
    }, 0);
  }

  function TapValidator(Tap) {
    return Tap.type.displayName === "Tap" ? true : false;
  }

  const [activeTap, setActiveTap] = useState(findActiveTap(children));
  return (
    <>
      <div  className={`flex gap-2 justify-center px-2 py-0 ${contentClassName}`}>
        {children.map((item, i) => {
          return (
            <>
              {TapValidator(item) && (
                <Tap
                  key={`Tap-{i}`}
                  currentTap={i}
                  activeTap={activeTap}
                  setActiveTap={setActiveTap}
                >
                  {item.props.children}
                </Tap>
              )}
            </>
          );
        })}
      </div>
      <div className="p-5">
        {children.map((item, i) => {
          return (
            <div className={` ${i === activeTap ? "visible" : "hidden"}`}>
              {item.props.component}
            </div>
          );
        })}
      </div>
    </>
  );
}

export function Tap({ children, activeTap, currentTap, setActiveTap, contentClassName= "" }) {
    const stateColor = useSelector((state) => state.color);
    const { textStyle } = useThemeStyles();

  return (
    <>
      <div
        className={`px-4 py-1 cursor-pointer 
       text-[18px] max-[600px]:text-[15px] ${activeTap === currentTap ? `font-semibold border-b-[1px] border-b-[${stateColor.color}]` : "" } 
       translate-y-[3px] pb-[18px] max-[600px]:pb-[12px] max-[600px]:pt-[2px] select-none ${contentClassName}`}
        onClick={() => setActiveTap(currentTap)}
        style={textStyle}
      >
        {children}
      </div>
    </>
  );
}

Tap.displayName = "Tap";
