import React, { useContext, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { FaHeart } from "react-icons/fa";
import { Typewriter } from "react-simple-typewriter";
import { CiHeart } from "react-icons/ci";

import { AppContext } from "../ContextProvider/AppContext";
import { InfinitySpin, Triangle } from "react-loader-spinner";
import Reveal, { Fade, Hinge, JackInTheBox, Slide } from "react-awesome-reveal";
const SixCard = () => {
  const [allServices, setAllServices] = useState([]);

  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch(`https://doccarserver-mdimamhosens-projects.vercel.app/services`)
      .then((res) => res.json())
      .then((data) => {
        setAllServices(data);
        setLoading(false);
      });
  }, []);
  React.useEffect(() => {
    document.title = "Home || DocCare";
  });
  return (
    <div className=" mt-5">
      {loading && (
        <>
          <div className="w-screen h-screen flex justify-center items-center ">
            <InfinitySpin
              visible={true}
              width="200"
              color="blue"
              ariaLabel="infinity-spin-loading"
            />
          </div>
        </>
      )}

      <>
        <h1 className="text-lg md:text-3xl lg:text-5xl font-bold capitalize text-center">
          Popular Services
        </h1>
        <div className="grid py-5 container mx-auto px-2 grid-cols-1 md:grid-cols-2 gap-1 lg:gap-4">
          {allServices.slice(0, 6).map((service, index) => (
            <Slide
              key={index}
              cascade
              triggerOnce
              className="border rounded-lg shadow-md overflow-hidden"
            >
              <div>
                <img
                  src={service.image}
                  alt={service.item_name}
                  className="w-full h-48 object-cover"
                />
                <div className="py-2 px-[2px]">
                  <h2 className="text-base lg:text-lg text-center">
                    Service Name: {service.item_name}
                  </h2>
                  <div className="flex item-center flex-col text-center md:flex-row text-xs justify-center gap-1 md:gap-2">
                    <p className="text-xs md:text-sm">
                      Price: ${service.price}
                    </p>
                    <p className="text-xs md:text-sm">
                      Area: {service?.service_area}
                    </p>
                  </div>
                  <p className="text-xs pt-1 w-full mx-auto text-center">
                    Desc: {service.short_description.slice(0, 100)}...
                  </p>
                  <div className="flex flex-col md:flex-row py-2 px-4 items-center justify-between">
                    <p>Provider: {service?.user_name}</p>
                    <div>
                      <img
                        className="rounded-full h-12 w-12 object-cover"
                        src={service?.provider_image}
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="flex flex-col items-center gap-1">
                    <div className="flex items-center space-x-2">
                      <NavLink
                        to={`/service/${service._id}`}
                        className="bg-blue-500 hover:bg-blue-600 transition-all ease-linear duration-200 text-white p-1 px-2 font-semibold focus:outline-none"
                      >
                        View Details
                      </NavLink>
                    </div>
                  </div>
                </div>
              </div>
            </Slide>
          ))}
        </div>

        <div className="flex ">
          <NavLink
            to="/services"
            className="flex text-white font-semibold  mx-auto my-5 p-2 bg-blue-500 hover:bg-blue-600 transition-all ease-linear duration-300 justify-center items-center"
          >
            View All Services
          </NavLink>
        </div>
      </>
    </div>
  );
};

export default SixCard;
