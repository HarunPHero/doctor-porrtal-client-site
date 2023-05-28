import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import PatientRow from './PatientRow';

const Patients = () => {
  const { data: patients, isLoading, refetch} = useQuery('users', () => fetch('https://doctor-portal-backend.onrender.com/patients', {
    method: 'GET',
    headers:{
        authorization: `Bearer ${localStorage.getItem('accesstoken')}`
    }
}).then(res => res.json()));
if (isLoading) {
    return <Loading></Loading>
}

    return (
        <div className="overflow-x-auto w-full">
           <h2 className="text-2xl font-bold" style={{ color: "purple" }}>
          All Patients
        </h2>
  <table className="table w-full">
    
    <thead>
      <tr>
        <th>
          SI no.
        </th>
        <th>Email</th>
        <th></th>
        <th></th>
        
      </tr>
    </thead>
    <tbody>
   {
    patients.map((patient, index) => <PatientRow patient = {patient} index={index} uid={patient.uid} refetch={refetch}></PatientRow>
       )
   }
     
    </tbody>
    
  </table>
</div>
    );
};

export default Patients;