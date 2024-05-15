import React from "react";
import { Image } from "antd";

import img2 from "../images//MYSAVE/photo-1532938911079-1b06ac7ceec7.png";

import img3 from "../Assets3/photo-1576765608535-5f04d1e3f289.png";
import img4 from "../Assets3/photo-1581056771107-24ca5f033842.png";
import img5 from "../Assets3/photo-1584516150909-c43483ee7932.png";
import img6 from "../Assets3/photo-1590611936760-eeb9bc598548.png";
import img7 from "../Assets3/photo-1632053652571-a6a45052bbbd.png";
import img8 from "../Assets3/premium_photo-1668806642985-de4a.png";
import img9 from "../images/MYSAVE/photo-1631558556874-1d127211f574.png";

const Gallery = () => {
  const imageArray = [img2, img3, img4, img5, img6, img7, img8, img9];
  return (
    <section className="gallery container mx-auto my-8">
      <div className="text-center mb-5">
        <div className="section-title mb-3">
          <h2 className="text-3xl font-bold py-2">Gallery</h2>
          <p className="text-base text-gray-400">
            Some Of Our Great Works & Bonding Between Doctor and Patient
          </p>
        </div>
      </div>

      <div className="container mx-auto border  pt-1 shadow-xl">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 px-2">
          <Image.PreviewGroup>
            {imageArray.map((item, index) => (
              <div className="gallery-item" key={index}>
                <div className="gallery-lightbox relative overflow-hidden">
                  <Image
                    src={item}
                    alt=""
                    className="w-full h-full object-cover transition duration-300 ease-in-out transform hover:scale-105"
                    style={{
                      minHeight: "280px",
                      maxHeight: "none",
                    }}
                  />
                </div>
              </div>
            ))}
          </Image.PreviewGroup>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
