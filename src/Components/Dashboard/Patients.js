import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import PatientRow from './PatientRow';

const Patients = () => {
  const { data: patients, isLoading, refetch} = useQuery('users', () => fetch('https://vast-wave-13931.herokuapp.com/patients', {
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
  <table className="table w-full">
    
    <thead>
      <tr>
        <th>
          SI no.
        </th>
        <th>Name</th>
        <th>Time</th>
        <th>Date</th>
        <th>Service</th>
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