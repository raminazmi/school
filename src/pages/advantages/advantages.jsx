import React from 'react';
import MainText from "../../components/MainText";
import TimeLine from "../../components/TimeLine/TimeLine";

function Advantages() {
    return (
        <div id="advantages"  className='mx-32 max-[1200px]:mx-8 max-[600px]:mx-4 pb-20 grid grid-cols-2 max-[1200px]:grid-cols-1 gap-6 mt-[80px] max-[900px]:mt-[60px]'>
        <div className='max-[900px]:text-center mt-[70px] max-[1200px]:mt-[0px]'>
            <MainText Title="أهم ما يميزنا"
                SubTitle="تسعى مدرسة المهاجرين الشرعية إلى تنشئة جيل واعٍ مبدع، متمسك بدينه، معتّزٍ منتمٍ لوطنه، متسلح بالعلم والمعرفة، مواكب للتقدم العلمي والتقني، في بيئة مدرسية فاعلة محفزة على التفكير واإلبداع وفق معايير الجودة."
            />
        </div>
        <TimeLine />
        </div>
    );
}

export default Advantages;