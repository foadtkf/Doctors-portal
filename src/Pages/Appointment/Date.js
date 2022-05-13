import React, { useState } from 'react';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';

const Date = () => {
  const [date,setDate] =useState(new window.Date())
    return (
      <DayPicker
      mode="single"
      selected={date}
      onSelect={setDate}
      />
    );
};

export default Date;