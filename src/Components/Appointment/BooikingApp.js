import { format } from "date-fns";
import React from "react";

const BooikingApp = ({treatment, date}) => {
    
  return (
    <div>
     <input type="checkbox" id="booking-modal" className="modal-toggle" />
<div className="modal">
  <div className="modal-box relative">
    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
    <h3 className="text-2xl text-center text-secondary">{treatment.name}</h3>
    <form className="text-center">
    <input type="text" disabled value={format(date, 'PP')} className="input input-bordered w-full max-w-xs m-3" /><br />
    <select className="select select-bordered w-full max-w-xs">
  <option disabled selected>Who shot first?</option>
  <option>Han Solo</option>
  <option>Greedo</option>
</select><br />
        <input type="text" placeholder="Subject" className="input input-bordered w-full max-w-xs m-3" /><br />
        <input type="date" placeholder="Subject" className="input input-bordered w-full max-w-xs m-3" /><br />

    </form>
  </div>
</div>
    </div>
  );
};

export default BooikingApp;
