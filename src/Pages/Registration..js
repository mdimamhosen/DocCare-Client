import React, { useContext, useState } from "react";
import { FaEye, FaEyeSlash, FaGithub, FaGoogle } from "react-icons/fa";
import { AppContext } from "../ContextProvider/AppContext";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import img from "../Assets_2/A-Cafe-connecting-people-around.png";

const Registration = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showPassword2, setShowPassword2] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    photoURL: "",
    email: "",
    password: "",
    confirmPassword: "",
    termsChecked: false,
  });
  const navigate = useNavigate();
  const location = useLocation();
  const {
    createUser,
    googleLogin,
    githubLogin,
    setuserdata,
    userData,
    user,
    updateUserData,
  } = useContext(AppContext);
  console.log(user);
  const handleChange = (e) => {
    const { name, value, checked, type } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  const togglePasswordVisibility2 = () => {
    setShowPassword2(!showPassword2);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const regex = /^(?=.*[a-z])(?=.*[A-Z])/;
    if (formData.password !== formData.confirmPassword) {
      toast.error(`Password did not match.`);
      return;
    }
    if (formData.password.length < 6) {
      toast.error(`Password must be at least 6 characters long.`);
      return;
    }
    if (!regex.test(formData.password)) {
      toast.error(
        `Password must contain both uppercase and lowercase letters.`
      );

      return;
    }
    const { email, password, photoURL, firstName, confirmPassword } = formData;
    // console.log(email, password, displayName, photoURL);
    console.log(user);

    createUser(email, password).then((user) => {
      updateUserData(firstName, photoURL).then(() => {
        toast.success(`Signed up successfully`);
        navigate(from);
      });
    });
  };
  const from = location?.state || "/";
  const handleGoogleLogin = (googleProvider) => {
    googleProvider()
      .then(() => {
        toast.success(`Signed up successfully`);
        navigate(from);
      })
      .catch((err) => {
        console.error(err);
      });
  };
  React.useEffect(() => {
    document.title = "Sign Up || ArtVIsta";
  });

  return (
    <div className="py-8 px-4 lg:px-0">
      <h1 className="text-3xl font-bold text-center mb-6">Create An Account</h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 mx-auto max-w-screen-lg gap-4">
        <div className="     p-6">
          <img src={img} alt="" />
        </div>
        <div className="  mx-auto">
          <form onSubmit={handleSubmit} className="  p-3  ">
            <div className="mb-4">
              <label className="block  font-bold mb-2">Name</label>
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                className="w-full rounded-lg  outline-none  text-black   bg-slate-100   outline-nonepx-4 py-2 px-4"
                required
              />
            </div>

            <div className="mb-4">
              <label className="block  font-bold mb-2">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full rounded-lg outline-none   bg-slate-100   outline-nonetext-black  px-4 py-2"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block  font-bold mb-2">Profile URL</label>
              <input
                type="text"
                name="photoURL"
                value={formData.photoURL}
                onChange={handleChange}
                className="w-full rounded-lg  outline-none  bg-slate-100  text-black       px-4 py-2"
                required
              />
            </div>
            <div className="flex flex-col md:flex-row items-center  gap-2">
              <div className="mb-4 w-full">
                <label className="block  font-bold mb-2">Password</label>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    className="w-full rounded-lg    text-black    bg-slate-100   outline-none  px-4 py-2 pr-10"
                    required
                  />
                  <button
                    type="button"
                    className="absolute inset-y-0 right-0 flex items-center px-3 text-gray-600"
                    onClick={togglePasswordVisibility}
                  >
                    {showPassword ? <FaEyeSlash /> : <FaEye />}
                  </button>
                </div>
              </div>
              <div className="mb-4 w-full">
                <label className="block  font-bold mb-2">
                  Confirm Password
                </label>
                <div className="relative">
                  <input
                    type={showPassword2 ? "text" : "password"}
                    name="confirmPassword"
                    value={formData.confirmPasswordpassword}
                    onChange={handleChange}
                    className="w-full rounded-lg    text-black    bg-slate-100   outline-none px-4 py-2 pr-10"
                    required
                  />
                  <button
                    type="button"
                    className="absolute inset-y-0 right-0 flex items-center px-3 text-gray-600"
                    onClick={togglePasswordVisibility2}
                  >
                    {showPassword2 ? <FaEyeSlash /> : <FaEye />}
                  </button>
                </div>
              </div>
            </div>
            <div className="mb-4 flex items-center">
              <input
                type="checkbox"
                name="termsChecked"
                checked={formData.termsChecked}
                onChange={handleChange}
                className="mr-2"
                // required
              />
              <span className="text-gray-400">
                I agree to the terms and conditions
              </span>
            </div>
            <div className="flex justify-center items-center">
              <button
                type="submit"
                className=" bg-blue-500 w-full text-white font-bold py-2 px-4  "
              >
                Sign Up
              </button>
            </div>
            <div className="flex flex-col w-full justify-center items-center gap-2 mt-2">
              <button
                onClick={() => handleGoogleLogin(googleLogin)}
                className="  w-full  transition-all duration-300 ease-linear     text-center bg-slate-100 text-black   font-bold py-2 px-4    flex justify-center items-center gap-2"
              >
                <svg class="w-6 h-6 mx-2" viewBox="0 0 40 40">
                  <path
                    d="M36.3425 16.7358H35V16.6667H20V23.3333H29.4192C28.045 27.2142 24.3525 30 20 30C14.4775 30 10 25.5225 10 20C10 14.4775 14.4775 9.99999 20 9.99999C22.5492 9.99999 24.8683 10.9617 26.6342 12.5325L31.3483 7.81833C28.3717 5.04416 24.39 3.33333 20 3.33333C10.7958 3.33333 3.33335 10.7958 3.33335 20C3.33335 29.2042 10.7958 36.6667 20 36.6667C29.2042 36.6667 36.6667 29.2042 36.6667 20C36.6667 18.8825 36.5517 17.7917 36.3425 16.7358Z"
                    fill="#FFC107"
                  />
                  <path
                    d="M5.25497 12.2425L10.7308 16.2583C12.2125 12.59 15.8008 9.99999 20 9.99999C22.5491 9.99999 24.8683 10.9617 26.6341 12.5325L31.3483 7.81833C28.3716 5.04416 24.39 3.33333 20 3.33333C13.5983 3.33333 8.04663 6.94749 5.25497 12.2425Z"
                    fill="#FF3D00"
                  />
                  <path
                    d="M20 36.6667C24.305 36.6667 28.2167 35.0192 31.1742 32.34L26.0159 27.975C24.3425 29.2425 22.2625 30 20 30C15.665 30 11.9842 27.2359 10.5975 23.3784L5.16254 27.5659C7.92087 32.9634 13.5225 36.6667 20 36.6667Z"
                    fill="#4CAF50"
                  />
                  <path
                    d="M36.3425 16.7358H35V16.6667H20V23.3333H29.4192C28.7592 25.1975 27.56 26.805 26.0133 27.9758C26.0142 27.975 26.015 27.975 26.0158 27.9742L31.1742 32.3392C30.8092 32.6708 36.6667 28.3333 36.6667 20C36.6667 18.8825 36.5517 17.7917 36.3425 16.7358Z"
                    fill="#1976D2"
                  />
                </svg>
                Sign in with Google
              </button>
            </div>
            <div className="flex flex-col  md:flex-row items-center justify-center  py-3 gap-1 md:gap-2">
              <h1 className="font-semibold">Have you an account?</h1>
              <NavLink to="/login" className="text-sm text-blue-500">
                Please Sign In
              </NavLink>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Registration;
