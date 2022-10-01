
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import {  useQuery } from 'react-query';
import { Link, useParams } from 'react-router-dom';
import Loading from '../Shared/Loading';
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from './CheckoutForm';

const stripePromise = loadStripe(
  "pk_test_51LnP9rIqoIiB8lodbIKLgD904mh6DPuymiNEyAJsANHEE6p402Koei46NrQO1tNJnmkUeGSGHQOPk9k10MVRZkcZ00gX0f6yFI"
);

const Payment = () => {
    
    const {id} = useParams();
    const url = `http://localhost:5000/booking/${id}`;
    const {data:appointment, isLoading} = useQuery(['booking', id], ()=> fetch(url,{
        method:'GET',
        headers:{
          'authorization': `Bearer ${localStorage.getItem('accesstoken')}`
        }
      }).then(res => res.json())
      
     
      )
      
      if(isLoading){
        return <Loading></Loading>
      }
    return (
        <>
         <div  className="card shadow-xl bg-green-200 text-primary-content">
            <div className="card-body">
            <p className='card-title'>Hello <span style={{color:"red"}}>{appointment?.patient}</span></p>
              <h2 className="card-title text-center">Ready to pay for<span className='text-orange-400'>{appointment?.treatment}</span></h2>
              
              <p className='text-1xl font-bold'>You need to pay <span style={{color:"blue"}}>${appointment?.Price}</span> to book this treatment</p>
             
            </div>
          </div>
        
        <div className="card mt-10 flex-shrink-0 w-50 max-w-md shadow-2xl bg-base-100">
      <div className="card-body">
        <h2 className="card-title m-2">Card Details</h2>
        <Elements stripe={stripePromise}>
          <CheckoutForm appointment={appointment}></CheckoutForm>
        </Elements>
      </div>
    </div>
        </>
       
    );
    
};

export default Payment;