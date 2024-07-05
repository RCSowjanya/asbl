import React, { useRef, useState, useEffect } from "react";
import videobg from "../Videos/Web-Teaser-Nov.mp4";
import mousegif from "../Images/mouse-animaton.gif";
import Navbar from "./Navbar";
import Brochure from "./Brochure";
import VideoThumbnail from "./VideoThumbnail";
import Location from "./Location";
import Progress from "./Progress";
import UnitPlans from "./UnitPlans";
import Lifecycle from "./Lifecycle";
import Select from "./Select";
import OtherProjects from "./OtherProjects";
import Footer from "./Footer";
const Home = () => {
  const navbarSectionRef = useRef(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > window.innerHeight) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScrollToNextSection = () => {
    if (navbarSectionRef.current) {
      navbarSectionRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div>
      {/*----Main page video bg----*/}
      <div className="h-screen w-full relative max-[600px]:hidden">
        <video
          className="h-screen w-full object-cover"
          src={videobg}
          autoPlay
          loop
          muted
          playsInline
        />
        <div className="absolute bottom-[2%] left-0 right-0 text-center">
          <img
            src={mousegif}
            className="w-8 mx-auto mb-2"
            alt="mouse-gif-animation"
          />
          <p
            className="text-white font-md uppercase tracking-[3px] text-[13px] cursor-pointer"
            onClick={handleScrollToNextSection}
          >
            Click / Scroll To Unleash The Experience
          </p>
        </div>
      </div>
      {/*----Main page video bg-close---*/}
      {/*---navbar and brochure section----*/}
      {/* Navbar section */}
      <div
        ref={navbarSectionRef}
        className={isScrolled ? "sticky top-0 z-50 bg-white" : ""}
      >
        <Navbar />
      </div>
      <div>
        <Brochure />
      </div>
      {/*---navbar and brochure section----*/}
      <VideoThumbnail />
      <Progress />
      <UnitPlans />
      <Lifecycle />
      <Select />
      <Location />
      <OtherProjects />
    </div>
  );
};

export default Home;
