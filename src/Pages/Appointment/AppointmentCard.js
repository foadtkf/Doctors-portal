import React from 'react';
import PrimaryButton from '../Shared/PrimaryButton';

const AppointmentCard = ({appointment,setTreatment}) => {
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
  <div className="card-body text-center">
    <h2 className="text-xl text-primary text-center">{appointment.name}</h2>
    <p>{appointment.slots[0]}</p>
    <p>{appointment.slots.length} SPACES AVAILABLE</p>
    <div className="card-actions justify-center">
    <label htmlFor="booking-modal" onClick={()=>setTreatment(appointment)} className="btn modal-button btn-primary text-white">Book Appointment</label>
    </div>
  </div>
</div>
    );
};

export default AppointmentCard;