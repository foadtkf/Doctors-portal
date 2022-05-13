import React from 'react';
import PrimaryButton from '../Shared/PrimaryButton';

const AppointmentCard = ({appointment}) => {
    return (
        <div class="card w-96 bg-base-100 shadow-xl">
  <div class="card-body text-center">
    <h2 class="text-xl text-primary text-center">{appointment.name}</h2>
    <p>{appointment.time}</p>
    <p>{appointment.spaces} SPACES AVAILABLE</p>
    <div class="card-actions justify-center">
      <PrimaryButton>Book Appointment</PrimaryButton>
    </div>
  </div>
</div>
    );
};

export default AppointmentCard;