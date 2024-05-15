import React, { useContext, useEffect, useState } from "react";
import { FiMenu } from "react-icons/fi";
import { IoCloseOutline } from "react-icons/io5";
import { NavLink, useNavigate } from "react-router-dom";
import { AppContext } from "../ContextProvider/AppContext";
import { Tooltip } from "react-tippy";
import { toast } from "react-toastify";
import avatar from "../Assets/765-default-avatar.png";

export default function Navbar() {
  const { user, logout, loading, setThemeOvserve, setloading } =
    useContext(AppContext);
  const photoUrl = user?.photoUrl || avatar || "";

  const [isSideMenuOpen, setMenu] = useState(false);
  const [theme, setTheme] = useState("light");
  const [loadingUser, setLoadingUser] = useState(true);
  const navigate = useNavigate();

  const navlinks = [
    {
      label: "Home",
      link: "/",
    },
    {
      label: "Services",
      link: "/services",
    },
    {
      label: "Doctors",
      link: "/doctors",
    },
    {
      label: "About",
      link: "/about",
    },
    {
      label: "Contact",
      link: "/contact",
    },
  ];

  useEffect(() => {
    const localTheme = localStorage.getItem("theme");
    if (localTheme) {
      setTheme(localTheme);
      document.querySelector("html").setAttribute("data-theme", localTheme);
    }
  }, []);

  useEffect(() => {
    if (!loading) {
      setLoadingUser(false);
      setloading(false);
      localStorage.setItem("theme", theme);
      document.querySelector("html").setAttribute("data-theme", theme);
    }
  }, [theme, loading]);

  const handleThemeChange = (e) => {
    if (e.target.checked) {
      setTheme("dracula");
      setThemeOvserve(true);
    } else {
      setTheme("light");
      setThemeOvserve(false);
    }
  };

  const handleSignOut = () => {
    logout();
    navigate("/");
    toast.success("Logged out successfully!");
  };

  const handleNavLinkClick = () => {
    if (isSideMenuOpen) {
      setMenu(false);
    }
  };

  return (
    <main
      className={
        theme === "light"
          ? "sticky top-0 z-50 inset-x-0 dracula::bg-black bg-white text-black"
          : "sticky top-0 z-50 inset-x-0 dracula::bg-black bg-gray-900 text-white"
      }
    >
      <nav className="flex justify-between z-40 container mx-auto items-center py-4 px-2 md:px-3 lg:px-0">
        <section className="flex items-center gap-2">
          <FiMenu
            onClick={() => setMenu(true)}
            className="text-xl cursor-pointer lg:hidden"
          />
          <NavLink to="/" className="lg:text-4xl text-xl font-bold">
            DocCare
          </NavLink>
        </section>
        <section className="hidden lg:flex items-center gap-4">
          {navlinks.map((d, i) => (
            <NavLink
              key={i}
              className={({ isActive }) =>
                isActive
                  ? `font-bold text-center text-[#3190E5] underline transition-all duration-300 ease-linear`
                  : `font-bold text-center`
              }
              to={d.link}
              onClick={handleNavLinkClick}
            >
              {d.label}
            </NavLink>
          ))}
          {user && (
            <>
              <div className="dropdown dropdown-hover">
                <div
                  tabIndex={0}
                  role="button"
                  className={`font-bold transition-all duration-300 ease-linear`}
                >
                  <p>Dashboard</p>
                </div>
                <ul
                  tabIndex={0}
                  className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
                >
                  <li>
                    <NavLink to="/addservice">Add Service</NavLink>
                  </li>
                  <li>
                    <NavLink to="/manageServices">Manage Services</NavLink>
                  </li>
                  <li>
                    <NavLink to="/bookedService">Booked Service</NavLink>
                  </li>
                  <li>
                    <NavLink to="/serviceTodo">Service To Do</NavLink>
                  </li>
                </ul>
              </div>
            </>
          )}
        </section>

        <div
          className={`fixed h-full w-screen lg:hidden bg-black/50 backdrop-blur-sm top-0 right-0 transition-all z-50 ${
            isSideMenuOpen ? "translate-y-0" : "translate-y-full"
          }`}
        >
          <section
            className={
              theme === "light"
                ? "text-black bg-white flex-col absolute left-0 top-0 h-screen p-8 gap-4 z-50 w-full flex"
                : `text-white bg-[#12212a] flex-col absolute left-0 top-0 h-screen p-8 gap-4 z-50 w-full flex`
            }
          >
            <IoCloseOutline
              onClick={() => setMenu(false)}
              className="mt-0 mb-8 text-3xl cursor-pointer text-[#3190E5]"
            />
            {navlinks.map((d, i) => (
              <NavLink
                key={i}
                className={
                  theme === "light"
                    ? "font-bold border border-double border-[#3190E5] px-1 py-2 rounded-lg text-center"
                    : "font-bold border border-double border-[#3190E5] px-1 py-2 rounded-lg text-center"
                }
                to={d.link}
                onClick={handleNavLinkClick}
              >
                {d.label}
              </NavLink>
            ))}
            {user && (
              <>
                <div className="dropdown dropdown-hover border border-double border-[#3190E5] px-1 py-2 rounded-lg">
                  <div
                    tabIndex={0}
                    role="button"
                    className={`font-bold transition-all duration-300 ease-linear text-center`}
                  >
                    <p>Dashboard</p>
                  </div>
                  <ul
                    tabIndex={0}
                    className={
                      theme === "light"
                        ? "dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-full"
                        : "dropdown-content text-sm z-[1] bg-[#192a34] menu p-2 shadow  rounded-box w-full"
                    }
                  >
                    <li>
                      <NavLink to="/addservice" onClick={handleNavLinkClick}>
                        Add Service
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/manageServices"
                        onClick={handleNavLinkClick}
                      >
                        Manage Services
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="/bookedService" onClick={handleNavLinkClick}>
                        Booked Service
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="/serviceTodo" onClick={handleNavLinkClick}>
                        Service To Do
                      </NavLink>
                    </li>
                  </ul>
                </div>
              </>
            )}

            {!user && (
              <div className="flex flex-col justify-center items-center gap-4">
                <NavLink
                  className="w-full rounded text-center transition-all duration-300 ease-linear hover:bg-blue-600 bg-blue-500 px-2 py-1 text-white font-bold hover:text-gray-100"
                  to="/login"
                  onClick={handleNavLinkClick}
                >
                  Login
                </NavLink>
              </div>
            )}
          </section>
        </div>

        <section className="flex items-center gap-4">
          <Tooltip>
            <label className="cursor-pointer grid place-items-center">
              <input
                onChange={handleThemeChange}
                checked={theme === "dracula"}
                type="checkbox"
                className="toggle theme-controller bg-base-content row-start-1 col-start-1 col-span-2"
              />
              <svg
                className="col-start-1 row-start-1 stroke-base-100 fill-base-100"
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="12" cy="12" r="5" />
                <path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
              </svg>
              <svg
                className="col-start-2 row-start-1 stroke-base-100 fill-base-100"
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
              </svg>
            </label>
          </Tooltip>
          {loading && !user ? (
            <div className="text-xs"></div>
          ) : (
            <>
              {user && (
                <>
                  <Tooltip
                    title={user.displayName}
                    position="top"
                    trigger="mouseenter"
                  >
                    <div className="dropdown dropdown-end z-30">
                      <div
                        tabIndex={0}
                        role="button"
                        className="btn btn-ghost btn-circle avatar"
                      >
                        <div className="w-10 rounded-full">
                          <img
                            alt="User Avatar"
                            src={user?.reloadUserInfo?.photoUrl || avatar}
                          />
                        </div>
                      </div>
                      <ul
                        tabIndex={0}
                        className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
                      >
                        <li>
                          <NavLink
                            to="/myprofile"
                            className={({ isActive }) =>
                              isActive
                                ? "justify-between font-bold"
                                : "justify-between font-bold"
                            }
                          >
                            My Profile
                          </NavLink>
                        </li>
                      </ul>
                    </div>
                  </Tooltip>
                  <button
                    onClick={handleSignOut}
                    className="font-bold rounded hover:bg-blue-600 bg-blue-500 text-white px-2 py-1 transition-all duration-300 ease-linear"
                  >
                    Logout
                  </button>
                </>
              )}
              {!user && (
                <div className="flex justify-center items-center gap-2">
                  <NavLink
                    className="hidden rounded lg:block hover:bg-blue-600 bg-blue-500 transition-all duration-300 ease-linear px-2 py-1 text-white font-bold hover:text-gray-100"
                    to="/login"
                    onClick={handleNavLinkClick}
                  >
                    Login
                  </NavLink>
                </div>
              )}
            </>
          )}
        </section>
      </nav>
      <hr />
    </main>
  );
}
