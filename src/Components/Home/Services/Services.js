import React from "react";
import ServiceCard from "./ServiceCard";
import flouride from "../../../images/fluoride.png";
import cavity from "../../../images/cavity.png";
import whitening from "../../../images/whitening.png";
import PrimaryButton from "../../Shared/PrimaryButton";

const Services = () => {
  return (
    <div className="pt-28">
      <h2 className="text-center text-2xl font-bold text-secondary uppercase">
        Our Services
      </h2>
      <h2 className="text-center text-4xl font-bold text-accent">
        Services We Provide
      </h2>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 m-5">
        <ServiceCard
          img={flouride}
          cardTitle={"Flouride treatment"}
        ></ServiceCard>
        <ServiceCard img={cavity} cardTitle={"Cavity filling"}></ServiceCard>
        <ServiceCard
          img={whitening}
          cardTitle={"Teeth whitening"}
        ></ServiceCard>
      </div>

      <div className="treatment px-12">
      <div className="hero min-h-screen">
  <div className="hero-content flex-col lg:flex-row">
    <img src={require("../../../images/treatment.png")} className="max-w-sm" />
    <div className=" px-6">
      <h1 className="text-4xl font-bold">Exceptional Dental Care, On Your Terms</h1>
      <p className="py-6 text-neutral">Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae quam fugiat eum doloremque consequuntur molestias iste, praesentium commodi quibusdam sint. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit, ipsa! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere, nobis.</p>
  <PrimaryButton>Learn more</PrimaryButton>
    </div>
  </div>
</div>
      </div>
    </div>
  );
};

export default Services;
