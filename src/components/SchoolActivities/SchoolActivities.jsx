import React from 'react';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import MainText from '../../components/MainText';
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';
import { useThemeStyles } from '../../Hooks/useThemeStyles';
import Card from './Card';
import p3 from "../../assets/pic2.jpg";
import p4 from "../../assets/pic1.jpg";
import p8 from "../../assets/pic2.jpg";
import Button from '../Button';

const CustomRightArrow= ({ onClick, isEdge, theme }) => (
    <button
    style={theme}
      className={`
        border-0 outline-none cursor-pointer absolute top-1/2 transform -translate-y-1/2 p-2 rounded-full transition duration-300 left-0 custom-arrow left-arrow
       ${isEdge ? 'invisible' : 'visible'}`}
      onClick={onClick}
    >
      <FiChevronLeft className="text-2xl" />
    </button>
  );
  
  const CustomLeftArrow = ({ onClick, isEdge, theme }) => (
    <button
    style={theme}
      className={`
        border-0 outline-none cursor-pointer absolute top-1/2 transform -translate-y-1/2 p-2 rounded-full transition duration-300 right-0 custom-arrow right-arrow
      ${isEdge ? 'invisible' : 'visible'}`}
      onClick={onClick}
    >
      <FiChevronRight className="text-2xl" />
    </button>
  );
  
  
const SchoolActivities = () => {
    const { textStyle, BGStyle } = useThemeStyles();

    const SchoolActivities = [
        {
            title: "أوائل المدرسة للفصل الاول",
            details: "أوائل طلبة المدرسة للفصل الاول من العام الدراسي 2022 / 2023",
            NumberOfImage: 5,
            image: p8,
        },
        {
            title: "ورشة عمل لقسم اللغة العربية",
            details: "أوائل طلبة المدرسة للفصل الاول من العام الدراسي 2022 / 2023",
            NumberOfImage: 10,
            image: p3,
        },
        {
            title: "لائحة الشرف",
            details: "أوائل طلبة المدرسة للفصل الاول من العام الدراسي 2022 / 2023",
            NumberOfImage: 3,
            image: p4,
        },
        {
            title: "ورشة عمل لقسم اللغة العربية",
            details: "أوائل طلبة المدرسة للفصل الاول من العام الدراسي 2022 / 2023",
            NumberOfImage: 10,
            image: p3,
        },
        {
            title: "لائحة الشرف",
            details: "أوائل طلبة المدرسة للفصل الاول من العام الدراسي 2022 / 2023",
            NumberOfImage: 3,
            image: p4,
        }
    ];
    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 1024 },
            items: 4,
            slidesToScroll: 1
        },
        LargeDesktop: {
            breakpoint: { max: 1245, min: 1024 },
            items: 3,
            slidesToScroll: 1
        },
        desktop: {
            breakpoint: { max: 1024, min: 640 },
            items: 2,
            slidesToScroll: 1
        },
        mobile: {
            breakpoint: { max: 640, min: 0 },
            items: 1.5,
            slidesToScroll: 1
        }
    };
    return (
        <div id="SchoolActivities" className="mx-32 max-[1200px]:mx-0 pb-16 mt-[40px] max-[900px]:mt-[30px]">
            <div className='max-[900px]:text-center max-[1200px]:mt-[0px]'>
                <MainText
                    Title="أنشطة المدرسة"
                    SubTitle="تتجسد التجارب القيمة والإنجازات العظيمة لطلابنا وأساتذتنا المبدعين في رحلة التعلم وتنمية القيم الإسلامية."
                />
            </div>
            <Carousel
                responsive={responsive}
                arrows={true}
                rtl={true}
                containerClass='max-[640px]:px-4'
                itemClass="my-6 px-4 max-[450px]:px-2 cursor-grab"
                swipeable={true}
                draggable={true}
                removeArrowOnDeviceType={["mobile"]}
                customLeftArrow={<CustomLeftArrow theme={{...BGStyle, ...textStyle}}/>}
                customRightArrow={<CustomRightArrow theme={{...BGStyle, ...textStyle}} />}
            >
                {SchoolActivities.map((activity, index) => (
                    <Card
                        key={index}
                        title={activity.title}
                        details={activity.details}
                        NumberOfImage={activity.NumberOfImage}
                        image={activity.image}
                        id={activity.id}
                    />
                ))}
            </Carousel>
            <div className='flex flex-col justify-center items-center mt-4'>
                <Button title="عرض جميع أنشطة المدرسة" link="/" />
            </div>
            <br />
            <br />
        </div>
    );
};

export default SchoolActivities;
