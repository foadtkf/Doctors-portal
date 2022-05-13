import React, { useState } from 'react';
import Footer from '../Home/Footer';
import AppointmentBanner from './AppointmentBanner';
import AvailableApointment from './AvailableApointment';

const Appointment = () => {
    const [date,setDate] =useState(new window.Date())
    return (
        <div>
        <AppointmentBanner date={date} setDate={setDate}></AppointmentBanner>
        <AvailableApointment date={date}></AvailableApointment>
            <Footer></Footer>
        </div>
    );
};

export default Appointment;