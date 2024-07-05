import React, { useState } from "react";
import Sidebar from "./Sidebar";
import Content from "./Content";
import Flooring from "./Flooring";

const items = [
  { id: "section1", title: "Flooring", content: <Flooring /> },
  { id: "section2", title: "Joinery Work", content: <Flooring /> },
  { id: "section3", title: "Plumbing", content: <Flooring /> },
  { id: "section4", title: "Electrical", content: <Flooring /> },
  { id: "section5", title: "Hand Railing", content: <Flooring /> },
  { id: "section6", title: "Parking", content: <Flooring /> },
  { id: "section7", title: "Lifts", content: <Flooring /> },
  { id: "section8", title: "LPG", content: <Flooring /> },
  { id: "section9", title: "Billing", content: <Flooring /> },
  {
    id: "section10",
    title: "Water Inlet for Kitchen/Utility",
    content: <Flooring />,
  },
  {
    id: "section11",
    title: "Internet / Cable / Telecom",
    content: <Flooring />,
  },
  { id: "section12", title: "Power Backup", content: <Flooring /> },
];

const Specifications = () => {
  const [activeSection, setActiveSection] = useState(items[0].id);

  const handleSetActiveSection = (sectionId) => {
    console.log(`Attempting to navigate to section: ${sectionId}`);
    setActiveSection(sectionId);
    const sectionElement = document.getElementById(sectionId);
    if (sectionElement) {
      sectionElement.scrollIntoView({ behavior: "smooth" });
      console.log(`Successfully navigated to section: ${sectionId}`);
    } else {
      console.error(`Section with id ${sectionId} not found`);
    }
  };

  return (
    <div className="flex">
      <Sidebar
        items={items}
        activeSection={activeSection}
        setActiveSection={handleSetActiveSection}
      />
      <Content items={items} />
    </div>
  );
};

export default Specifications;
