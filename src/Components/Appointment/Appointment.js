import React, { useState } from 'react';
import AppointBanner from './AppointBanner';
import AppointmentAvailable from './AppointmentAvailable';

const Appointment = () => {
    const [date, setDate] = useState(new Date())
    return (
        <div>
           <AppointBanner date={date} setDate={setDate}></AppointBanner>
           <AppointmentAvailable date={date} setDate={setDate}></AppointmentAvailable>
        </div>
    );
};

export default Appointment;