import React from "react";
import { Link } from "react-router-dom";
import background from "../../../images/bg.png";
import PrimaryButton from "../../Shared/PrimaryButton";

const Banner = () => {
  return (
    <div
      style={{ backgroundImage: `url(${background})` }}
      className="hero min-h-screen "
    >
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img
          src={require("../../../images/chair.png")}
          className="max-w-sm rounded-lg shadow-2xl"
        />
        <div className="pl-5">
          <h1 className="text-6xl font-bold">Your new smile starts here</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <Link to={"/appointment"}>
            <PrimaryButton>Get Started</PrimaryButton>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Banner;
