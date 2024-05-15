import React, { useContext, useState, useEffect } from "react";
import { InfinitySpin } from "react-loader-spinner";
import { NavLink } from "react-router-dom";
import { AppContext } from "../ContextProvider/AppContext";

const Doctors = () => {
  const { setThemeOvserve } = useContext(AppContext);
  const [doctors, setDoctors] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showAll, setShowAll] = useState(false);
  const [filteredDoctors, setFilteredDoctors] = useState([]);

  useEffect(() => {
    fetch(`https://doccarserver-mdimamhosens-projects.vercel.app/doctors`)
      .then((res) => res.json())
      .then((data) => {
        setDoctors(data);
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    document.title = "Doctors || DocCare";
  }, []);

  const handleSeeMore = () => {
    setShowAll(true);
  };

  const handleSeeLess = () => {
    setShowAll(false);
  };

  const changeHandler = (e) => {
    const searchValue = e.target.value.toLowerCase();
    const filtered = doctors.filter((doctor) =>
      doctor.name.toLowerCase().includes(searchValue)
    );
    setFilteredDoctors(filtered);
  };

  const displayDoctors = showAll ? doctors : doctors.slice(0, 8);

  const doctorsToDisplay =
    filteredDoctors.length > 0 ? filteredDoctors : displayDoctors;

  return (
    <div className="container mx-auto px-2 my-4">
      <h1 className="text-3xl text-center md:text-start font-semibold px-2 mt-8 mb-3">
        Our Doctors
      </h1>
      <p class="text-xs w-11/12 md:w-[60%] text-start mt-2 mb-4 px-2  ">
        Welcome to our doctors list page, where you can find information about
        the experienced and dedicated medical professionals who are here to
        assist you with your healthcare needs. Our team of qualified doctors
        specializes in various fields of medicine and is committed to providing
        high-quality care and personalized treatment options to each patient.
      </p>

      <div className="flex container px-2 mt-2 mx-auto">
        <input
          type="text"
          name="search"
          id="search"
          className="border block py-1 md:py-2 outline-none px-1 md:px-4 rounded-lg text-sm md:text-base bg-slate-100 text-black placeholder:text-sm"
          placeholder="Search your doctor..."
          onChange={changeHandler}
        />
      </div>
      {loading ? (
        <div className="h-[70vh] flex justify-center items-center">
          <InfinitySpin
            visible={true}
            width="200"
            color="blue"
            ariaLabel="infinity-spin-loading"
          />
        </div>
      ) : (
        <div className="flex justify-center">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {doctorsToDisplay.map((doctor, index) => (
              <div
                key={index}
                className="w-full border max-w-md px-8 py-4 mt-16 bg-white rounded-lg shadow-lg dark:bg-gray-800"
              >
                <div className="flex justify-center -mt-16 md:justify-end">
                  <img
                    className="object-cover p-1 w-20 h-20 border-2 border-blue-500 rounded-full dark:border-blue-400"
                    alt="Doctor Avatar"
                    src={doctor.image}
                  />
                </div>

                <h2 className="mt-2 text-xl font-semibold text-gray-800 dark:text-white md:mt-0">
                  {doctor.name}
                </h2>

                <p className="mt-2 text-sm text-gray-600 dark:text-gray-200">
                  {doctor.description}
                </p>

                <div className="flex justify-between mt-4">
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Charge: {doctor.charge}
                  </p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Duration: {doctor.serviceDuration}
                  </p>
                </div>

                <div className="flex justify-end mt-4">
                  <NavLink
                    to={`/doctor/${doctor._id}`}
                    className="text-lg font-medium text-blue-600 dark:text-blue-300 hover:text-blue-700 transition-all duration-300 ease-in-out focus:outline-none"
                    tabIndex="0"
                    role="link"
                  >
                    View Profile
                  </NavLink>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
      <div className="flex justify-center mt-4">
        {showAll ? (
          <button
            onClick={handleSeeLess}
            className="bg-gray-500 text-white px-4 py-2 rounded-md focus:outline-none"
          >
            See Less
          </button>
        ) : (
          <button
            onClick={handleSeeMore}
            className="bg-gray-500 text-white px-4 py-2 rounded-md focus:outline-none"
          >
            See More
          </button>
        )}
      </div>
    </div>
  );
};

export default Doctors;
