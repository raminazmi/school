import React from 'react';

function Students({ tabData }) {

    return (
        <div className="grid grid-cols-2 max-[400px]:grid-cols-1 max-[400px]:w-[85vw]  md:grid-cols-3 gap-4 mb-12">
        <div>
        <img className="h-[260px] max-[400px]:h-[200px] max-w-full rounded-lg" style={{ objectFit: 'cover' }} src={tabData.img1} alt="" />
        </div>
        <div>
        <img className="h-[260px] max-[400px]:h-[200px] max-w-full rounded-lg" style={{ objectFit: 'cover' }} src={tabData.img2} alt="" />
        </div>
        <div>
        <img className="h-[260px] max-[400px]:h-[200px] max-w-full rounded-lg" style={{ objectFit: 'cover' }} src={tabData.img3} alt="" />
        </div>
        <div>
        <img className="h-[260px] max-[400px]:h-[200px] max-w-full rounded-lg" style={{ objectFit: 'cover' }} src={tabData.img4} alt="" />
        </div>
        <div>
        <img className="h-[260px] max-[400px]:h-[200px] max-w-full rounded-lg" style={{ objectFit: 'cover' }} src={tabData.img5} alt="" />
        </div>
        <div>
        <img className="h-[260px] max-[400px]:h-[200px] max-w-full rounded-lg" style={{ objectFit: 'cover' }} src={tabData.img6} alt="" />
        </div>
    </div>
    
    );
}

export default Students;
