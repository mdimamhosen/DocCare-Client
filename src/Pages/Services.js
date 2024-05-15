import React, { useContext, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { Typewriter } from "react-simple-typewriter";
import { InfinitySpin } from "react-loader-spinner";
import { Slide } from "react-awesome-reveal";
import { AppContext } from "../ContextProvider/AppContext";

const Services = () => {
  const [allServices, setAllServices] = useState([]);
  const [filteredServices, setFilteredServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showMore, setShowMore] = useState(false);

  useEffect(() => {
    fetch(`https://doccarserver-mdimamhosens-projects.vercel.app/services`)
      .then((res) => res.json())
      .then((data) => {
        setAllServices(data);
        setFilteredServices(data.slice(0, 8)); // Initially show first 8 services
        setLoading(false);
      });
  }, []);

  React.useEffect(() => {
    document.title = "All Services || DocCare";
  });

  const changeHandler = (e) => {
    const searchValue = e.target.value.toLowerCase();
    const filtered = allServices.filter((service) =>
      service.item_name.toLowerCase().includes(searchValue)
    );
    setFilteredServices(filtered);
  };

  const handleSeeMore = () => {
    setShowMore(!showMore);
    if (showMore) {
      setFilteredServices(allServices.slice(0, 8));
    } else {
      setFilteredServices(allServices);
    }
  };

  if (loading) {
    return (
      <div className="w-screen h-screen flex justify-center items-center">
        <InfinitySpin
          visible={true}
          width="200"
          color="blue"
          ariaLabel="infinity-spin-loading"
        />
      </div>
    );
  }

  return (
    <div className="font-mono mt-5">
      <div className="text-center">
        <h1 className="text-lg md:text-xl lg:text-3xl font-bold capitalize">
          <Typewriter
            words={[
              "Healthcare Professional",
              "Specialist",
              "Practitioner",
              "Expert",
            ]}
            loop={0}
            cursor
            cursorStyle="_"
            color="blue"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
          />
          &nbsp;
          <br /> Consultation Services
        </h1>
      </div>
      <div className=" flex container px-2 mt-2 mx-auto">
        <input
          type="text"
          name="search"
          id="search"
          className="border block py-1 md:py-2 outline-none px-1 md:px-4 rounded-lg text-sm md:text-base bg-slate-100 text-black "
          placeholder="Search..."
          onChange={changeHandler}
        />
      </div>
      <div className="grid py-4 container mx-auto px-2 grid-cols-1 lg:grid-cols-3 xl:grid-cols-4 gap-1 lg:gap-4">
        {filteredServices.map((service, index) => (
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
                <div className="flex item-center flex-col text-center md:flex-row text-xs justify-center gap-1 md:gap-2 ">
                  <p className=" text-xs md:text-sm">Price: ${service.price}</p>
                  <p className=" text-xs md:text-sm">
                    Area: {service?.service_area}
                  </p>
                </div>{" "}
                <p className="text-xs pt-1 w-full mx-auto  text-center">
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
      <div className="flex justify-center py-3">
        <button
          onClick={handleSeeMore}
          className="bg-gray-500 hover:bg-gray-600 transition-all ease-linear duration-200 text-white p-2 px-4 font-semibold focus:outline-none rounded"
        >
          {showMore ? "See Less" : "See More"}
        </button>
      </div>
    </div>
  );
};

export default Services;
