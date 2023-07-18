import React from 'react';
import { useThemeStyles } from '../Hooks/useThemeStyles';
import { Link } from "react-router-dom";

const Button = ({ title, link, classContainer }) => {
    const { BGColorStyle } = useThemeStyles();

    return (
        <Link to={link}>
          <button
            style={BGColorStyle}
            className={`text-[var(--textDark)] rounded-md transition-all delay-100  py-2 px-4 text-[18px] font-medium leading-6 hover:text-[#2289FF] hover:border-[#2289FF] w-[100%] ${classContainer}`}
          >
          {title}
          </button>
        </Link>
    )
}

export default Button;