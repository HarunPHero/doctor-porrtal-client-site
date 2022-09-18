import React from "react";
import clock from "../../../icons/clock.svg";
import location from "../../../icons/marker.svg";
import phone from "../../../icons/phone.svg";
import InfoCard from "./InfoCard";
const Info = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 px-3">
      <InfoCard cardTitle={"Opening hours"} img={clock} backgroundColor={"bg-gradient-to-r from-secondary to-primary ..."}></InfoCard>
      <InfoCard cardTitle={"Visit our location"}img={location} backgroundColor={"bg-accent"}></InfoCard>
      <InfoCard cardTitle={"Contact us now"} img={phone} backgroundColor={"bg-gradient-to-r from-secondary to-primary ..."}></InfoCard>
      
    </div>
  );
};

export default Info;
