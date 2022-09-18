import React from "react";
import quote from "../../../icons/quote.svg";
import TestimotionalCard from "./TestimotionalCard";
import people1 from "../../../images/people1.png"
import people2 from "../../../images/people2.png"
import people3 from "../../../images/people3.png"
const Tesimonials = () => {
  return (
    <section className="mt-20 m-5">
      <div className="flex justify-between">
        <div>
          <h1 className="font-bold text-1xl text-secondary">TESTIMONIAL</h1>
          <h1 className="font-bold text-4xl">What's Our Patient Says</h1>
        </div>
        <div>
          <img className="w-24 lg:w-36" src={quote} alt="" />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        <TestimotionalCard img={people1} peopleName="Winson Herry"></TestimotionalCard>
        <TestimotionalCard img={people2} peopleName="Herry Winson"></TestimotionalCard>
        <TestimotionalCard img={people3} peopleName="Tenson Herry"></TestimotionalCard>
      </div>
    </section>
  );
};

export default Tesimonials;
