import React, { useContext, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import Swal from "sweetalert2";
import { AppContext } from "../ContextProvider/AppContext";
import { InfinitySpin } from "react-loader-spinner";
import { Slide } from "react-awesome-reveal";
import axios from "axios";
const BookedService = () => {
  const [allServices, setAllServices] = useState([]);
  const { user } = useContext(AppContext);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(
      `https://doccarserver-mdimamhosens-projects.vercel.app/bookedServices?email=${user.email}`
    )
      .then((res) => res.json())
      .then((data) => {
        setAllServices(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching booked services:", error);
        setLoading(false);
      });
  }, [user.email]);

  React.useEffect(() => {
    document.title = "Booked Services || DocCare";
  }, []);
  const handleDeleteService = (id) => {
    console.log(id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axios
          .delete(
            `https://doccarserver-mdimamhosens-projects.vercel.app/deleteBookedService/${id}`
          )
          .then((response) => {
            console.log(response.data);
            if (response.data.success) {
              const newServices = allServices.filter(
                (service) => service._id !== id
              );
              setAllServices(newServices);
              setLoading(false);
              Swal.fire("Deleted!", "Your file has been deleted.", "success");
            } else {
              throw new Error("Service not found");
            }
          })
          .catch((error) => {
            console.error("Error deleting service:", error);
            Swal.fire("Error", "Failed to delete service", "error");
          });
      }
    });
  };

  return (
    <div className="font-mono mt-5">
      {loading ? (
        <div className="w-screen h-screen flex justify-center items-center ">
          <InfinitySpin
            visible={true}
            width="200"
            color="blue"
            ariaLabel="infinity-spin-loading"
          />
        </div>
      ) : (
        <>
          {allServices.length === 0 ? (
            <div className="text-center h-[60vh] flex flex-col justify-center items-center gap-2">
              <h1 className="text-2xl font-bold">No Booked Services Found</h1>
              <NavLink
                to="/services"
                className="bg-blue-500 font-bold hover:bg-blue-700 transition-all duration-300 ease-linear p-2 text-white rounded"
              >
                Book Service
              </NavLink>
            </div>
          ) : (
            <div>
              <h1 className="text-lg md:text-xl lg:text-3xl font-bold capitalize text-center">
                Your Booked Services
              </h1>
              <div className="grid py-5 container mx-auto px-2 grid-cols-1 lg:grid-cols-3 xl:grid-cols-4 gap-1 lg:gap-4">
                {allServices.map((service, index) => (
                  <Slide
                    key={index}
                    cascade
                    triggerOnce
                    className="border rounded-lg shadow-md overflow-hidden"
                  >
                    <div>
                      <img
                        src={service.serviceImage}
                        alt={service.serviceName}
                        className="w-full h-48 object-cover"
                      />
                      <div className="py-2 px-[2px]">
                        <h2 className="text-base lg:text-lg text-center">
                          <span className="font-bold">Service Name:</span>:{" "}
                          {service.serviceName}
                        </h2>
                        <div className="flex item-center flex-col text-center md:flex-row text-xs justify-center gap-1 md:gap-2">
                          <p className="text-sm">
                            <span className="font-semibold">
                              Service Charge:{" "}
                            </span>
                            : ${service.servicePrice}
                          </p>
                          <p className="text-sm">
                            <span className="font-semibold">
                              {" "}
                              Service Date:
                            </span>
                            : {service?.serviceTakingDate}{" "}
                          </p>
                        </div>{" "}
                        <p className="text-sm text-center">
                          <span className="font-semibold">
                            Special Instruction
                          </span>
                          : {service?.specialInstructions.slice(0, 30)}...{" "}
                        </p>
                        <div className="flex flex-col items-center gap-1 py-2">
                          <div className="flex items-center space-x-2">
                            <button
                              onClick={() => handleDeleteService(service._id)}
                              className="bg-red-500 rounded hover:bg-red-600 transition-all ease-linear duration-200 text-white p-1 font-semibold focus:outline-none"
                            >
                              Delete Service
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Slide>
                ))}
              </div>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default BookedService;
