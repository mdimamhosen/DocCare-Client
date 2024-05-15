import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "../ContextProvider/AppContext";
import Swal from "sweetalert2";

const MyProfile = () => {
  const { user, updateUserData } = useContext(AppContext);
  const [formData, setFormData] = useState({});
  const [isUserLoaded, setIsUserLoaded] = useState(true);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleSaveChanges = async () => {
    const { displayName, photoURL } = formData;

    updateUserData(displayName, photoURL).then(() => {
      Swal.fire({
        icon: "success",
        title: "Profile Updated Successfully",
        showConfirmButton: false,
        timer: 1500,
      });
    });
  };

  useEffect(() => {
    if (user) {
      setIsUserLoaded(false);
    }
  }, [user]);

  React.useEffect(() => {
    document.title = "My Profile || DocCare";
  });

  const userEmail = user?.email || "";
  const userDisplayName = user?.displayName || "";
  const userPhotoUrl = user?.reloadUserInfo?.photoUrl || "";

  return (
    <div className="w-screen flex justify-center  py-10 px-2">
      <div className="bg-white max-w-2xl shadow overflow-hidden sm:rounded-lg  border ">
        <div className="px-4 py-5 sm:px-6 flex justify-between items-center">
          <div>
            <h3 className="text-lg leading-6 font-medium text-gray-900">
              User database
            </h3>
            <p className="mt-1 max-w-2xl text-sm text-gray-500">
              Details and information about {userDisplayName}.
            </p>
          </div>
          <div>
            <img
              src={userPhotoUrl}
              alt={userDisplayName}
              className="rounded-full h-16 w-16 object-cover"
            />
          </div>
        </div>
        <div className="border-t border-gray-200">
          <dl>
            <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">Full name</dt>
              <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                {userDisplayName}
              </dd>
            </div>
            <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">Best techno</dt>
              <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                React JS
              </dd>
            </div>
            <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">
                Email address
              </dt>
              <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                {userEmail}
              </dd>
            </div>
            <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">Salary</dt>
              <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                $10,000
              </dd>
            </div>
            <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">About</dt>
              <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                "Full Stack Developer (MERN) | Competitive Programmer | Open
                Source Contributor | BU-CSE Student"
              </dd>
            </div>
          </dl>
        </div>
        <div className="my-2 py-1 flex justify-center items-center">
          <button
            className="py-2 px-2 border-2  rounded-md   font-bold  bg-gray-500 text-white hover:bg-gray-600 transition-all duration-300 ease-linear"
            onClick={() => document.getElementById("my_modal_1").showModal()}
          >
            Update Profile
          </button>
          <dialog id="my_modal_1" className="modal">
            <div className="modal-box">
              <form action="" className="flex flex-col gap-3">
                <label htmlFor="userName">
                  <input
                    type="text"
                    id="displayName"
                    placeholder="New Username"
                    className="input input-bordered w-full  "
                    onChange={handleChange}
                  />
                </label>
                <label htmlFor="photoUrl">
                  <input
                    type="text"
                    id="photoURL"
                    placeholder=" New Photo URL"
                    className="input input-bordered w-full  "
                    onChange={handleChange}
                  />
                </label>
              </form>

              <div className="modal-action">
                <form method="dialog" className="flex justify-between gap-2">
                  <button
                    onClick={() => handleSaveChanges()}
                    className="p-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-all duration-300 ease-linear"
                  >
                    Submit
                  </button>
                  <button
                    className="p-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition-all duration-300 ease-linear"
                    type="reset"
                    onClick={() =>
                      document.getElementById("my_modal_1").close()
                    }
                  >
                    Cancel{" "}
                  </button>
                </form>
              </div>
            </div>
          </dialog>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
