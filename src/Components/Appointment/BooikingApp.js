import { format } from "date-fns";
import React from "react";
import auth from "../../firebase.init";
import { useAuthState } from "react-firebase-hooks/auth";
import { toast } from "react-toastify";

const BooikingApp = ({ treatment, date, setTreatment, refetch }) => {
  const { _id, name, slots, price } = treatment;
  const [user] = useAuthState(auth);
  const formattedDate = format(date, "PP");
  const handleBooking = (event) => {
    event.preventDefault();
    const slot = event.target.slot.value;
    const phone = event.target.phone.value;
    
    const bookingDetails = {
      treatmentID: _id,
      treatment: name,
      slot: slot,
      patient: user.displayName,
      email:user.email,
      phone: phone,
      date: formattedDate,
      uid:user.uid,
      photo: user.photoURL,
      Price: price
    };

    fetch("https://doctor-portal-backend.onrender.com/booking", {
      method:"POST",
      headers:{
        'content-type':"application/json"
      },
      body: JSON.stringify(bookingDetails)
    })
    .then(res => res.json())
    .then(data => {
      if(data.success){
          toast(`Appointment is set, ${formattedDate} at ${slot}`)
      }
      else{
          toast.error(`Already have an appointment on ${data.booking?.date} at ${data.booking?.slot}`)
      };
      refetch()
      setTreatment(null);
  });
   
  };
  return (
    <div>
      <input type="checkbox" id="booking-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="booking-modal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-2xl text-center text-secondary">
            {treatment.name}
          </h3>
          <form onSubmit={handleBooking} className="text-center">
            <input
              name="date"
              type="text"
              disabled
              value={format(date, "PP")}
              className="input input-bordered w-full max-w-xs m-3"
            />
            <br />
            <select
              name="slot"
              className="select select-bordered w-full max-w-xs"
            >
              {slots.map((slot) => (
                <option>{slot}</option>
              ))}
            </select>
            <br />
            <input
              name="name"
              type="name"
              placeholder="Full name"
              className="input input-bordered w-full max-w-xs m-3"
              disabled
              value={user?.displayName}
            />
            <br />
            <input
              name="phone"
              type="phone"
              placeholder="Phone number"
              className="input input-bordered w-full max-w-xs m-3"
              required
            />
            <br />
            <input
              name="email"
              type="email"
              placeholder="Email"
              className="input input-bordered w-full max-w-xs m-3"
              disabled
              value={user?.email || ""}
            />
            <br />
            <input
              name="email"
              type="email"
              placeholder="Email"
              className="input input-bordered w-full max-w-xs m-3"
              disabled
              value={`$${price}`}
            />
            <br />
            <input
              className="btn  uppercase text-white text-bold bg-gradient-to-r from-neutral to-accent"
              type="submit"
              value="Submit"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default BooikingApp;
