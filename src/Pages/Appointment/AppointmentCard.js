import React from 'react';
import PrimaryButton from '../Shared/PrimaryButton';

const AppointmentCard = ({appointment,setTreatment}) => {
    return (
        <div class="card w-96 bg-base-100 shadow-xl">
  <div class="card-body text-center">
    <h2 class="text-xl text-primary text-center">{appointment.name}</h2>
    <p>{appointment.slots[0]}</p>
    <p>{appointment.slots.length} SPACES AVAILABLE</p>
    <div class="card-actions justify-center">
    <label for="booking-modal" onClick={()=>setTreatment(appointment)} class="btn modal-button btn-primary text-white">Book Appointment</label>
    </div>
  </div>
</div>
    );
};

export default AppointmentCard;