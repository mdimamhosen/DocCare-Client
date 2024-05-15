import React from "react";
import { FaClock, FaHeadset, FaHouseUser } from "react-icons/fa";
import { Link } from "react-router-dom";

const InfoPage = () => {
  return (
    <section className="container px-2 mx-auto mt-5 md:-mt-32 z-30">
      <div className=" flex gap-2 flex-col lg:flex-row">
        <div className="p-6 bg-blue-700 rounded-lg   text-white w-full">
          <h3 className="text-2xl font-bold mb-4">Why Choose Us?</h3>
          <p className="mb-4">
            At DocCare, we prioritize your well-being above all else. Our
            user-friendly platform ensures that scheduling appointments,
            accessing medical records.
          </p>
          <div className="text-center">
            <Link
              to="/"
              className="inline-block py-2 px-6  bg-white font-bold  text-blue-700 rounded-full transition duration-300 hover:bg-slate-200  "
            >
              Learn More <i className="bx bx-chevron-right"></i>
            </Link>
          </div>
        </div>

        <div className=" bg-white rounded-lg shadow-md p-8    w-full">
          <FaHouseUser className="text-5xl text-blue-700 mb-4 mx-auto" />
          <h4 className="text-xl text-black font-bold mb-4">Appointment</h4>
          <p className="text-gray-600">24 Hours Service</p>
          <p className="text-gray-600 mt-2">
            Our mission is to empower you with the knowledge and support you
            need to make informed decisions about your health.
          </p>
        </div>
        <div className=" bg-white rounded-lg shadow-md p-8   w-full">
          <FaHeadset className="text-5xl text-blue-700 mb-4 mx-auto" />
          <h4 className="text-xl text-black font-bold mb-4">Emergency Cases</h4>
          <h6 className="text-gray-600">+88 01799 532171</h6>
          <p className="text-gray-600 mt-2">
            Welcome to DocCare, your trusted platform for expert medical
            consultation. We understand the importance of timely and reliable
            healthcare .
          </p>
        </div>

        <div className=" bg-white rounded-lg shadow-md p-8 w-full">
          <FaClock className="text-5xl text-blue-700 mb-4 mx-auto" />
          <h4 className="text-xl text-black font-bold mb-4">Working Hours</h4>
          <p className="text-gray-600">Timing schedule</p>
          <ul className="mt-2">
            <li className="text-gray-600 mb-1 flex justify-between">
              <span>Sun - Wed :</span> <span>8:00 - 17:00</span>
            </li>
            <li className="text-gray-600 mb-1 flex justify-between">
              <span>Thus - Fri :</span> <span>9:00 - 17:00</span>
            </li>
            <li className="text-gray-600 mb-1 flex justify-between">
              <span>Sat - Sun :</span> <span>10:00 - 17:00</span>
            </li>
          </ul>
        </div>
      </div>
      {/* <div className=" ">
        <div className="flex flex-wrap items-center">
          <div className="lg:w-1/3     "></div>
          <div className="lg:w-2/3   ">
            <div className="flex flex-wrap     ">
              <div className="w-full lg:w-1/3 px-4 mb-4 lg:mb-0   "></div>
              <div className="w-full lg:w-1/3 px-4 mb-4 lg:mb-0   ">

              </div>

            </div>
          </div>
        </div>
      </div> */}
    </section>
  );
};

export default InfoPage;
