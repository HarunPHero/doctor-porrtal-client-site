import React from "react";

const InfoCard = ({ img, cardTitle, backgroundColor }) => {
  return (
    <div className={`card md:card-side text-white shadow-xl ${backgroundColor}`}>
      <figure className="pl-5">
        <img src={img} alt="Album" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{cardTitle}</h2>
        <p>Click the button to listen on Spotiwhy app.</p>
      </div>
    </div>
  );
};

export default InfoCard;
