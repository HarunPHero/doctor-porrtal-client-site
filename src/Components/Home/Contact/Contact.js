import React from 'react';
import PrimaryButton from '../../Shared/PrimaryButton';

const Contact = () => {
    return (
        <section  className='text-center pt-28 shadow-xl'>
             <div style={{
            background:`url(${require("../../../images/appointment.png")})`
        }} className="pt-20">
        <h2 className="text-center text-2xl font-bold text-secondary uppercase">
          contact us
        </h2>
        <h2 className="text-center text-4xl font-bold text-white">
         Always Connect With Us
        </h2>
        <div className='py-6'data-aos="fade-up"
    data-aos-duration="3000">
        <input type="text" placeholder="Email" className="input input-bordered w-full max-w-xs m-3" /><br />
        <input type="text" placeholder="Subject" className="input input-bordered w-full max-w-xs m-3" /><br />
        <textarea type="text" placeholder="Description" className="input input-bordered w-full max-w-xs m-3" /><br />
        <PrimaryButton>SUBMIT</PrimaryButton>
        </div>
        
  
       
      </div>
        </section>
    );
};

export default Contact;