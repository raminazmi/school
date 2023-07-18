import React from 'react';
import MainText from "../../components/MainText";
import pic1 from "../../assets/pic1.jpg";
import pic2 from "../../assets/pic2.jpg";
import { useThemeStyles } from '../../Hooks/useThemeStyles';
import Minicard from './MiniCard';
import {FaTree, FaUniversity, FaDoorOpen} from 'react-icons/fa'
import { BsDisplay } from 'react-icons/bs';
import { MdOutlineFastfood } from 'react-icons/md';
import { IoIosFootball } from 'react-icons/io';

const About = () => {
  const { BGStyle, textStyle } = useThemeStyles();

  return (
    <div id="about" className='mx-32 max-[1200px]:mx-8 max-[600px]:mx-4 grid grid-cols-2 max-[900px]:grid-cols-1 max-[900px]:place-content-center gap-10 mt-[80px] max-[900px]:mt-[60px] pb-[40px]'>
      <div className='grid grid-cols-2 items-center max-[900px]:justify-self-center max-[900px]:mt-6 gap-6 max-[900px]:gap-4 '>
        <div className='relative'>
          <img className="h-[420px] max-[400px]:h-[250px] max-w-full rounded-lg"
            style={{ objectFit: 'cover' }}
            src={pic1} alt="" />
          <div style={BGStyle} className='absolute -bottom-4 right-12 w-[100%] max-[500px]:w-[150%] rounded-md'>
            <p className='p-4' style={textStyle}>
              يا حافظ القرآن، أنت قدوة الأمة ونور القلوب.
            </p>
          </div>
        </div>

        <img className="h-[330px] max-[400px]:h-[250px] max-w-full rounded-lg"
          style={{ objectFit: 'cover' }}
          src={pic2} alt="" />

      </div>
      <div className='max-[900px]:text-center flex flex-col gap-10 max-[450px]:items-center'>
        <div>
          <MainText
            Title="حولنا"
            SubTitle="مدرسة المهاجرين الشرعية لتحفيظ القرآن الكريم، مؤسسة تربوية شرعية اجتماعية تحمل رسالة نبيلة تأسست عام 1430هجري 2008م. تزود الطالب بالقيم الإسلامية وتحفيظ القرآن الكريم وتشجيع التحصيل العلمي وفق أسس علمية صحيحة ."
          />
        </div>
        <div className='grid grid-cols-3 gap-8 max-[1200px]:grid-cols-2 max-[450px]:w-[80%]'>
          <Minicard text="مساحة المدرسة" number={1000} color="#11D775" component={<FaTree className='text-white' size={25}/>}/>
          <Minicard text="قاعة الإحتفالات" number={2} color="#FFBA59" component={<FaDoorOpen className='text-white' size={25}/>} />
          <Minicard text="قاعات دراسية" number={40} color="#BB3F8E" component={<FaUniversity className='text-white' size={25}/>} />
          <Minicard text="مختبر حاسوب" number={5} color="#1130FF" component={<BsDisplay className='text-white' size={25}/>} />
          <Minicard text="مقصف" number={1} color="#FF1C59" component={<MdOutlineFastfood className='text-white' size={25}/>} />
          <Minicard text="ملعب رياضي" number={2} color="#9A9EA4" component={<IoIosFootball className='text-white' size={25}/>} />
        </div>
      </div>
    </div>
  );
};

export default About;
