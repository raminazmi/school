import React from "react";
import { useThemeStyles } from '../Hooks/useThemeStyles';

const MainText = ({ Title, SubTitle, classTitle, classSubTitle }) => {
  const { textStyle } = useThemeStyles();
  return (
    <>
      <h2 className={`font-semibold  text-[25px] max-[600px]:text-[22px] text-start max-[900px]:text-center mb-2 ${classTitle}`}
      style={textStyle}>
        {Title}
      </h2>
      <h2 className={`text-start leading-7 text-[18px] max-[600px]:text-[16px] max-[900px]:text-center mb-2 text-gray-500 dark:text-gray-400 ${classSubTitle}`}>
      {SubTitle}
      </h2>
    </>
  );
};

export default MainText;
