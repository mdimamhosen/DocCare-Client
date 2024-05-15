import React from "react";
import { useForm } from "react-hook-form";
import { FaLocationArrow, FaEnvelope, FaPhoneAlt } from "react-icons/fa";
import { message } from "antd";

const Contact = () => {
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data) => {
    message.success("Message sent successfully!");
    reset();
  };
  React.useEffect(() => {
    document.title = "Contact Us || DocCare";
  });

  return (
    <>
      <section id="contact" className="contact mt-5 mb-5  h-[100%]">
        <div className="container mx-auto px-4">
          <div className="lg:flex   justify-between gap-2 h-[100%]">
            {/* Contact Info */}
            <div className="lg:w-1/3 mb-8 lg:mb-0 border h-[100%]">
              <div className="info rounded p-3  shadow-xl border-indigo-500 ">
                <div className="flex flex-col gap-1">
                  <div className="flex mb-2 gap-2 items-center">
                    <FaLocationArrow className="icon" />
                    <div>
                      <h4 className="text-xl font-bold">Location:</h4>
                    </div>
                  </div>
                  <p>
                    1212 Dhaka, Kazi Nozrul Avenur, Sylhet, Bangladesh 03214
                  </p>
                </div>

                <div className="flex flex-col  ">
                  <div className="flex mb-2 gap-2 items-center">
                    <FaEnvelope className="icon" />
                    <div>
                      <h4 className="text-xl font-bold">Email:</h4>
                    </div>
                  </div>
                  <p>mdimam.cse9.bu@gmail.com</p>
                </div>

                <div className="flex flex-col ">
                  <div className="flex mb-2 gap-2 items-center">
                    <FaPhoneAlt className="icon" />
                    <div>
                      <h4 className="text-xl font-bold">Call:</h4>
                    </div>
                  </div>
                  <p>+880 179 953 2172</p>
                </div>
              </div>
            </div>

            <div className="lg:w-2/3">
              <div className="mb-5 p-2 rounded border   shadow-xl">
                <form onSubmit={handleSubmit(onSubmit)}>
                  <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                    <div>
                      <label className="block mb-2 font-bold">First Name</label>
                      <input
                        required
                        {...register("firstName")}
                        className="form-control outline-none bg-slate-100 rounded-md p-2 w-full text-black"
                        placeholder="First Name"
                      />
                    </div>

                    <div>
                      <label className="block mb-2 font-bold">Last Name</label>
                      <input
                        required
                        {...register("lastName")}
                        className="form-control outline-none bg-slate-100 rounded-md p-2 w-full text-black"
                        placeholder="Last Name"
                      />
                    </div>

                    <div>
                      <label className="block mb-2 font-bold">Email</label>
                      <input
                        required
                        {...register("email")}
                        type="email"
                        className="form-control outline-none bg-slate-100 rounded-md p-2 w-full text-black"
                        placeholder="Email"
                      />
                    </div>

                    <div>
                      <label className="block mb-2 font-bold">Subject</label>
                      <input
                        required
                        {...register("subject")}
                        className="form-control outline-none bg-slate-100 rounded-md p-2 w-full text-black"
                        placeholder="Enter your subject"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block mb-2 font-bold">Message</label>
                    <textarea
                      required
                      {...register("text")}
                      className="form-control outline-none bg-slate-100 rounded-md p-2 w-full text-black"
                      cols="10"
                      rows="2"
                      placeholder="Enter your message"
                    />
                  </div>

                  <div className="text-center pt-2">
                    <button
                      type="submit"
                      className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
                    >
                      Send Message
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>

        <div className="container mx-auto p-4 border rounded-md shadow-xl ">
          <iframe
            title="Google Map"
            style={{ border: 0, width: "100%", height: "350px" }}
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d58894.13268248368!2d90.3117251869068!3d22.69538811378153!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x37553407fbece487%3A0x5d069b9599d4414a!2sBarishal!5e0!3m2!1sen!2sbd!4v1715322947415!5m2!1sen!2sbd"
            frameBorder="0"
            allowFullScreen
          ></iframe>
        </div>
      </section>
    </>
  );
};

export default Contact;
