import React from "react";
import { useState, useContext } from "react";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { FaGoogle } from "react-icons/fa";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { AppContext } from "../ContextProvider/AppContext";
import { toast } from "react-toastify";
import img from "../Assets_2/A-Cafe-connecting-people-around.png";
const Login = () => {
  const { signInUser, googleLogin, githubLogin } = useContext(AppContext);

  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const location = useLocation();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(formData);
    const { email, password } = formData;
    signInUser(email, password)
      .then((res) => {
        const from = location.state || "/";
        navigate(location?.state || "/");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const from = location?.state || "/";
  const handleGoogleLogin = (googleProvider) => {
    googleProvider()
      .then(() => {
        toast.success(`Signed in successfully`);
        navigate(from);
      })
      .catch((err) => {
        console.error(err);
      });
  };
  React.useEffect(() => {
    document.title = "Login || DocCare";
  });
  return (
    <div>
      <div className="py-4 px-4 lg:px-0  ">
        <h1 className="text-3xl font-bold text-center mb-6">Welcome Back</h1>
        <div className="max-w-screen-lg mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="        p-6">
            <img src={img} alt="" />
          </div>
          <div className="       p-6">
            <h1 className="text-xl font-semibold mb-4">LOGIN</h1>
            <p className="  mb-4">
              If you have an account with us, please log in.
            </p>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="block  font-semibold mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email address"
                  className="w-full      bg-slate-100   border-none outline-none    px-4 py-2"
                />
              </div>
              <div className="mb-4">
                <label className="block  font-semibold mb-2">Password</label>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    placeholder="Enter your password"
                    className="w-full  text-black border-none outline-none  bg-slate-100      px-4 py-2 pr-10"
                  />
                  <button
                    type="button"
                    className="absolute inset-y-0 right-0 flex items-center px-3 text-gray-600"
                    onClick={togglePasswordVisibility}
                  >
                    {showPassword ? <FiEyeOff /> : <FiEye />}
                  </button>
                </div>
              </div>
              <div className="flex justify-center items-center">
                <button
                  type="submit"
                  className="   transition-all duration-300 ease-linear bg-blue-500 w-full   text-white font-bold py-2 px-4   mb-2 "
                >
                  Sign In
                </button>
              </div>
              <div className="flex flex-col w-full justify-center items-center gap-2">
                <button
                  onClick={() => handleGoogleLogin(googleLogin)}
                  className="  w-full  transition-all duration-300 ease-linear border   text-center bg-slate-100 text-black   font-bold py-2 px-4    flex justify-center items-center gap-2"
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
            </form>
            <p className="flex my-3 md:text-sm items-center flex-wrap text-xs">
              If you don't have an account,
              <NavLink to="/signup">
                <p className=" transition-all duration-300 ease-linear text-blue-500   px-2  font-bold   ">
                  Sign Up
                </p>
              </NavLink>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
