import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Statistics from './Statistics';
import Students from './Students';
import { Taps, Tap } from "../../components/Taps";

function CarouselSlider({ tabData }) {

    return (
        <Carousel
            showThumbs={false}
            showStatus={false}
            showArrows={false}
            showIndicators={false}
        >
            <Taps contentClassName="StyleTaps">
                <Tap component={<Statistics tabData={tabData} />} active>إحصائيات العام</Tap>
                <Tap component={<Students tabData={tabData} />} contentClassName="w-[100%]">أوائل الطلبة</Tap>
            </Taps>
        </Carousel>
    );
}

export default CarouselSlider;
