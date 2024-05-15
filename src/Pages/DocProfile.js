import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { AppContext } from "../ContextProvider/AppContext";
import { InfinitySpin } from "react-loader-spinner";
import {
  MdSchool,
  MdWork,
  MdDescription,
  MdPublic,
  MdEvent,
} from "react-icons/md";

const DocProfile = () => {
  const [docProfile, setDocProfile] = useState({});
  const { user } = useContext(AppContext);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    fetch(
      `https://doccarserver-mdimamhosens-projects.vercel.app/docProfile/${id}`
    )
      .then((res) => res.json())
      .then((data) => {
        setDocProfile(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching doc profile:", error);
        setLoading(false);
      });
  }, [id]);
  React.useEffect(() => {
    document.title = `${docProfile?.name || ""} || DocCare`;
  });

  return (
    <div className="container lg:w-[70%] mx-auto px-2 py-8">
      <h1 className="font-bold text-3xl text-center">
        Welcome to {docProfile.name} Profile
      </h1>
      {loading ? (
        <div className=" h-screen flex justify-center items-center">
          <InfinitySpin
            visible={true}
            width="200"
            color="blue"
            ariaLabel="infinity-spin-loading"
          />
        </div>
      ) : (
        <div className=" my-4 py-2 px-2 mx-auto  border rounded-lg   overflow-hidden">
          <div className="flex gap-4  py-4 px-4 flex-col md:flex-row">
            <div className="">
              <img
                src={docProfile.image}
                alt={docProfile.name}
                className="md:h-28 md:w-28 w-24 h-24 rounded-full object-cover border-2 border-blue-500 p-1"
              />
            </div>
            <div className="flex flex-col justify-between h-full gap-1   capitalize">
              <h1 className="text-2xl font-bold">{docProfile.name}</h1>
              <p className="text-sm  text-blue-400 ">
                specialist In: {docProfile.specialistIn}
              </p>
              <p className="text-sm">Charge: {docProfile.charge} </p>

              <p className="text-sm">
                Consultation Duration: {docProfile.serviceDuration}
              </p>

              <p className="text-sm">Location: Barisal, Bangladesh</p>
            </div>
          </div>
          <div className="text-sm w-full text-balance lg:w-[65%]  py-1 px-4 ">
            {docProfile.description}
          </div>
          <div className="flex  gap-2 flex-col md:flex-row mt-3 ">
            <div className="py-1 px-4">
              <h2 className="text-lg font-semibold">
                <MdDescription /> Services
              </h2>
              <ul>
                {docProfile.services &&
                  docProfile.services.map((service, index) => (
                    <li key={index}>{service}</li>
                  ))}
              </ul>
            </div>
            <div className="py-1 px-4">
              <h2 className="text-lg font-semibold">
                <MdSchool /> Educational Qualifications
              </h2>
              <ul>
                {docProfile.educationalQualifications &&
                  docProfile.educationalQualifications.map(
                    (qualification, index) => (
                      <li key={index}>{qualification}</li>
                    )
                  )}
              </ul>
            </div>
          </div>
          <div className="py-1 px-4">
            <h2 className="text-lg font-semibold">
              <MdWork /> Experience
            </h2>
            <ul>
              {docProfile.experience &&
                docProfile.experience.map((exp, index) => (
                  <li key={index}>{exp}</li>
                ))}
            </ul>
          </div>

          <div className="py-1 px-4">
            <h2 className="text-lg font-semibold">
              <MdPublic /> Publications
            </h2>
            <a
              href={docProfile.publicationsLink}
              className="text-blue-600 hover:underline text-xs"
              target="_blank"
              rel="noopener noreferrer"
            >
              {docProfile.publicationsLink}
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default DocProfile;
