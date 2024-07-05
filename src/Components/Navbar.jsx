import React, { useState } from "react";
import {
  FaSearch,
  FaBars,
  FaTimes,
  FaPlus,
  FaMinus,
  FaAngleRight,
} from "react-icons/fa";
import NavItems from "./NavItems";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdownIndex, setOpenDropdownIndex] = useState(null);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    setOpenDropdownIndex(null); // Close any open dropdown when toggling mobile menu
  };

  const handleDropdownToggle = (index) => {
    if (openDropdownIndex === index) {
      setOpenDropdownIndex(null); // Close the dropdown if it's already open
    } else {
      setOpenDropdownIndex(index); // Open the clicked dropdown
    }
  };

  const handleNavItemClick = () => {
    setIsMobileMenuOpen(false); // Close the mobile menu
    setOpenDropdownIndex(null); // Close any open dropdown
  };

  return (
    <nav className="bg-[#f9f6f1] z-[999] text-[#706E6B] px-10 py-4 max-[600px]:p-4  nav-mob sticky top-0 left-0 right-0">
      <div className="container mx-auto flex items-center justify-between">
        <div className="text-2xl font-bold min-[1000px]:hidden">
          <a href="/" className="border-b-4 border-b-double border-b-[#9d5088]">
            ASBL
          </a>
        </div>
        <div className="hidden min-[1000px]:flex space-x-4 items-center">
          {NavItems.slice(0, 4).map((item, index) => (
            <div key={index} className="relative group">
              <button className="hover:text-gray-900 mr-6">
                <a href={item.url}>{item.name}</a>
              </button>

              {item.dropdown && (
                <div className="absolute bg-[#ccc] right-[-40%] text-[0.8rem] z-[999] text-white mt-2 p-2 rounded shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center  w-[150px] hover:block">
                  <div className="dropdown-arrow"></div>
                  {item.dropdown.map((dropdownItem, idx) => (
                    <a
                      key={idx}
                      href={dropdownItem.ref}
                      className="block  hover:bg-gray-700 cursor-pointer"
                      onClick={handleNavItemClick}
                    >
                      {dropdownItem.name}
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
        <div className="text-center hidden min-[1000px]:flex">
          <a
            href="/"
            className="text-2xl font-bold border-b-4 border-b-double border-b-[#9d5088]"
          >
            ASBL
          </a>
        </div>
        <div className="hidden min-[1000px]:flex space-x-4 items-center">
          {NavItems.slice(4, 6).map((item, index) => (
            <div key={index + 4} className="relative group">
              <NavLink to={item.url}>
                <button className="hover:text-gray-300">{item.name}</button>
              </NavLink>
              {item.dropdown && (
                <div className="absolute right-0 bg-gray-900 text-white z-[999] mt-2 rounded shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="dropdown-arrow"></div>
                  {item.dropdown.map((dropdownItem, idx) => (
                    <a
                      key={idx}
                      href={dropdownItem.ref}
                      className="block px-4 py-2 hover:bg-gray-700 cursor-pointer"
                      onClick={handleNavItemClick}
                    >
                      {dropdownItem.name}
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
          <button className="hover:text-gray-300">
            <FaSearch />
          </button>
          <button className="border border-gray-700 text-[#706e6b] px-4 py-2 rounded-full">
            Enquire Now
          </button>
        </div>
        <div className="min-[1000px]:hidden flex items-center">
          <button onClick={toggleMobileMenu} className="text-[#706e6b]">
            <FaBars size={24} />
          </button>
        </div>
      </div>
      {isMobileMenuOpen && (
        <div>
          <div
            className="fixed inset-0 bg-[#0009] backdrop-blur-sm z-40"
            onClick={handleNavItemClick}
          ></div>
          <div
            className={`fixed top-0 right-0 h-full w-4/5 bg-[#f9f6f1] transform ${
              isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
            } transition-transform duration-300 ease-in-out z-50`}
          >
            <div className="flex justify-end p-4">
              <button onClick={toggleMobileMenu} className="text-[#706e6b]">
                <FaTimes size={24} />
              </button>
            </div>
            <div className="p-4">
              <div className="relative mb-4">
                <input
                  type="text"
                  className="w-full px-4 py-2 bg-[#f4ebde] border border-gray-300 rounded-full"
                  placeholder="Search"
                />
                <button className="absolute right-3 top-3 text-[#706e6b]">
                  <FaSearch />
                </button>
              </div>
              {NavItems.map((item, index) => (
                <div key={index} className="relative group">
                  <button
                    className="w-full text-left px-4 py-4 flex justify-between items-center"
                    onClick={() => handleDropdownToggle(index)}
                  >
                    <NavLink to={item.url} onClick={handleNavItemClick}>
                      {item.name}
                    </NavLink>
                    {item.dropdown && (
                      <span className="ml-2">
                        {openDropdownIndex === index ? <FaMinus /> : <FaPlus />}
                      </span>
                    )}
                  </button>

                  {item.dropdown && openDropdownIndex === index && (
                    <div className="text-[0.8rem] text-[#000000de] rounded shadow-lg">
                      <div className="dropdown-arrow"></div>
                      {item.dropdown.map((dropdownItem, idx) => (
                        <button
                          key={idx}
                          className="w-full text-left px-4 py-4 flex justify-between items-center"
                        >
                          <NavLink
                            to={dropdownItem.ref}
                            className="block px-4 py-2 hover:bg-gray-700"
                            onClick={handleNavItemClick}
                          >
                            {dropdownItem.name}
                          </NavLink>
                          <FaAngleRight size={22} className="text-[#7A7A7A]" />
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <div className="flex space-x-4 mt-4 items-center">
                <button className="border border-gray-700 text-[#706e6b] px-4 py-2 rounded-full">
                  Enquire Now
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
