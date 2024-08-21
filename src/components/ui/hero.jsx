import React from "react";
import { Button } from "./button";

const Hero = () => {
  return (
    <div className="flex items-center flex-col mx-56 gap-9">
      <h1 className="font-extrabold text-[50px] text-center mt-16">
        <span className="text-[#f56551]">
          Discover Your Next Adventure with AI:
        </span>{" "}
        <p>Personalized Itineraries at Your Fingertips</p>
      </h1>
      <p className="text-xl font-normal text-gray-500 text-center">
        Your personal trip planner and travel creator, creating custom
        itinerraries tailored to your interest and budget.
      </p>

      <Button>Get Started, It's Free</Button>
    </div>
  );
};

export default Hero;
