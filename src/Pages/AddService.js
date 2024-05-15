import React, { useContext, useState } from "react";
import { AppContext } from "../ContextProvider/AppContext";
import axios from "axios";
import { toast } from "react-toastify";

const AddService = () => {
  // console.log(process.env.REACT_APP_API_URL);

  const { user } = useContext(AppContext);
  const [formData, setFormData] = useState({
    image: "",
    item_name: "",
    short_description: "",
    price: "",
    service_area: "",
    provider_image: user?.photoURL,
    user_email: user?.email || "",
    user_name: user?.displayName || "",
    state: "Pending",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post(
        `https://doccarserver-mdimamhosens-projects.vercel.app/addService`,
        formData
      )
      .then((res) => {
        console.log(res.data);
        toast.success("Item added successfully");
        setFormData({
          image: "",
          item_name: "",
          short_description: "",
          price: "",
          service_area: "",
          provider_image: user?.photoURL,
          user_email: user?.email || "",
          user_name: user?.displayName || "",
        });
      })
      .catch((err) => {
        console.error(err);
      });
  };

  React.useEffect(() => {
    document.title = "Add Service || DocCare";
  });

  return (
    <div className="mx-auto border lg:w-1/2 w-11/12 p-6 rounded-lg py-5 my-5 shadow-md">
      <h1 className="text-2xl font-bold mb-6 text-center">Add A New Service</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="flex gap-1 flex-col md:flex-row">
          <div className="w-full">
            <label htmlFor="item_name" className="block font-medium">
              Service Name
            </label>
            <input
              type="text"
              id="item_name"
              name="item_name"
              placeholder="Enter Service Name"
              required
              value={formData.item_name}
              onChange={handleChange}
              className="mt-1 p-2 w-full border-gray-300 border outline-0 rounded-md"
            />
          </div>
          <div className="w-full">
            <label htmlFor="short_description" className="block font-medium">
              Description
            </label>
            <input
              id="short_description"
              name="short_description"
              value={formData.short_description}
              onChange={handleChange}
              required
              placeholder="Description"
              className="mt-1 p-2 w-full border-gray-300 border outline-0 rounded-md"
            />
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-1">
          <div className="w-full">
            <label htmlFor="image" className="block font-medium">
              Service Image
            </label>
            <input
              type="text"
              id="image"
              name="image"
              value={formData.image}
              required
              placeholder="Enter Image URL"
              onChange={handleChange}
              className="mt-1 p-2 w-full border-gray-300 border outline-0 rounded-md"
            />
          </div>
          <div className="w-full">
            <label htmlFor="price" className="block font-medium">
              Price
            </label>
            <input
              type="number"
              id="price"
              name="price"
              placeholder="Enter Service Price"
              value={formData.price}
              onChange={handleChange}
              className="mt-1 p-2 w-full border-gray-300 border outline-0 rounded-md"
            />
          </div>
        </div>
        <div className="flex flex-col md:flex-row gap-1">
          <div className="w-full">
            <label htmlFor="service_area" className="block font-medium">
              Area Of Service
            </label>
            <input
              type="text"
              id="service_area"
              name="service_area"
              required
              placeholder="Service Area"
              value={formData.service_area}
              onChange={handleChange}
              className="mt-1 p-2 w-full border-gray-300 border outline-0 rounded-md"
            />
          </div>

          <div className="w-full">
            <label htmlFor="provider_image" className="block font-medium">
              Provider Image
            </label>
            <input
              type="text"
              id="provider_image"
              name="provider_image"
              readOnly
              required
              placeholder="Enter Provider Image URL"
              value={formData.provider_image}
              onChange={handleChange}
              className="mt-1 p-2 w-full border-gray-300 border outline-0 rounded-md"
            />
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-1">
          <div className="w-full">
            <label htmlFor="user_name" className="block font-medium">
              Service Provider Name
            </label>
            <input
              type="text"
              id="user_name"
              name="user_name"
              value={formData.user_name}
              onChange={handleChange}
              required
              placeholder="Enter User Name"
              readOnly
              className="mt-1 p-2 w-full border-gray-300 border outline-0 rounded-md"
            />
          </div>
          <div className="w-full">
            <label htmlFor="user_email" className="block font-medium">
              User Email
            </label>
            <input
              type="email"
              id="user_email"
              name="user_email"
              value={formData.user_email}
              onChange={handleChange}
              required
              placeholder="Enter User Email"
              readOnly
              className="mt-1 p-2 w-full border-gray-300 border outline-0 rounded-md"
            />
          </div>
        </div>
        <div className="flex justify-center items-center">
          <button
            type="submit"
            className="w-full mx-auto bg-blue-500 text-white font-bold py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none"
          >
            Add Service
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddService;
