import React from "react";
import "./Subscribe.css";

const Subscribe = () => {
  return (
    <div className="text-center">
      {/* <h1 className="text-3xl md:text-5xl font-bold  ">Subscribe DocCare</h1> */}
      <div className="container mx-auto py-5">
        <div className="bg-gradient-to-r from-[#143086] to-[#041728] lg:rounded-s-full dark:bg-gray-900 mb-32">
          <div className="px-6 py-12 text-center md:px-12 lg:text-left">
            <div className="container mx-auto xl:px-32">
              <div className="grid items-center gap-12 lg:grid-cols-2">
                <div className="mt-12 lg:mt-0">
                  <h1 className="mb-12 text-5xl font-bold tracking-tight md:text-6xl xl:text-7xl text-white">
                    Do not miss <br />
                    <span className="text-[hsl(218,81%,75%)]">any updates</span>
                  </h1>
                  <p className="lead mb-4 opacity-70 text-white">
                    We have high-quality doctor and equipment for the your
                    service.
                  </p>
                </div>
                <div className="mb-12 lg:mb-0">
                  <div className="relative">
                    <h2 className="mb-12 text-center text-white text-3xl font-bold">
                      Subscribe to the DocCare
                    </h2>
                    <form>
                      <div className="relative mb-6">
                        <input
                          type="text"
                          placeholder="Name"
                          className="input  outline-none bg-transparent text-white font-extrabold    input-primary w-full  "
                        />
                        <input
                          type="text"
                          placeholder="Email"
                          className="input mt-3 outline-none  text-white font-extrabold bg-transparent input-primary w-full  "
                        />
                      </div>
                      <div className="flex  items-center gap-2 py-3 ">
                        <input
                          className=" "
                          type="checkbox"
                          value=""
                          id="exampleCheck96"
                        />
                        <label
                          htmlFor="exampleCheck96"
                          className="   text-white hover:cursor-pointer"
                        >
                          I have read and agree to the terms
                        </label>
                      </div>
                      <button
                        type="button"
                        className="btn btn-primary w-full h-12 font-bold text-lg rounded-lg  "
                      >
                        Subscribe
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
