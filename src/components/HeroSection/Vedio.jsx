import React, { useState } from 'react';
import Statistics from './statistics';
import Motifs from '../../assets/Motifs.webp'
import { FaPlay } from 'react-icons/fa';
import { useThemeStyles } from '../../Hooks/useThemeStyles';

const Vedio = () => {
    const [showVideo, setShowVideo] = useState(false);
    const {textIconStyle } = useThemeStyles();
    const handleOpenVideo = () => {
      setShowVideo(true);
    };
    const videoUrl = 'https://www.youtube.com/embed/mm5mtCfdESk';

    return (
      <div className='pt-[75px]'>
      {!showVideo && (
        <button onClick={handleOpenVideo} className="relative w-[100%] h-[100%]">
          <img 
          src={Motifs} 
          alt="Video Poster"
          className="w-[100%] h-[550px] max-lg:h-[500px] max-md:h-[350px] max-sm:h-[300px] max-[400px]:h-[260px]"
          style={{ objectFit: 'cover' }} />
          <div className="absolute inset-0 flex items-center justify-center">
          <button
            className="bg-transparent border-none outline-none cursor-pointer"
            onClick={handleOpenVideo}
          >
            <FaPlay size={60} style={textIconStyle} className="text-2xl" />
          </button>
        </div>
        </button>
      )}
      {showVideo && (
        <div className="video-modal">
          <div>
          <iframe
          className="w-[100%] h-[550px] max-lg:h-[500px] max-md:h-[350px] max-sm:h-[300px] max-[400px]:h-[260px]"
          title="YouTube Video"
          src={`${videoUrl}?controls=0&showinfo=0`}
          allowFullScreen
        ></iframe>
          </div>
        </div>
      )}

      <Statistics />
    </div>

    );
};

export default Vedio;
