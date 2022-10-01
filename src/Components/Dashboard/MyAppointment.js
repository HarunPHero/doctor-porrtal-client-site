import { signOut } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";

const MyAppointment = () => {
  const [appointment, setAppointment] = useState([]);
  const [user] = useAuthState(auth);
  const navigate = useNavigate();
  useEffect(() => {
    fetch(`http://localhost:5000/booking?uid=${user.uid}`, {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accesstoken")}`,
      },
    })
      .then((res) => {
        if (res.status === 401 || res.status === 403) {
          signOut(auth);
          localStorage.removeItem("accesstoken");
          navigate("/login");
        }
        return res.json();
      })
      .then((data) => setAppointment(data));
  }, [user]);
  return (<>
   <h2 className="text-2xl font-bold mb-5" style={{ color: "purple" }}>
         My Appointment
        </h2>
    <div className="grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 gap-5 px-3">
      {appointment.map((a) => 
        <div className="card bg-green-50 shadow-xl">
          <div className="card-body">
            <h2 className="text-2xl font-bold text-center">{a.treatment}</h2>
            <p>Patient Name: {a.patient}</p>
            <p>Booked Date: {a.date}</p>
            <p>Booked Time: {a.slot}</p>
            {(a.Price && !a.paid) && <Link to={`/dashboard/payment/${a._id}`}><button className='btn btn-xs btn-secondary'>Proceed to checkout</button></Link>}
            {(a.Price && a.paid) && <div>
              <Link to={``}><button className='btn btn-xs btn-primary' disabled>Paid</button></Link>
              <h2 className="text-green-400">Transition ID: <span className="text-red-500">{a.transitionId}</span></h2>
              </div>}
          </div>
        </div>
      )}

      {/* <tr>
            <th>{index + 1}</th>
            <td>{a.patient}</td>
            <td>{a.slot}</td>
            <td>{a.date}</td>
            <td>{a.treatment} <br />
            {(a.Price && !a.paid) && <Link to={`/dashboard/payment/${a._id}`}><button className='btn btn-xs btn-secondary'>Proceed to checkout</button></Link>}
            {(a.Price && a.paid) && <Link to={``}><button className='btn btn-xs btn-primary' disabled>Paid</button></Link>}
            </td>
          </tr> */}
    </div>
    </>
  );
};

export default MyAppointment;
