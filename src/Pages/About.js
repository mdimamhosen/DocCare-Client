import React from "react";
import img from "../images/MYSAVE/photo-1532938911079-1b06ac7ceec7.png";
import { Typewriter, Cursor } from "react-simple-typewriter";

import { motion } from "framer-motion";

const About = () => {
  React.useEffect(() => {
    document.title = "About Us || DocCare";
  });
  return (
    <section className="container mx-auto py-10 px-2">
      <header className="text-center mb-10">
        <h1 className="text-4xl font-bold mb-3">
          Welcome to Our Consultation Service
        </h1>
        <p className="text-lg text-gray-600">
          Providing expert medical advice and care for your well-being.
        </p>
      </header>
      <div className="flex flex-col lg:flex-row justify-center items-center">
        <motion.img
          src={img}
          alt="Doctor"
          className="w-full lg:w-1/2 mb-4 lg:mb-0 rounded-lg shadow-lg"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.5 }}
        />
        <div className="lg:ml-10">
          <motion.h2
            className="text-2xl font-bold mb-3"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            Meet Our Experienced Doctors
          </motion.h2>
          <motion.p
            className="text-lg mb-5"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            At our consultation service, we have a team of dedicated and
            experienced doctors who are committed to providing personalized
            healthcare solutions tailored to your needs.
          </motion.p>
          <motion.div
            className="text-xl text-blue-500 font-bold mb-5"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            <Typewriter
              loop
              cursor
              cursorStyle="_"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
              words={["Expertise", "Compassion", "Dedication"]}
            />
          </motion.div>
          <motion.p
            className="text-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            Our doctors combine expertise, compassion, and dedication to ensure
            that you receive the highest quality of care and support on your
            journey to optimal health and well-being.
          </motion.p>
        </div>
      </div>
    </section>
  );
};

export default About;
