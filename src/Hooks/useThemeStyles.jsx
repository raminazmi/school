import { useSelector } from 'react-redux';

export const useThemeStyles = () => {
  const stateDark = useSelector((state) => state.darkMode);
  const stateTransparent = useSelector((state) => state.TransparentEffect);
  const stateColor = useSelector((state) => state.color);

  const BGStyle = {
    backgroundColor: stateTransparent.TransparentEffect
      ? stateDark.darkMode
        ? "var(--DarkTransparent)"
        : "var(--LightTransparent)"
      : stateDark.darkMode
      ? "#0e1b29"
      : "#ffffff",
    backdropFilter: stateTransparent.TransparentEffect
      ? "var(--DarkBlur)"
      : stateDark.darkMode
      ? "#000000"
      : "#ffffff",
    boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.2)"
  };
  const textIconStyle = {
    color: "#f4f7fa"
  };
  const BGColorStyle = {
    backgroundColor: stateColor.color
  };
  const textStyle =  {
    color: stateDark.darkMode
    ? "var(--textDark)"
    : "var(--textLight)"
}
const textColorStyle =  {
  color: stateColor.color
}
const BorderStyle ={
  border:`2px solid ${stateColor.color}`
}
const BorderStyle2 ={
  border:`1px solid ${stateColor.color}`,
}
const BorderStyle3 ={
  borderTop:`2.5px solid ${stateColor.color}`,
}
  return {
    BGStyle,
    BGColorStyle,
    textStyle,
    BorderStyle,
    BorderStyle2,
    BorderStyle3,
    textColorStyle,
    textIconStyle
  };
};
