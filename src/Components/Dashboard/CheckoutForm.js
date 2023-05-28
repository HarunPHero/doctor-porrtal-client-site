import React, { useState } from "react";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
const CheckoutForm = ({ appointment }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [clientSecret, setClientSecret] = useState("");
  const [carderr, setCardErr] = useState("");
  const [transitionId, setTransitionId] = useState("");
  const navigate = useNavigate();
  const name = appointment?.patient;
  const email = appointment?.email;
  const id = appointment?._id;
  const price = appointment?.Price;

  useEffect(() => {
    fetch("https://doctor-portal-backend.onrender.com/create-payment-intent", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${localStorage.getItem("accesstoken")}`,
      },
      body: JSON.stringify({ price }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data?.clientSecret) {
          setClientSecret(data.clientSecret);
        }
      });
  }, [price]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!stripe || !elements) {
      return;
    }
    const card = elements.getElement(CardElement);
    if (card === null) {
      return;
    }
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });
    if (error) {
      setCardErr(error.message);
    } else {
      setCardErr("");
    }
    setTransitionId("");

    const { paymentIntent, error: intentErr } = await stripe.confirmCardPayment(
      clientSecret,
      {
        payment_method: {
          card: card,
          billing_details: {
            name: name,
            email: email,
          },
        },
      }
    );
    if (intentErr) {
      setCardErr(intentErr?.message);
    } else {
      setCardErr("");
      setTransitionId(paymentIntent.id);
      toast.success("Congratulation!! Payment successfull");

      const payment = {
        appointment: id,
        transitionId: paymentIntent.id,
      };
      fetch(`https://doctor-portal-backend.onrender.com/booking/${id}`, {
        method: "PATCH",
        headers: {
          "content-type": "application/json",
          authorization: `Bearer ${localStorage.getItem("accesstoken")}`,
        },
        body: JSON.stringify(payment),
      })
        .then((res) => res.json())
        

      navigate("/dashboard/myappointment");
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <CardElement
        options={{
          style: {
            base: {
              fontSize: "16px",
              color: "#424770",
              "::placeholder": {
                color: "#aab7c4",
              },
            },
            invalid: {
              color: "#9e2146",
            },
          },
        }}
      />
      <h2 style={{ color: "red" }}>{carderr}</h2>

      <button
        type="submit"
        className="btn btn-sm btn-secondary mt-5"
        disabled={!stripe || !clientSecret}
      >
        Pay
      </button>
      {transitionId ? (
        <h2 className="text-green-400">
          Your transition ID is:{" "}
          <span className="text-red-500">{transitionId}</span>
        </h2>
      ) : (
        ""
      )}
    </form>
  );
};

export default CheckoutForm;
