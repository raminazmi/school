import React from 'react';
import { useThemeStyles } from '../../Hooks/useThemeStyles';

function Copyright() {
  const { BGStyle, textStyle } = useThemeStyles();
  return (
    <footer style={BGStyle} className=" bg-[#00325C] flex items-center justify-center py-2">
      <p style={textStyle} className="text-white max-[450px]:text-sm max-[450px]:mx-2">جميع الحقوق محفوظة - مدرسة المهاجرين الشرعية - © 2023 </p>
    </footer>
  );
}

export default Copyright;
