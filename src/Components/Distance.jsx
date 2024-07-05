import React, { useState } from "react";
import img1 from "../Images/Loft-Nearby-Map.webp";
import OtherProjects from "./OtherProjects";
const Distance = () => {
  const [activeTab, setActiveTab] = useState("nearby");
  return (
    <div id="finddistance">
      {/*----google map and nearby---*/}
      <div className="nearby-route flex flex-col items-center p-4">
        <div className="buttons mb-4 flex space-x-4">
          <button
            className={`px-4 py-2 rounded ${
              activeTab === "nearby"
                ? "bg-[#9D5088] text-white"
                : "bg-gray-200 text-gray-800"
            }`}
            onClick={() => setActiveTab("nearby")}
          >
            Nearby
          </button>
          <button
            className={`px-4 py-2 rounded ${
              activeTab === "googleMap"
                ? "bg-[#9D5088] text-white"
                : "bg-gray-200 text-gray-800"
            }`}
            onClick={() => setActiveTab("googleMap")}
          >
            Google Map
          </button>
        </div>
        <div className="content w-full flex justify-center items-center">
          {activeTab === "nearby" && (
            <img
              src={img1}
              alt="Nearby"
              className="w-full h-full object-cover"
            />
          )}
          {activeTab === "googleMap" && (
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.086319682117!2d-122.08424968468155!3d37.42206597982571!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fb5d0c7602b37%3A0xe23a3b51631f4b6b!2sGoogleplex!5e0!3m2!1sen!2sus!4v1596232140842!5m2!1sen!2sus"
              width="600"
              height="400"
              frameBorder="0"
              style={{ border: 0 }}
              allowFullScreen=""
              aria-hidden="false"
              tabIndex="0"
              title="Google Map"
            />
          )}
        </div>
      </div>
      <OtherProjects />
    </div>
  );
};

export default Distance;
