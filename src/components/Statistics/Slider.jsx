import { useState } from 'react';
import { FaArrowRight, FaArrowLeft } from 'react-icons/fa';
import { useThemeStyles } from '../../Hooks/useThemeStyles';
import { useSelector } from 'react-redux';
import CarouselSlider from './Carousel';

function Slider() { 
    const tabs = [
        { year: 2016, studentNo: 700, workerNo: 30, hoursNo: 20, hafezNo: 50, 
            img1:"https://fastly.picsum.photos/id/468/200/300.jpg?hmac=_y9LVzJfrmELvOun_dpNOKoPajv8_vT3t3IPS6Jbhk4", 
            img2:"https://loremflickr.com/cache/resized/65535_52749332854_eb1337d5de_b_500_500_nofilter.jpg", 
            img3:"https://plus.unsplash.com/premium_photo-1665311515213-71df675e9741?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=600&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY4OTU0OTE1Ng&ixlib=rb-4.0.3&q=80&w=400", 
            img4:"https://fastly.picsum.photos/id/468/200/300.jpg?hmac=_y9LVzJfrmELvOun_dpNOKoPajv8_vT3t3IPS6Jbhk4",
            img5:"https://loremflickr.com/cache/resized/65535_52226592544_601648835a_k_800_1200_nofilter.jpg",
            img6:"https://plus.unsplash.com/premium_photo-1673795752049-a71fbdd313fe?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=600&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY4OTU0ODgzOA&ixlib=rb-4.0.3&q=80&w=400"
        },
        { year: 2017, studentNo: 800, workerNo: 40, hoursNo: 50, hafezNo: 15, 
            img1:"https://fastly.picsum.photos/id/468/200/300.jpg?hmac=_y9LVzJfrmELvOun_dpNOKoPajv8_vT3t3IPS6Jbhk4", 
            img2:"https://loremflickr.com/cache/resized/65535_52749332854_eb1337d5de_b_500_500_nofilter.jpg", 
            img3:"https://plus.unsplash.com/premium_photo-1665311515213-71df675e9741?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=600&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY4OTU0OTE1Ng&ixlib=rb-4.0.3&q=80&w=400", 
            img4:"https://fastly.picsum.photos/id/468/200/300.jpg?hmac=_y9LVzJfrmELvOun_dpNOKoPajv8_vT3t3IPS6Jbhk4",
            img5:"https://loremflickr.com/cache/resized/65535_52226592544_601648835a_k_800_1200_nofilter.jpg",
            img6:"https://plus.unsplash.com/premium_photo-1673795752049-a71fbdd313fe?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=600&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY4OTU0ODgzOA&ixlib=rb-4.0.3&q=80&w=400"
        },
        { year: 2018, studentNo: 1200, workerNo: 120, hoursNo: 50, hafezNo: 17, 
            img1:"https://fastly.picsum.photos/id/468/200/300.jpg?hmac=_y9LVzJfrmELvOun_dpNOKoPajv8_vT3t3IPS6Jbhk4", 
            img2:"https://loremflickr.com/cache/resized/65535_52749332854_eb1337d5de_b_500_500_nofilter.jpg", 
            img3:"https://plus.unsplash.com/premium_photo-1665311515213-71df675e9741?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=600&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY4OTU0OTE1Ng&ixlib=rb-4.0.3&q=80&w=400", 
            img4:"https://fastly.picsum.photos/id/468/200/300.jpg?hmac=_y9LVzJfrmELvOun_dpNOKoPajv8_vT3t3IPS6Jbhk4",
            img5:"https://loremflickr.com/cache/resized/65535_52226592544_601648835a_k_800_1200_nofilter.jpg",
            img6:"https://plus.unsplash.com/premium_photo-1673795752049-a71fbdd313fe?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=600&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY4OTU0ODgzOA&ixlib=rb-4.0.3&q=80&w=400"
        },
        { year: 2019, studentNo: 750, workerNo: 200, hoursNo: 50, hafezNo: 20, 
            img1:"https://fastly.picsum.photos/id/468/200/300.jpg?hmac=_y9LVzJfrmELvOun_dpNOKoPajv8_vT3t3IPS6Jbhk4", 
            img2:"https://loremflickr.com/cache/resized/65535_52749332854_eb1337d5de_b_500_500_nofilter.jpg", 
            img3:"https://plus.unsplash.com/premium_photo-1665311515213-71df675e9741?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=600&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY4OTU0OTE1Ng&ixlib=rb-4.0.3&q=80&w=400", 
            img4:"https://fastly.picsum.photos/id/468/200/300.jpg?hmac=_y9LVzJfrmELvOun_dpNOKoPajv8_vT3t3IPS6Jbhk4",
            img5:"https://loremflickr.com/cache/resized/65535_52226592544_601648835a_k_800_1200_nofilter.jpg",
            img6:"https://plus.unsplash.com/premium_photo-1673795752049-a71fbdd313fe?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=600&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY4OTU0ODgzOA&ixlib=rb-4.0.3&q=80&w=400"
        },
    ];

    const [activeTab, setActiveTab] = useState(2);
    const [activeSlide, setActiveSlide] = useState(2);
    const { BGColorStyle } = useThemeStyles();
    const stateDark = useSelector((state) => state.darkMode);
    const isLastTab = activeTab === tabs.length - 1;
    const isFirstTab = activeTab === 0;
    const tabData = tabs[activeTab];

    const handleTabClick = (index) => {
        setActiveTab(index);
        setActiveSlide(index);
    }

    return (
        <div className={`mt-[160px] max-[900px]:mt-[200px] w-full flex flex-col justify-start items-center`}>
            <div className="tab-list flex flex-col items-center justify-center">
                <div className="flex items-center justify-center">
                <button
                onClick={() => handleTabClick(activeTab - 1)}
                disabled={activeTab === 0}
                className={`animate-bounce ${isFirstTab ? 'text-[#00000040]' : 'text-white'}`}
                style={{ userSelect: 'none' }}
              >
                <div className="rounded-full p-[8px]" style={BGColorStyle}>
                  <FaArrowRight className='text-[28px] max-[900px]:text-[24px] max-[600px]:text-[18px]'/>
                </div>
              </button>
                    {tabs.map((tab, index) => {
                        const isVisible = index >= activeTab - 1 && index < activeTab + 2;
                        return (
                            <button
                                key={tab.year}
                                className={`tab ${isVisible ? 'active' : ''} ${activeTab === index ? 'font-bold text-[40px] max-[600px]:text-[30px]' : ''}
                                 mx-4 text-[30px] max-[600px]:text-[20px] w-[220px] max-[1200px]:w-[200px] max-[900px]:w-[120px] max-[600px]:w-[100px] max-[550px]:w-[60px]  max-[400px]:w-[53px]`}
                                style={{
                                    display: isVisible ? 'block' : 'none',
                                    marginTop: activeTab === index ? '-20px' : '0px',
                                    color: activeTab === index ? stateDark.darkMode ? 'var(--textDark)' : 'var(--textLight)' : stateDark.darkMode ? '#ffffff80' : '#00000080',
                                    userSelect: 'none',
                                }}
                                onClick={() => handleTabClick(index)}
                            >
                                {tab.year}
                            </button>
                        );
                    })}
                    <button
                    onClick={() => handleTabClick(activeTab + 1)}
                    disabled={activeTab === tabs.length - 1}
                    className={`animate-bounce ${isLastTab ? 'text-[#00000080]' : 'text-white'}`}
                    style={{ userSelect: 'none' }}
                  >
                    <div className="rounded-full p-[8px]" style={BGColorStyle}>
                      <FaArrowLeft className='text-[28px] max-[900px]:text-[24px] max-[600px]:text-[18px]'/>
                    </div>
                  </button>
                </div>
                <hr className="mb-4 w-[70%]" />
            </div>
            <CarouselSlider tabData={tabData} activeSlide={activeSlide}/>
            </div>
    );
}

export default Slider;
