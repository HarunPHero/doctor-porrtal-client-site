import React from "react";

const TestimotionalCard = ({ img, peopleName }) => {
  return (
    <div className="card shadow-xl"data-aos="fade-up"
    data-aos-duration="3000">
      <div className="card-body">
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores
          maiores voluptas nemo labore. Voluptatum, iste? Perferendis natus
          excepturi fugiat aut!
        </p>
        <div className="card-actions">
          <div className="avatar">
            <div className="w-12 rounded-full">
              <img src={img} alt="" />
            </div>

            
          </div>
          <div className="pl-2">
          <h1 className="text-1xl font-bold text-primary">
              {peopleName}
            </h1>
            <h1 className="text-neutral">California</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimotionalCard;
