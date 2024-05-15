import React from "react";
import img from "../images/doc/doc1.jpg";
import img2 from "../images/doc/doc4.jpg";
import img3 from "../images/doc/doctor 5.jpg";
import { Link } from "react-router-dom";

const Service = () => {
  return (
    <section className="container mx-auto py-5 px-2 my-10">
      <div className="mb-5 text-center">
        <h2 className="text-3xl font-bold">Services</h2>
        <p className="text-sm lg:text-base">
          "Empowering individuals with convenient access to professional medical
          guidance and care."
        </p>
      </div>
      <div className="  mx-auto shadow-xl lg:p-3 p-2    border">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
          <div className=" ">
            <div className="service-img ">
              <img
                src={img}
                alt=""
                className="w-full h-[250px] md:h-[400px]  rounded-lg shadow-lg "
              />
              <img
                src={img2}
                alt=""
                className="w-full h-[250px] md:h-[400px]  mt-4 rounded-lg shadow-lg"
              />
            </div>
          </div>
          <div className=" ">
            <div className="service-img">
              <img
                src={img3}
                alt=""
                className="w-full h-[250px] md:h-[400px]   rounded-lg shadow-lg"
              />
            </div>
          </div>
          <div className="mb-4   w-full">
            <div className="  px-4">
              <h2 className="text-2xl font-bold text-blue-900 mb-2">
                Personal care <br />
                healthy living
              </h2>
              <p className="mt-4 mb-5 text-secondary  ">
                "We offer premier medical services, providing unparalleled
                expertise and compassionate care, ensuring every patient
                receives personalized attention and effective treatment."
              </p>
              <Link
                to={"/services"}
                className="btn-get-started font-bold inline-block py-2 px-6 bg-blue-500 text-white rounded-lg transition duration-300 ease-in-out hover:bg-blue-600"
              >
                Services
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Service;
