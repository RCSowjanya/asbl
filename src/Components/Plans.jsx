import React, { useState, useRef } from "react";
import Sliding from "../Components/Sliding";
import leavingroom from "../Images/Living_room.webp";
import bathrooms from "../Images/Bathrooms.webp";
import dining from "../Images/Dining.webp";
import guestbedroom from "../Images/Guest_Bedroom.webp";
import kidsbedroom from "../Images/Kids_Bedroom.webp";
import kitchen from "../Images/Kitchen-Puja.webp";
import masterbedroom from "../Images/Master_Bedroom.webp";
import outdoor from "../Images/Outdoor_Living-new.webp";
import MasterPlan from "./MasterPlan";
import TowerPlan from "./TowerPlan";
import UrbanCorridor from "./UrbanCorridor";
import Outdoor from "./Outdoor";
const unitPlansData = [
  {
    image: leavingroom,
    heading: "Living Room",
    content: "1. Largest main door in the segment",
    subcontent: "8’ height",
    content1: "2. Maximum floor to ceiling height across the flat",
    subcontent1: "10’5” (6 inches more than usual)",
    content2: " 3. Designer tiles",
    subcontent2:
      "800 x 800 mm Double Charged Vitrified, Designer tiles with Spacer Joint",
  },
  {
    image: outdoor,
    heading: "Outdoor Living",
    content: "Room-sized balcony",
    subcontent: "7’ 10” x 10’ 10” in dimensions",
    content1: "Built for convenience",
    subcontent1:
      "Comes with planter box, water inlet & outlet, light, fan, and charging point",
    content2: "Premium designer tiles",
    subcontent2: "Wood finish Anti-Skid Vitrified tiles with Spacer Joint",
  },
  {
    image: kitchen,
    heading: "Kitchen+Puja",
    content: "Designer tiles",
    subcontent:
      "800 x 800 mm Double Charged Vitrified, Designer tiles with Spacer Joint",
    content1: "Connected to the utility room",
    subcontent1:
      "The spacious kitchen is attached to the utility room for convenience",
  },
  {
    image: dining,
    heading: "Dining",
    content: "Designer tiles",
    subcontent:
      "800 x 800 mm Double Charged Vitrified, Designer tiles with Spacer Joint",
    content1: "Connected to Outdoor Living balcony",
    subcontent1:
      "The grand view of the balcony makes for a beautiful view while eating",
  },
  {
    image: masterbedroom,
    heading: "Master Bedroom",
    content: "Comes with the option of attached balcony",
    subcontent:
      "1870 south balcony flats come with the option of having your own attached balcony in the master bedroom",
    content1: "Master bathroom with bigger tiles",
    subcontent1:
      "600 x 1200 mm anti-skid, matte finish, designer tiles with spacer joint to make your experience even grandier",
  },
  {
    image: guestbedroom,
    heading: "Guest Room",
    content: "Comes with the option of attached balcony",
    subcontent:
      "1870 north balcony flats come with the option of having your own attached balcony in the Guest bedrooms",
  },
  {
    image: kidsbedroom,
    heading: "Kids Bedroom",
    content: "Comes with the option of attached balcony",
    subcontent:
      "1870 north balcony flats come with the option of attached balcony in the kids bedrooms",
  },
  {
    image: bathrooms,
    heading: "Bathroom",
    content: "Vanity counter",
    subcontent:
      "All bathrooms would have vanity counters for convenience and grandeur",
    content1: "Premium fittings",
    subcontent1:
      "Chrome plated as well as vanity fittings would be of luxury brands such as Grohe, Vitra, and Duravit or equivalent",
    content2: "Bigger tiles in the master bathroom",
    subcontent2:
      "While other bathrooms would have 600x600mm tiles, the master bathroom would have 600x1200mm tiles",
  },
];

const Plans = () => {
  const [activeSection, setActiveSection] = useState("unitPlans");
  const unitPlansRef = useRef(null);
  const masterPlansRef = useRef(null);
  const towerPlansRef = useRef(null);
  const urbanCorridorRef = useRef(null);
  const outdoorRef = useRef(null);
  const handleScroll = (ref, section) => {
    setActiveSection(section);
    ref.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div>
      <Menubar
        activeSection={activeSection}
        handleScroll={handleScroll}
        refs={{
          unitPlansRef,
          masterPlansRef,
          towerPlansRef,
          urbanCorridorRef,
          outdoorRef,
        }}
      />
      <div className="">
        <Section ref={unitPlansRef} title="Unit Plans" id="unitplans">
          <Sliding data={unitPlansData} />
        </Section>
        <Section ref={outdoorRef} title="Outdoor" id="outdoor">
          <Outdoor />
        </Section>
        <Section ref={masterPlansRef} title="Master Plans" id="masterplans">
          <MasterPlan />
        </Section>
        <Section ref={towerPlansRef} title="Tower Plans" id="towerplans">
          <TowerPlan />
        </Section>
        <Section
          ref={urbanCorridorRef}
          title="Urban Corridor"
          id="urbancorridor"
        >
          <UrbanCorridor />
        </Section>
      </div>
    </div>
  );
};

const Menubar = ({ activeSection, handleScroll, refs }) => (
  <div className="bg-gray-200 p-2 flex justify-center space-x-4 ">
    <button
      className={`px-4 py-2 rounded-lg max-[600px]:text-[12px]  max-[600px]:px-0 max-[600px]:py-0 max-[600px]:rounded-none${
        activeSection === "unitPlans"
          ? "bg-transparent border border-[#9D5088] text-[#9D5088] text-[200] max-[600px]:border-none"
          : ""
      }`}
      onClick={() => handleScroll(refs.unitPlansRef, "unitPlans")}
    >
      Unit Plans
    </button>

    <button
      className={`px-4 py-2 rounded-lg max-[600px]:text-[12px]  max-[600px]:px-0 max-[600px]:py-0 max-[600px]:rounded-none ${
        activeSection === "masterPlans"
          ? "bg-transparent border border-[#9D5088] text-[#9D5088] text-[200] max-[600px]:border-none"
          : ""
      }`}
      onClick={() => handleScroll(refs.masterPlansRef, "masterPlans")}
    >
      Master Plans
    </button>
    <button
      className={`px-4 py-2 rounded-lg max-[600px]:text-[12px]  max-[600px]:px-0 max-[600px]:py-0 max-[600px]:rounded-none ${
        activeSection === "towerPlans"
          ? "bg-transparent border border-[#9D5088] text-[#9D5088] text-[200] max-[600px]:border-none"
          : ""
      }`}
      onClick={() => handleScroll(refs.towerPlansRef, "towerPlans")}
    >
      Tower Plans
    </button>
    <button
      className={`px-4 py-2 rounded-lg max-[600px]:text-[12px] max-[600px]:px-0 max-[600px]:py-0 max-[600px]:rounded-none ${
        activeSection === "urbanCorridor"
          ? "bg-transparent border border-[#9D5088] text-[#9D5088] text-[200] max-[600px]:border-none"
          : ""
      }`}
      onClick={() => handleScroll(refs.urbanCorridorRef, "urbanCorridor")}
    >
      Urban Corridor
    </button>
  </div>
);

const Section = React.forwardRef(({ title, children, id }, ref) => (
  <div ref={ref} id={id} className="my-8 p-4">
    <h2 className="text-2xl mb-[2%] underline mx-[3%]">{title}</h2>
    {children}
  </div>
));

export default Plans;
