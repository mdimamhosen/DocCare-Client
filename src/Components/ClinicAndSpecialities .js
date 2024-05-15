import React from "react";
import img1 from "../images/specialities/specialities-01.png";
import img2 from "../images/specialities/specialities-02.png";
import img3 from "../images/specialities/specialities-03.png";
import img4 from "../images/specialities/specialities-04.png";
import img5 from "../images/specialities/specialities-05.png";
import { FaCheckDouble } from "react-icons/fa";

const ClinicAndSpecialities = () => {
  return (
    <section className="section section-specialities bg-slate-200-200 ">
      <div className="container mx-auto">
        <div className="mb-5 text-center">
          <h2 className="text-3xl  font-bold">Clinic and Specialities</h2>
        </div>

        <div className="row justify-center px-2 w-full md:w-11/12 mx-auto ">
          <div className="col-md-9">
            <div className="flex justify-between  flex-wrap">
              <div className="speciality-item text-center my-1">
                <div className="speciality-img relative h-24 w-24 shadow-md rounded-full bg-white transition duration-300 ease-in hover:scale-105">
                  <img
                    src={img1}
                    className="w-full h-full object-cover rounded-full"
                    alt=""
                  />
                  <span className="absolute bottom-2 right-2 p-1 bg-white shadow-md rounded-full">
                    <FaCheckDouble className="text-blue-500" />
                  </span>
                </div>
                <p className="mt-3 text-basefont-medium">Urology</p>
              </div>
              <div className="speciality-item text-center my-1">
                <div className="speciality-img relative h-24 w-24 shadow-md rounded-full bg-white transition duration-300 ease-in hover:scale-105">
                  <img
                    src={img2}
                    className="w-full h-full object-cover rounded-full"
                    alt=""
                  />
                  <span className="absolute bottom-2 right-2 p-1 bg-white shadow-md rounded-full">
                    <FaCheckDouble className="text-blue-500" />
                  </span>
                </div>
                <p className="mt-3 text-basefont-medium">Neurology</p>
              </div>
              <div className="speciality-item text-center my-1">
                <div className="speciality-img relative h-24 w-24 shadow-md rounded-full bg-white transition duration-300 ease-in hover:scale-105">
                  <img
                    src={img3}
                    className="w-full h-full object-cover rounded-full"
                    alt=""
                  />
                  <span className="absolute bottom-2 right-2 p-1 bg-white shadow-md rounded-full">
                    <FaCheckDouble className="text-blue-500" />
                  </span>
                </div>
                <p className="mt-3 text-basefont-medium">Orthopedic</p>
              </div>
              <div className="speciality-item text-center my-1">
                <div className="speciality-img relative h-24 w-24 shadow-md rounded-full bg-white transition duration-300 ease-in hover:scale-105">
                  <img
                    src={img4}
                    className="w-full h-full object-cover rounded-full"
                    alt=""
                  />
                  <span className="absolute bottom-2 right-2 p-1 bg-white shadow-md rounded-full">
                    <FaCheckDouble className="text-blue-500" />
                  </span>
                </div>
                <p className="mt-3 text-basefont-medium">Cardiologist</p>
              </div>
              <div className="speciality-item text-center my-1">
                <div className="speciality-img relative h-24 w-24 shadow-md rounded-full bg-white transition duration-300 ease-in hover:scale-105">
                  <img
                    src={img5}
                    className="w-full h-full object-cover rounded-full"
                    alt=""
                  />
                  <span className="absolute bottom-2 right-2 p-1 bg-white shadow-md rounded-full">
                    <FaCheckDouble className="text-blue-500" />
                  </span>
                </div>
                <p className="mt-3 text-basefont-medium">Dentist</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClinicAndSpecialities;
