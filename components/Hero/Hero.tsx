"use client";

import React from "react";
import CustomButton from "../CustomButton/CustomButton";

const Hero = () => {
  const handleScroll = () => {
    console.log("this is scroll");
  };

  return (
    <div className="hero">
      <div className="flex-1 pt-36 padding-x">
        <h1 className="hero__title">
          Find , Book or Rent a car -quickly and easily.
        </h1>
        <p className="hero__subtitle">
          Streamline your car rental experience with our effortless booking
          process.
        </p>
        <CustomButton
          containerStyles="bg-primary-blue text-white rounded-full mt-10"
          title="Explore Cars"
          handleClick={handleScroll}
        />
      </div>
    </div>
  );
};

export default Hero;
