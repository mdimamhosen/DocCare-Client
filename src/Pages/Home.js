import React, { useContext } from "react";
import Service from "../Components/Services";
import ClinicAndSpecialities from "../Components/ClinicAndSpecialities ";
import Gallery from "../Components/Gallery";
// import AvailableServiceContent from "../Components/AvailableServiceContent ";
import Offer from "../Components/Offers";
import Subscribe from "../Components/Subscribe";
import HeroSection from "../Components/HeroSection";
import InfoPage from "../Components/InfoPage";
import SixCard from "../Components/SixCard";
import { AppContext } from "../ContextProvider/AppContext";

const Home = () => {
  const { user } = useContext(AppContext);

  return (
    <div className=" ">
      <HeroSection />
      <InfoPage />
      <SixCard />
      <Offer />
      {/* <AvailableServiceContent /> */}
      <Service />
      <ClinicAndSpecialities />
      <Gallery />
      <Subscribe />
    </div>
  );
};

export default Home;
