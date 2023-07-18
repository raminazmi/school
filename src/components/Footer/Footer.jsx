import React, { useState, useEffect } from "react";
import logo from "../../assets/logo.png";
import { useThemeStyles } from '../../Hooks/useThemeStyles';
import footerIMGLight from "../../assets/footer-pattern-light.webp";
import footerIMGDark from "../../assets/footer-pattern-dark.webp";
import FooterDesktop from "./FooterDesktop";
import FooterMobile from "./FooterMobile";
import Copyright from "./Copyright";
import { useSelector } from 'react-redux';

const Footer = () => {
  const [show, setShow] = useState(true);
  const { textStyle, BorderStyle3 } = useThemeStyles();
  const state = useSelector((state) => state.darkMode);

  useEffect(() => {
    const handleResize = () => {
      setShow(window.innerWidth >= 770);
    };
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);


  return (
    <>
      <footer
        className="active text-center min-[800px]:px-[120px] lg:text-right"
        style={{
          backgroundImage: state.darkMode
            ? `url(${footerIMGDark})`
            : `url(${footerIMGLight})`,
          backgroundSize: "cover",
          ...BorderStyle3
        }}
      >
        <div className="mx-6 py-10 text-center md:text-right" style={textStyle}>
          <div className="grid-1 grid gap-8 md:grid-cols-2 lg:grid lg:grid-cols-4">
            <div className="">
              <div className="mb-4 flex flex-col items-center justify-center gap-4 uppercase">
                <img className="w-24" src={logo} alt="logo2" />
                <p className="text-center">
                  مدرسة المهاجرين الشرعية لتحفيظ القرآن الكريم ( خانيونس )
                </p>
              </div>
            </div>
            {show ? <FooterDesktop /> : <FooterMobile />}
          </div>
        </div>
      </footer>
      <Copyright />
    </>
  );
};

export default Footer;
