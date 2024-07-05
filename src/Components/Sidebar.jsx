import React from "react";
import Scrollspy from "react-scrollspy";

function Sidebar({ items, activeSection, setActiveSection }) {
  return (
    <div className="fixed top-0 w-64 left-0 h-screen bg-gray-200 pt-6 max-[600px]:hidden">
      <Scrollspy
        items={items.map((item) => item.id)}
        currentClassName="is-active"
        className="space-y-4 px-8 pt-36 z-[1000]"
      >
        {items.map((item) => (
          <li key={item.id} className="list-none space-y-3">
            <a
              href={`#${item.id}`}
              className={`text-lg font-semibold text-gray-700 hover:text-blue-500 transition-colors duration-200 ${
                activeSection === item.id
                  ? "border-l-4 border-[#c19451] pl-2"
                  : ""
              }`}
              onClick={(e) => {
                e.preventDefault();
                console.log(`Navigating to section: ${item.id}`);
                setActiveSection(item.id);
              }}
            >
              {item.title}
            </a>
          </li>
        ))}
      </Scrollspy>
    </div>
  );
}

export default Sidebar;
