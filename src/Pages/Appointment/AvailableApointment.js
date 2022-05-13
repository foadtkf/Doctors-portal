import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import AppointmentCard from './AppointmentCard';

const AvailableApointment = ({date}) => {
    const [appointments,setAppointments] = useState([])
    useEffect(()=>{
fetch('appointment.json')
.then(res=>res.json())
.then(data=>setAppointments(data))
    },[])
    return (
        <div>
        <h3 className='text-2xl text-primary font-bold text-center mb-20'>Available Appointments on {format(date,'PP')}</h3>
        <div class="grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ">
        {appointments.map(appointment=><AppointmentCard key={appointment._id} appointment={appointment}></AppointmentCard>)}
</div> 
        </div>
    );
};

export default AvailableApointment;