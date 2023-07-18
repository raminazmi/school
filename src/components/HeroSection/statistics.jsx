import React from 'react';
import { useThemeStyles } from '../../Hooks/useThemeStyles';
import Statistic from './Statistic';

const Vedio = () => {
    const { BGStyle, BorderStyle } = useThemeStyles();

    return (
        <div className='relative'>
            <div
                style={{ ...BorderStyle, ...BGStyle }}
                className={`rounded-md absolute left-1/2 -bottom-[100px] transform 
    -translate-x-1/2 -translate-y-1/2 w-[70vw] max-[450px]:w-[90vw] py-6 bg-white
    flex justify-between items-center px-14 gap-4 max-[1050px]:grid max-[1050px]:grid-cols-2 max-[1050px]:-bottom-[260px] max-[700px]:-bottom-[220px] 
    max-[700px]:py-4 max-[700px]:px-6
    `}>
                <Statistic number={9000} title="طالب وطالبة"/>
                <Statistic number={20} title="مدرس و مدرسة"/>
                <Statistic number={70} title="حافظ و حافظة"/>
                <Statistic number={80000} title="مثبت للقرآن الكريم"/>
            </div>
        </div>
    );
};

export default Vedio;
