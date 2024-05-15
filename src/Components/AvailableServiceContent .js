import React from "react";
import img from "../images/features/feature.png";
import img2 from "../images/features/feature-02.jpg";
import img3 from "../images/features/feature-01.jpg";
import img4 from "../images/features/feature-05.jpg";
import img5 from "../images/features/feature-06.jpg";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import SwiperCore from "swiper/core";

import "swiper/css";

SwiperCore.use([Navigation, Autoplay]);

const AvailableServiceContent = () => {
  const availabeServiceArray = [
    { title: "ICU", img: img },
    { title: "Chamber", img: img5 },
    { title: "Patient Ward", img: img2 },
    { title: "Test Room", img: img3 },
    { title: "Laboratory", img: img4 },
  ];
  return (
    <div className="mb-8 lg:mb-16 text-center border">
      <h2 className="text-lg lg:text-2xl font-semibold uppercase mb-2">
        Available Service
      </h2>
      <p className="text-sm lg:text-base text-gray-500">
        Lorem ipsum dolor sit amet consectetur adipisicing.
      </p>
      <div className="flex justify-center items-center gap-4 mt-4">
        <Swiper
          spaceBetween={2}
          slidesPerView={4}
          loop={true}
          centeredSlides={true}
          autoplay={{ delay: 2000, disableOnInteraction: false }}
          className="w-full"
        >
          {availabeServiceArray.map((item, index) => (
            <SwiperSlide key={index} className="my-2">
              <div className="feature-item text-center">
                <img
                  src={item.img}
                  className="w-24 h-24 lg:w-32 lg:h-32 object-cover rounded-full shadow-md mx-auto"
                  alt=""
                />
                <p className="text-sm lg:text-base font-medium mt-2">
                  {item.title}
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default AvailableServiceContent;
