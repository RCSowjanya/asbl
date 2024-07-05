import React from "react";
import masterplanimg from "../Images/Masterplan-high-v1.webp";
const MasterPlan = () => {
  return (
    <div>
      <div className="flex  gap-[18cqw] max-[600px]:flex-col  items-center justify-center">
        <div className="text-black max-[600px]:w-full">
          <ul className="space-y-4">
            <li>
              <span className="text-[#c67697]">1. </span> Entry/Exit Dropoff
            </li>
            <li>
              <span className="text-[#c67697]">2. </span>Resident Entry / Exit
            </li>
            <li>
              <span className="text-[#c67697]">3. </span>Cascading Waterfall
            </li>
            <li>
              <span className="text-[#c67697]">4. </span>Seating Alcove
            </li>
            <li>
              <span className="text-[#c67697]">5. </span>Reflective Pond
            </li>
            <li>
              <span className="text-[#c67697]">6. </span>Roundabout with
              Sculpture
            </li>
            <li>
              <span className="text-[#c67697]">7. </span>Open Lawn
            </li>
            <li>
              <span className="text-[#c67697]">8. </span>Gazebo Seating
            </li>
            <li>
              <span className="text-[#c67697]">9. </span>Basketball Court
            </li>
            <li>
              <span className="text-[#c67697]">10. </span>Kid’s Play Area
            </li>
            <li>
              <span className="text-[#c67697]">11. </span>Toddler’s Play Area
            </li>
            <li>
              <span className="text-[#c67697]">12. </span>Senior’s Court with
              Reflexology Park
            </li>
            <li>
              <span className="text-[#c67697]">13. </span>Outdoor Fitness
              Station
            </li>
          </ul>
        </div>
        <div className="text-black max-[600px]:w-full">
          <ul className="space-y-4">
            <li>
              <span className="text-[#c67697]">14. </span>Bicycle Parking
            </li>
            <li>
              <span className="text-[#c67697]">15. </span>Clubhouse
            </li>
            <li>
              <span className="text-[#c67697]">16. </span>Wall Fountain
            </li>
            <li>
              <span className="text-[#c67697]">17. </span>Lawn Spill out
            </li>
            <li>
              <span className="text-[#c67697]">18. </span>Amphitheater
            </li>
            <li>
              <span className="text-[#c67697]">19. </span>Multi-purpose Plaza
            </li>
            <li>
              <span className="text-[#c67697]">20. </span>Pet’s Park
            </li>
            <li>
              <span className="text-[#c67697]">21. </span>Bicycle Loop
            </li>
            <li>
              <span className="text-[#c67697]">22. </span>Jogging Loop
            </li>
            <li>
              <span className="text-[#c67697]">23. </span>Avenue Plantation
            </li>
            <li>
              <span className="text-[#c67697]">24. </span>Reflective Waterbody
            </li>
            <li>
              <span className="text-[#c67697]">25. </span>Themed Garden
            </li>
            <li>
              <span className="text-[#c67697]">26. </span>Party Spill out Area
            </li>
          </ul>
        </div>
        <div className="">
          <img
            src={masterplanimg}
            className="w-52 max-[600px]:w-full"
            alt="masterplanning"
          />
        </div>
      </div>
    </div>
  );
};

export default MasterPlan;
