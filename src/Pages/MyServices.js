import React, { useContext, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { Typewriter } from "react-simple-typewriter";
import Swal from "sweetalert2";
import { AppContext } from "../ContextProvider/AppContext";
import { InfinitySpin, Triangle } from "react-loader-spinner";
import Reveal, { Slide } from "react-awesome-reveal";
import { toast } from "react-toastify";
import axios from "axios";
const MyServices = () => {
  const [allServices, setAllServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const { user } = useContext(AppContext);
  const [updateData, setUpdateData] = useState({
    image: "",
    item_name: "",
    short_description: "",
    price: "",
    service_area: "",
    provider_image: "",
    user_email: "",
    user_name: "",
    state: "Pending",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUpdateData({ ...updateData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // console.log("Update data:", updateData);
    axios
      .patch(
        `https://doccarserver-mdimamhosen-mdimamhosens-projects.vercel.app/updateService/${updateData._id}`,
        updateData
      )
      .then((res) => {
        console.log(res.data);
        const newServices = allServices.map((service) => {
          if (service._id === updateData._id) {
            return updateData;
          }
          return service;
        });
        setAllServices(newServices);
        setLoading(false);
        document.getElementById("my_modal_5").close();
        toast.success("Service Updated Successfully");
      })
      .catch((err) => {
        console.log(err);
        toast.error("Failed to Update Service");
      });
  };

  const handleUpdateClick = (service) => {
    setUpdateData(service);

    document.getElementById("my_modal_5").showModal();
  };

  const handleDelete = (id) => {
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
        fetch(
          `https://doccarserver-mdimamhosen-mdimamhosens-projects.vercel.app/deleteService/${id}`,
          {
            method: "DELETE",
          }
        )
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            const newProducts = allServices.filter(
              (product) => product._id !== id
            );
            setAllServices(newProducts);
            setLoading(false);
          });
        Swal.fire("Deleted!", "Your file has been deleted.", "success");
      }
    });
  };

  useEffect(() => {
    fetch(
      `https://doccarserver-mdimamhosens-projects.vercel.app/myServices?email=${user.email}`
    )
      .then((res) => res.json())
      .then((data) => {
        setAllServices(data);
        setLoading(false);
      });
  }, []);

  React.useEffect(() => {
    document.title = "Manage Services || DocCare";
  });

  return (
    <div className="font-mono mt-5">
      {loading && (
        <div className="w-screen h-screen flex justify-center items-center">
          <InfinitySpin
            visible={true}
            width="200"
            color="blue"
            ariaLabel="infinity-spin-loading"
          />
        </div>
      )}

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

      <div className="grid py-5 container mx-auto px-2 grid-cols-1 lg:grid-cols-3 xl:grid-cols-4 gap-1 lg:gap-4">
        {allServices.length === 0 ? (
          <div className="text-center h-[60vh] flex flex-col justify-center items-center gap-2">
            <h1 className="text-2xl font-bold">No Services Found</h1>
            <NavLink
              to="/addservice"
              className="bg-blue-500 font-bold hover:bg-blue-600 transition-all duration-300 ease-linear p-2 text-white rounded"
            >
              Add Services
            </NavLink>
          </div>
        ) : (
          allServices.map((service, index) => (
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
                      Area: {service?.service_area}{" "}
                    </p>
                  </div>
                  <div className="flex flex-col items-center gap-1 py-2">
                    <div className="flex items-center space-x-2">
                      <NavLink
                        to={`/service/${service._id}`}
                        className="bg-blue-500 rounded hover:bg-blue-600 transition-all ease-linear duration-200 text-white p-1 font-semibold focus:outline-none"
                      >
                        View Details
                      </NavLink>
                      <button
                        onClick={() => handleUpdateClick(service)}
                        className="bg-yellow-700 rounded hover:bg-yellow-600 transition-all ease-linear duration-200 text-white p-1 font-semibold focus:outline-none"
                      >
                        Update
                      </button>
                      <button
                        onClick={() => handleDelete(service._id)}
                        className="bg-red-700 rounded hover:bg-red-800 transition-all ease-linear duration-200 text-white p-1 font-semibold focus:outline-none"
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </Slide>
          ))
        )}
      </div>

      {/* Modal */}
      <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Book Service</h3>
          <form onSubmit={handleSubmit} className="mx-auto max-w-lg p-4">
            <div className="flex flex-col md:flex-row gap-1 items-center">
              <div className="mb-1">
                <label className="block">Service Name</label>
                <input
                  type="text"
                  id="serviceName"
                  name="item_name"
                  value={updateData.item_name}
                  onChange={handleInputChange}
                  className="w-full border border-gray-300 rounded px-4 py-2 outline-none"
                />
              </div>
              <div className="mb-1">
                <label className="block">Short Description</label>
                <input
                  type="text"
                  id="shortDescription"
                  name="short_description"
                  value={updateData.short_description}
                  onChange={handleInputChange}
                  className="w-full border border-gray-300 rounded px-4 py-2 outline-none"
                />
              </div>
            </div>
            <div className="flex flex-col md:flex-row gap-1">
              <div className="mb-1">
                <label className="block">Service Price</label>
                <input
                  type="text"
                  id="servicePrice"
                  name="price"
                  value={updateData.price}
                  onChange={handleInputChange}
                  className="w-full border border-gray-300 rounded px-4 py-2 outline-none"
                />
              </div>
              <div className="mb-1">
                <label className="block">Service Area</label>
                <input
                  type="text"
                  id="serviceArea"
                  name="service_area"
                  value={updateData.service_area}
                  onChange={handleInputChange}
                  className="w-full border border-gray-300 rounded px-4 py-2 outline-none"
                />
              </div>
            </div>
            <div className="flex flex-col md:flex-row gap-1 items-center">
              <div className="mb-1">
                <label className="block">Service Image</label>
                <input
                  type="text"
                  id="serviceImage"
                  name="image"
                  value={updateData.image}
                  onChange={handleInputChange}
                  className="w-full border border-gray-300 rounded px-4 py-2 outline-none"
                />
              </div>
              <div className="mb-1">
                <label className="block">Provider Email</label>
                <input
                  type="text"
                  id="userEmail"
                  name="user_email"
                  value={updateData.user_email}
                  onChange={handleInputChange}
                  className="w-full border border-gray-300 rounded px-4 py-2 outline-none"
                />
              </div>
            </div>
            <div className="flex flex-col md:flex-row gap-1 mb-2">
              <div className="mb-1">
                <label className="block">Provider Name</label>
                <input
                  type="text"
                  id="userName"
                  name="user_name"
                  value={updateData.user_name}
                  onChange={handleInputChange}
                  className="w-full border border-gray-300 rounded px-4 py-2 outline-none"
                />
              </div>
              <div className="mb-1">
                <label className="block">Provider Image</label>
                <input
                  type="text"
                  id="providerImage"
                  name="provider_image"
                  value={updateData.provider_image}
                  onChange={handleInputChange}
                  className="w-full border border-gray-300 rounded px-4 py-2 outline-none"
                />
              </div>
            </div>

            <div className="flex justify-between">
              <button
                type="submit"
                // onClick={() => handleClick(service._id)}
                className="bg-blue-500 hover:bg-blue-600 transition-all ease-linear duration-300 text-white font-bold px-6 py-2 rounded"
              >
                Update Service
              </button>
              <button
                type="button"
                onClick={() => document.getElementById("my_modal_5").close()}
                className="bg-gray-500 hover:bg-gray-600 transition-all ease-linear duration-300 text-white font-bold px-6 py-2 rounded"
              >
                Close
              </button>
            </div>
          </form>
        </div>
      </dialog>
    </div>
  );
};

export default MyServices;
