import React from "react";
import img1 from "../Images/Offer-Video-Thumb-New.webp";
import Threelines from "./Threelines";
const Preemioffer = () => {
  return (
    <div id="preemioffer">
      <div className="">
        <img src={img1} className="w-full h-full" alt="img1" />
      </div>
      <Threelines />
    </div>
  );
};

export default Preemioffer;
