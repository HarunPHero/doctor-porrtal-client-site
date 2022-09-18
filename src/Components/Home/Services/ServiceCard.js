import React from 'react';

const ServiceCard = ({img, cardTitle}) => {
    return (
        <div className="card bg-base-100 shadow-xl text-center">
        <figure className='p-5'><img src={img}/></figure>
        <div className="card-body">
          <h2 className="text-center text-2xl font-bold">{cardTitle}</h2>
          <p className='text-neutral'>If a dog chews shoes whose shoes does he choose?</p>
          
        </div>
      </div>
    );
};

export default ServiceCard;