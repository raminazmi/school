import React from 'react';
import SettingMenu from "../pages/SettingMenu/SettingMenu";
import Vedio from "../components/HeroSection/Vedio";
import Slider from '../components/Statistics/Slider';
import About from "./about/about";
import Divider from "../components/Divider";
import Advantages from "../pages/advantages/advantages"
import SchoolActivities from '../components/SchoolActivities/SchoolActivities';
import Contact from '../components/Contact';

const Home = () => {
  return (
    <div>
      <SettingMenu />
      <Vedio />
      <Slider />
      <Divider />
      <About />
      <Advantages />
      <SchoolActivities />
      <Contact />
    </div>
  );
};

export default Home;
