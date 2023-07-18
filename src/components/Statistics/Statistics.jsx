import { useThemeStyles } from '../../Hooks/useThemeStyles';
import { PiStudentBold } from 'react-icons/pi';
import { MdWorkOutline } from 'react-icons/md';
import { TbClockHour8 } from 'react-icons/tb';
import { LiaQuranSolid } from 'react-icons/lia';

function Statistics({ tabData }) {
    const { BGStyle, textStyle } = useThemeStyles();

    return (
        <div className='relative grid grid-cols-2 gap-6 mt-4 mx-4 mb-12 text-start max-[700px]:grid-cols-1'>
        <div
            className="slider-content py-6 pr-4 pl-20 rounded-md shadow-md max-[700px]:w-[100%]"
            style={{ ...textStyle, ...BGStyle, userSelect: 'none' }}
        >
            <div className='flex justify-start items-center gap-4'>
            <PiStudentBold size={30}/>
            <div>
                    {tabData.studentNo}
                    <h1>الطلاب الملتحقين بنا</h1>
                </div>
            </div>
        </div>
        <div
            className="slider-content py-6 px-4 rounded-md shadow-md max-[700px]:w-[100%]"
            style={{ ...textStyle, ...BGStyle, userSelect: 'none' }}
        >
            <div className='flex justify-start items-center gap-4'>
                <MdWorkOutline size={30}/>
                <div>
                    {tabData.workerNo}
                    <h1>العاملين لدينا</h1>
                </div>
            </div>
        </div>
        <div
            className="slider-content py-6 px-4 rounded-md shadow-md max-[700px]:w-[100%]"
            style={{ ...textStyle, ...BGStyle, userSelect: 'none' }}
        >
            <div className='flex justify-start items-center gap-4'>
                <TbClockHour8 size={30}/>
                <div>
                    {tabData.hoursNo}
                    <h1>ساعات الإنتاجية</h1>
                </div>
            </div>
        </div>
        <div
            className="slider-content py-6 px-4 rounded-md shadow-md  max-[700px]:w-[100%]"
            style={{ ...textStyle, ...BGStyle, userSelect: 'none' }}
        >
            <div className='flex justify-start items-center gap-4'>
                <LiaQuranSolid size={30}/>
                <div>
                    {tabData.hafezNo}
                    <h1>حافظ للقرآن</h1>
                </div>
            </div>
        </div>
        </div>
    );
}

export default Statistics;
