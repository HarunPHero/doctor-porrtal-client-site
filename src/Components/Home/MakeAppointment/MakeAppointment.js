import React from "react";
import doctor from "../../../images/doctor.png";
import appointment from "../../../images/appointment.png";
import PrimaryButton from "../../Shared/PrimaryButton";
const MakeAppointment = () => {
  return (
    <section  style={{
        background: `url(${appointment})`,
        backgroundSize:"cover"
      }}>
      <div
       
        className="hero mt-10"
      >
        <div className="hero-content flex-col lg:flex-row">
          <div><img src={doctor} className="max-w-sm mt-[-100px] hidden lg:block" alt="" /></div>
          <div>
            <h1 className="text-1xl font-bold text-secondary">APPOINTMENT</h1>
            <h1 className="text-4xl text-white">Make Your Appointment Today</h1>
            <p className="py-6 text-neutral">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis
              non hic soluta vitae commodi quo eligendi ipsa amet dolor error
              voluptatibus magni animi facilis reiciendis maxime, beatae veniam
              eos excepturi quidem delectus id nihil? Illum aperiam quam ad et
              quasi.
            </p>
            <PrimaryButton>learn more</PrimaryButton>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MakeAppointment;
