import React from 'react';
import chair from '../../assets/images/chair.png'
import Date from './Date';
const AppointmentBanner = ({date,setDate}) => {
    return (
        <div className="hero min-h-screen gap-10 bg-[url('/src/assets/images/bg.png')] mb-32">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <img src={chair} className="max-w-sm rounded-lg shadow-2xl" alt='' />
    <div>
      <Date date={date} setDate={setDate}></Date>
    </div>
  </div>
</div>
    );
};

export default AppointmentBanner;