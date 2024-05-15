import React, { useContext, useEffect, useState } from "react";
import { InfinitySpin } from "react-loader-spinner";
import { Slide } from "react-awesome-reveal";
import Swal from "sweetalert2";
import axios from "axios";
import { AppContext } from "../ContextProvider/AppContext";

const ServiceToDo = () => {
  const [allServices, setAllServices] = useState([]);
  const { user } = useContext(AppContext);
  const [loading, setLoading] = useState(true);

  const [statusMap, setStatusMap] = useState({});

  useEffect(() => {
    fetch(
      `https://doccarserver-mdimamhosens-projects.vercel.app/todoservice?email=${user?.email}`
    )
      .then((res) => res.json())
      .then((data) => {
        setAllServices(data);
        setLoading(false);
        const initialStatusMap = {};
        data.forEach((service) => {
          initialStatusMap[service._id] = "";
        });
        setStatusMap(initialStatusMap);
      })
      .catch((error) => {
        console.error("Error fetching booked services:", error);
        setLoading(false);
      });
  }, [user?.email]);

  const handleStatusChange = (id, value) => {
    setStatusMap((prevStatusMap) => ({
      ...prevStatusMap,
      [id]: value,
    }));
  };

  const handleSubmit = (id) => {
    const status = statusMap[id];
    axios
      .patch(
        `https://doccarserver-mdimamhosen-mdimamhosens-projects.vercel.app/updateServiceState/${id}`,
        {
          email: user?.email,
          state: status,
        }
      )
      .then((res) => {
        console.log(res.data);
        setAllServices((prevAllServices) =>
          prevAllServices.map((service) =>
            service._id === id ? { ...service, state: status } : service
          )
        );
        Swal.fire({
          icon: "success",
          title: "Service Status Updated",
          showConfirmButton: false,
          timer: 1500,
        });
      })
      .catch((error) => {
        console.error("Error updating service status:", error);
        Swal.fire({
          icon: "error",
          title: "Failed to update service status",
          showConfirmButton: false,
          timer: 1500,
        });
      });
  };

  React.useEffect(() => {
    document.title = "Service To Do || DocCare";
  }, []);

  return (
    <div className="font-mono mt-5">
      {loading ? (
        <div className="w-screen h-screen flex justify-center items-center">
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
              <h1 className="text-2xl font-bold capitalize text-gray-800">
                None have booked your Services
              </h1>
            </div>
          ) : (
            <div>
              <h1 className="text-lg md:text-xl lg:text-3xl font-bold capitalize text-center">
                Perform Services Task
              </h1>
              <div className="grid py-4 container mx-auto px-2 grid-cols-1 lg:grid-cols-3 xl:grid-cols-4 gap-1 lg:gap-4">
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
                          : {service?.specialInstructions}
                        </p>
                        <div className="flex flex-col items-center gap-1 py-2">
                          <form className="flex flex-col items-center gap-2">
                            <div className="flex flex-col gap-1 capitalize">
                              <label htmlFor="status">
                                <span className="font-semibold">
                                  {" "}
                                  Service Status:
                                </span>{" "}
                                <span
                                  className={`text-${
                                    service.state === "Pending"
                                      ? "yellow"
                                      : service.state === "Working"
                                      ? "red"
                                      : "green"
                                  }-700 drop-shadow-sm font-thin`}
                                >
                                  {service?.state}
                                </span>
                              </label>
                              <select
                                id="status"
                                name="status"
                                value={statusMap[service._id]}
                                onChange={(e) =>
                                  handleStatusChange(
                                    service._id,
                                    e.target.value
                                  )
                                }
                                className="border border-gray-300 rounded px-2 py-1 outline-none font-thin"
                              >
                                <option value="" disabled>
                                  Select Status
                                </option>
                                <option value="Pending">Pending</option>
                                <option value="Working">Working</option>
                                <option value="Completed">Completed</option>
                              </select>
                            </div>
                            <div className="flex items-center space-x-2 mt-2">
                              <button
                                type="button"
                                onClick={() => handleSubmit(service._id)}
                                className="bg-blue-500 rounded hover:bg-blue-600 transition-all ease-linear duration-200 text-white px-4 py-2 font-semibold focus:outline-none"
                              >
                                Save Changes
                              </button>
                            </div>
                          </form>
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

export default ServiceToDo;
