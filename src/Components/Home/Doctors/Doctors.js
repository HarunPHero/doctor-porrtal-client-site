import React from "react";
import { useState } from "react";
import { useEffect } from "react";

const Doctors = () => {
  const [doctors, setDoctors] = useState([]);
  useEffect(() => {
    fetch(`https://vast-wave-13931.herokuapp.com/doctor`)
      .then((res) => res.json())
      .then((data) => setDoctors(data));
  }, []);
  return (
    <section className="m-10">
      {doctors.length > 0 ? (
        <>
          <div>
            <h1 className="font-bold text-2xl text-secondary text-center uppercase">
              Our doctors
            </h1>
            <h1 className="font-bold text-4xl text-center">Special Dentists</h1>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-5 px-3">
            {doctors.map((d) => (
              <div
                key={d._id}
                className="card card-compact bg-base-100 shadow-xl mt-5"
              >
                <figure>
                  <img className="w-52" src={d.photo} alt="Shoes" />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">
                    Name: <span className="text-primary">{d.name}</span>
                  </h2>
                  <h2 className="text-1xl font-bold">
                    Email: <span className="text-neutral">{d.email}</span>
                  </h2>
                  <h2 className="text-1xl font-bold">
                    Speciality:{" "}
                    <span className="text-secondary"> {d.speciality}</span>
                  </h2>
                </div>
              </div>
            ))}
          </div>
        </>
      ) : (
        ""
      )}
    </section>
  );
};

export default Doctors;
