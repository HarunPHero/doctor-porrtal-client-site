import React from 'react';
import { DayPicker } from "react-day-picker";
import 'react-day-picker/dist/style.css';
const AppointBanner = ({date, setDate}) => {

  const gradient = 'to right, #0FCFEC, #19D3AE'
    return (
        <>
        <div style={{
            background:`url(${require("../../images/bg.png")})`,
            backgroundSize:"cover"
        }} className="hero min-h-screen">

        <div className="hero-content flex-col lg:flex-row-reverse">
          <img src={require("../../images/chair.png")} className="max-w-sm rounded-lg shadow-2xl" />
          <div>
          
            <DayPicker
            className='card card-compact p-6 bg-base-100 shadow-xl'
             mode="single"
             required
             selected={date}
             onSelect={setDate}
             modifiersStyles={{
              selected:{backgroundImage:`linear-gradient(${gradient})`, outline:"none"}
              
             }}
            
            />
           
          </div>
          
        </div>
      
      </div>
       
        </>
    );
};

export default AppointBanner;