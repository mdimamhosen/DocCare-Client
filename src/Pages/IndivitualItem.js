import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import { AppContext } from "../ContextProvider/AppContext";
import { InfinitySpin } from "react-loader-spinner";

const IndividualItem = () => {
  const { id } = useParams();
  const { user } = useContext(AppContext);
  const email_user = user?.email;
  const [service, setService] = useState({});
  const [loading, setLoading] = useState(true);
  const [bookingData, setBookingData] = useState({
    serviceID: "",
    serviceName: "",
    servicePrice: "",
    serviceImage: "",
    providerEmail: "",
    userEmail: email_user,
    serviceTakingDate: "",
    specialInstructions: "",
    state: "Pending",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setBookingData({ ...bookingData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post(
        `https://doccarserver-mdimamhosens-projects.vercel.app/bookService`,
        bookingData
      )
      .then(() => {
        toast.success("Service Booked Successfully");
        document.getElementById("my_modal_5").close();
      })
      .catch((err) => {
        console.error(err);
        toast.error("Failed to book service");
      });
  };

  useEffect(() => {
    fetch(
      `https://doccarserver-mdimamhosen-mdimamhosens-projects.vercel.app/services/${id}`
    )
      .then((res) => res.json())
      .then((data) => {
        setService(data);

        setBookingData({
          serviceID: data._id,
          serviceName: data.item_name,
          servicePrice: data.price,
          serviceImage: data.image,
          providerEmail: data.user_email,
          userEmail: email_user,
          serviceTakingDate: "",
          specialInstructions: "",
          state: "Pending",
        });
        setLoading(false);
      })
      .catch((err) => console.log(err));
  }, [id, email_user]);
  const handleBookClick = () => {
    // if (email_user === bookingData.providerEmail) {
    //   toast.error("You can't book your own service");
    //   return;
    // }

    document.getElementById("my_modal_5").showModal();
  };
  React.useEffect(() => {
    document.title = `${service?.item_name} || DocCare`;
  });
  return (
    <>
      {loading ? (
        <div className="w-screen  h-screen flex justify-center items-center">
          <InfinitySpin
            visible={true}
            width="200"
            color="blue"
            ariaLabel="infinity-spin-loading"
          />
        </div>
      ) : (
        <div className="grid border w-11/12 mx-auto grid-cols-1 lg:grid-cols-2 gap-4 p-2 my-4 font-mono">
          <div>
            <img
              src={service?.image}
              alt=""
              className="w-full h-full  object-cover"
              style={{ aspectRatio: "16/9" }}
            />
          </div>
          <div className="pt-5 px-2">
            <h2 className="text-2xl font-bold mb-4">{service?.item_name}</h2>
            <p className="mb-4">{service?.short_description}</p>
            <p className="text-lg font-bold mb-2">
              Service Charge: {service?.price} $
            </p>
            <p className="text-sm mb-4 font-semibold">
              Service Area:{" "}
              <span className="font-thin">{service?.service_area}</span>
            </p>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-semibold mb-1">
                  Provider Name:{" "}
                  <span className="font-thin">{service?.user_name}</span>
                </p>
                <p className="text-sm font-semibold mb-4">
                  Provider Mail:{" "}
                  <span className="font-thin">{service?.user_email}</span>
                </p>
              </div>
              <div className=" h-20 w-20">
                <img
                  src={service?.provider_image}
                  className="rounded-full h-20 w-20 object-cover "
                />
              </div>
            </div>
            <div className="flex items-center">
              <button
                onClick={handleBookClick}
                className="bg-blue-500 hover:bg-blue-600 transition-all ease-linear duration-300 text-white font-bold px-4 py-2 rounded mr-2"
              >
                Book Now
              </button>
              <dialog
                id="my_modal_5"
                className="modal modal-bottom sm:modal-middle"
              >
                <div className="modal-box">
                  <h3 className="font-bold text-lg">Book Service</h3>
                  <form
                    onSubmit={handleSubmit}
                    className="mx-auto max-w-lg p-4"
                  >
                    <div className="mb-4">
                      <label className="block">Service ID</label>
                      <input
                        type="text"
                        id="serviceID"
                        name="serviceID"
                        value={service._id}
                        onChange={handleInputChange}
                        readOnly
                        className="w-full border border-gray-300 rounded px-4 py-2 outline-none"
                      />
                    </div>
                    <div className="mb-4">
                      <label className="block">Service Name</label>
                      <input
                        type="text"
                        id="serviceName"
                        name="serviceName"
                        value={service.item_name}
                        onChange={handleInputChange}
                        readOnly
                        className="w-full border border-gray-300 rounded px-4 py-2 outline-none"
                      />
                    </div>
                    <div className="mb-4">
                      <label className="block">Service Charge</label>
                      <input
                        type="text"
                        id="servicePrice"
                        name="servicePrice"
                        value={service.price}
                        onChange={handleInputChange}
                        readOnly
                        className="w-full border border-gray-300 rounded px-4 py-2 outline-none"
                      />
                    </div>
                    <div className="mb-4">
                      <label className="block">Image</label>
                      <input
                        type="text"
                        id="serviceImage"
                        name="serviceImage"
                        value={service.image}
                        onChange={handleInputChange}
                        readOnly
                        className="w-full border border-gray-300 rounded px-4 py-2 outline-none"
                      />
                    </div>
                    <div className="mb-4">
                      <label className="block">Provider Email</label>
                      <input
                        type="text"
                        id="providerEmail"
                        name="providerEmail"
                        value={service.user_email}
                        onChange={handleInputChange}
                        readOnly
                        className="w-full border border-gray-300 rounded px-4 py-2 outline-none"
                      />
                    </div>
                    <div className="mb-4">
                      <label className="block">Current User</label>
                      <input
                        type="text"
                        id="userEmail"
                        name="userEmail"
                        value={email_user}
                        onChange={handleInputChange}
                        readOnly
                        className="w-full border border-gray-300 rounded px-4 py-2 outline-none"
                      />
                    </div>
                    <div className="mb-4">
                      <label className="block mb-2" htmlFor="serviceTakingDate">
                        Service Taking Date:
                      </label>
                      <input
                        type="date"
                        id="serviceTakingDate"
                        name="serviceTakingDate"
                        value={bookingData.serviceTakingDate}
                        onChange={handleInputChange}
                        required
                        className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:border-blue-500"
                      />
                    </div>
                    <div className="mb-4">
                      <label
                        className="block mb-2"
                        htmlFor="specialInstructions"
                      >
                        Special Instructions:
                      </label>
                      <input
                        type="text"
                        id="specialInstructions"
                        name="specialInstructions"
                        value={bookingData.specialInstructions}
                        onChange={handleInputChange}
                        className="w-full border border-gray-300 rounded px-4 py-2 outline-none"
                      />
                    </div>
                    <div className="flex justify-between">
                      <button
                        type="submit"
                        className="bg-blue-500 hover:bg-blue-600 transition-all ease-linear duration-300 text-white font-bold px-6 py-2 rounded"
                      >
                        Book Service
                      </button>
                      <button
                        type="button"
                        onClick={() =>
                          document.getElementById("my_modal_5").close()
                        }
                        className="bg-gray-500 hover:bg-gray-600 transition-all ease-linear duration-300 text-white font-bold px-6 py-2 rounded"
                      >
                        Close
                      </button>
                    </div>
                  </form>
                </div>
              </dialog>
              <button className="bg-blue-500 hover:bg-blue-600 transition-all ease-linear duration-300 font-bold text-white px-4 py-2 rounded">
                Save for Later
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default IndividualItem;
