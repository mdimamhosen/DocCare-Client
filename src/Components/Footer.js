import React from "react";
import { Link } from "react-router-dom";
import img from "../Assets/doctor-patient.png";
import {
  FaAngleDoubleRight,
  FaFacebook,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900   border-red-600 text-white  inset-x-0">
      <div className="container mx-auto py-8 px-2">
        <div className="grid grid-cols-1 md:grid-cols-2   lg:grid-cols-4 gap-8">
          <div className=" ">
            <div className="flex items-center gap-1">
              <img src={img} alt="" className="h-10 w-10  " />
              <h2 className="text-3xl font-bold mb-2  ">DocCare</h2>
            </div>
            <div className="flex py-5 gap-4">
              <Link className="text-white text-2xl">
                <FaFacebook></FaFacebook>
              </Link>
              <Link className="text-white  text-2xl">
                <FaGithub></FaGithub>
              </Link>
              <Link className="text-white text-2xl">
                <FaLinkedin></FaLinkedin>
              </Link>
            </div>
            <p className="mb-4 text-sm md:text-md">
              Welcome to DocCare, your premier destination for comprehensive
              healthcare solutions. At DocCare, we prioritize your well-being by
              providing personalized medical services tailored to your unique
              needs.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-3 lg:col-span-2  ">
            <div>
              <h2 className="text-xl font-bold mb-4">For Patients</h2>
              <ul className="flex flex-col gap-3">
                <li>
                  <Link className="flex items-center text-sm md:textbase">
                    <FaAngleDoubleRight className="mr-1" />
                    Search for Doctors
                  </Link>
                </li>
                <li>
                  <Link
                    to={"/login"}
                    className="flex items-center text-sm md:textbase"
                  >
                    <FaAngleDoubleRight className="mr-1" />
                    Login
                  </Link>
                </li>
                <li>
                  <Link
                    to={"/register"}
                    className="flex items-center text-sm md:textbase"
                  >
                    <FaAngleDoubleRight className="mr-1" />
                    Register
                  </Link>
                </li>
                <li>
                  <Link className="flex items-center text-sm md:textbase">
                    <FaAngleDoubleRight className="mr-1" />
                    Booking
                  </Link>
                </li>
                <li>
                  <Link className="flex items-center text-sm md:textbase">
                    <FaAngleDoubleRight className="mr-1" />
                    Patient Dashboard
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="text-xl font-bold mb-4">For Doctors</h2>
              <ul className="flex flex-col gap-3">
                <li>
                  <Link className="flex items-center text-sm md:textbase">
                    <FaAngleDoubleRight className="mr-1" />
                    Appointments
                  </Link>
                </li>
                <li>
                  <Link
                    to={"/login"}
                    className="flex items-center text-sm md:textbase"
                  >
                    <FaAngleDoubleRight className="mr-1" />
                    Login
                  </Link>
                </li>
                <li>
                  <Link
                    to={"/register"}
                    className="flex items-center text-sm md:textbase"
                  >
                    <FaAngleDoubleRight className="mr-1" />
                    Register
                  </Link>
                </li>
                <li>
                  <Link
                    to={"/dashboard"}
                    className="flex items-center text-sm md:textbase"
                  >
                    <FaAngleDoubleRight className="mr-1" />
                    Doctor Dashboard
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className=" ">
            <h2 className="text-xl font-bold mb-4">Contact Us</h2>
            <div className="mb-4">
              <p>
                <i className="fas fa-map-marker-alt  "></i>
                121,Rupatoli Union office <br />
                Barishal, Bangladesh 03214
              </p>
            </div>
            <p className="mb-2">
              <i className="fas fa-phone-alt  "></i>
              +88 017 99 532172
            </p>
            <p className="mb-0">
              <i className="fas fa-envelope "></i>
              mdimam.cse9.bu@gmail.com
            </p>
          </div>
        </div>
      </div>
      <div className="bg-gray-800 py-4">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-center md:text-left md:mb-0">
              <a href="templateshub.net" className="text-white">
                © {new Date().getFullYear()} All Rights Reserved
              </a>
            </p>
            <ul className="flex gap-4">
              <li>
                <Link className="text-white">Terms and Conditions Policy</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
