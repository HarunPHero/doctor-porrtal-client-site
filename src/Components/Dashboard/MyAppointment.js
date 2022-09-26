import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';

const MyAppointment = () => {
    const [appointment, setAppointment] = useState([]);
    const [user] = useAuthState(auth);
    const navigate = useNavigate()
    useEffect(()=>{
        fetch(`https://vast-wave-13931.herokuapp.com/booking?uid=${user.uid}`,{
          method:'GET',
          headers:{
            'authorization': `Bearer ${localStorage.getItem('accesstoken')}`
          }
        })
        .then(res => {
          if(res.status === 401 || res.status === 403){
            signOut(auth);
            localStorage.removeItem('accesstoken')
            navigate('/login')

          }
        return res.json()
        })
        .then(data => setAppointment(data))
    },[user])
    return (
        <div className="overflow-x-auto">
  <table className="table w-full">
   
    <thead>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Time</th>
        <th>Date</th>
        <th>Service</th>
      </tr>
    </thead>
    <tbody>
     
      {
        appointment.map((a, index) => <tr>
            <th>{index + 1}</th>
            <td>{a.patient}</td>
            <td>{a.slot}</td>
            <td>{a.date}</td>
            <td>{a.treatment}</td>
          </tr>)
      }
     
     
    </tbody>
  </table>
</div>
    );
};

export default MyAppointment;