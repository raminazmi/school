import React from "react";
import Button from "./Button";
import MainText from "./MainText";
import { FiMapPin, FiMail, FiPhone } from 'react-icons/fi';
import { useThemeStyles } from '../Hooks/useThemeStyles';

const Contact = () => {
  const { textStyle } = useThemeStyles();

  return (
      <div id="Contact"  style={textStyle} className="mx-32 max-[1200px]:mx-8 max-[600px]:mx-4 pt-[20px] pb-[60px] flex justify-center gap-[40px] max-[950px]:gap-[0px] flex-row max-[950px]:flex-col snap-center">
<div className="flex-1">
      <div className='max-[900px]:text-center mt-[100px] max-[1200px]:mt-[0px]  mb-[40px]'>
        <MainText 
            classTitle="!mb-[20px]"
            classSubTitle="!leading-8"
            Title="تواصل معنا"
            SubTitle="تسعى مدرسة المهاجرين الشرعية إلى تنشئة جيل واعٍ مبدع، متمسك بدينه، معتّزٍ منتمٍ لوطنه، متسلح بالعلم والمعرفة، مواكب للتقدم العلمي والتقني، في بيئة مدرسية فاعلة محفزة على التفكير واإلبداع وفق معايير الجودة."
        />
        </div>
        <div>
        <ul>
          <li className="flex items-center justify-center gap-2 md:justify-start mb-[20px]">
            <FiMapPin className="h-5 w-5" />
            فلسطين - قطاع غزة - خانيونس
          </li>
          <li className="flex items-center justify-center gap-2 md:justify-start mb-[20px]">
            <FiMail className="h-5 w-5" />
            mohajren7258888@gmail.com
          </li>
          <li className="flex items-center justify-center gap-2 md:justify-start mb-[20px]">
            <FiPhone className="h-5 w-5" />
            972597318888 +
          </li>
        </ul>
      </div>
    </div>
        <div className="flex flex-1 items-center justify-center">
          <form
            className="w-[500px] flex flex-col gap-[25px] max-[540px]:w-[400px] max-[450px]:w-[350px] max-[390px]:w-[320px] px-[15px]"
          >
            <h1 className={`text-200`} >تواصل معنا</h1>
            <input className="p-[18px] max-[540px]:py-[15px] boreder-none rounded-[5px] bg-[#e8e6e6]" placeholder="الاسم" name="name" />
            <input className="p-[18px] max-[540px]:py-[15px] boreder-none rounded-[5px] bg-[#e8e6e6]" placeholder="الايميل الشخصي" name="email" />
            <textarea
              className="p-[18px] max-[540px]:py-[15px] boreder-none rounded-[5px] bg-[#e8e6e6]"
              placeholder="اكتب رسالتك"
              name="message"
              rows={10}
            />
            <Button title="ارسال" classContainer="!w-[100%] h-[50px]" />
          </form>
        </div>
    </div>
  );
};

export default Contact;
