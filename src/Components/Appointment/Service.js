import React from 'react';
import PrimaryButton from '../Shared/PrimaryButton';

const Service = ({service, setTreatment}) => {
    const {name, slots} = service
    return (
        <div>
            <div className="card bg-base-100 shadow-xl m-5 text-center">
  <div className="card-body">
    <h2 className='text-2xl'>{name}</h2>

    <p>{slots.length > 0 ? <span>
{slots[0]}
    </span>: 
    <span>
        <h1>Try again another day</h1>
        </span>}</p>
    <p>{slots.length} {slots.length >  1 ? 'spaces': "space"} available</p>
    
    <label onClick={()=> setTreatment(service)} for="booking-modal" className="btn btn-primary uppercase text-white text-bold bg-gradient-to-r from-secondary to-primary ...">Book Appointment</label>

  </div>
</div>
        </div>
    );
};

export default Service;