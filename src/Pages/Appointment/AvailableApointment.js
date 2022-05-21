import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import AppointmentCard from './AppointmentCard';
import Bookingmodal from './Bookingmodal';

const AvailableApointment = ({date}) => {
    const [treatment,setTreatment] = useState(null)
    
const formatteddate=format(date,'PP')
//     useEffect(()=>{
// // fetch(`http://localhost:5000/available?date=${formatteddate}`)
// // .then(res=>res.json())
// // .then(data=>setAppointments(data))
// //     },[])

    const {data: appointments, isLoading, refetch}=useQuery(['available', formatteddate],()=>fetch(`http://localhost:5000/available?date=${formatteddate}`).then(res=>res.json()))

    if(isLoading){
        return <Loading></Loading>
    }

    return (
        <div>
        <h3 className='text-2xl text-primary font-bold text-center mb-20'>Available Appointments on {format(date,'PP')}</h3>
        <div className="grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ">
        {appointments.map(appointment=>
        <AppointmentCard
        key={appointment._id}
        appointment={appointment}
        setTreatment={setTreatment}
         >

        </AppointmentCard>)}
</div> 
{
    treatment && <Bookingmodal treatment={treatment} date={date} setTreatment={setTreatment}refetch={refetch}></Bookingmodal>
}
        </div>
    );
};

export default AvailableApointment;