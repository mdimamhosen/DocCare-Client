import React from "react";
import "./HeroSection.css";
import { Link, NavLink } from "react-router-dom";

const HeroSection = () => {
  return (
    <div>
      <section id="hero" className="d-flex align-items-center relative -z-40">
        <div className="absolute top-[40%] left-[40%] -translate-x-1/2 -translate-y-1/2 ">
          <div className="container relative">
            <div>
              <p className="text-black">TOTAL HEALTH CARE SOLUTION</p>
              <h1 className="lg:text-5xl md:text-3xl text-2xl font-bold text-[#0b579e]">
                Your Most Trusted <br />
                Health Partner
              </h1>
              <p className="text-[#2c4964] text-xs lg:text-sm py-4 lg:w-[70%] ">
                DocCare offers comprehensive online doctor consultation
                services, providing you with access to trusted healthcare
                professionals anytime.
              </p>
            </div>
            <div className=" mt-2">
              <NavLink
                to="/services"
                className="btn-get-started scrollto bg-blue-500 hover:bg-blue-600 transition-all duration-300 ease-linear  font-bold text-white rounded  p-2"
              >
                Get Started
              </NavLink>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
export default HeroSection;
