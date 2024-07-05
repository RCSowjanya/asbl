const NavItems = [
  {
    name: "Plans",
    url: "/plans",
    dropdown: [
      { name: "Unit Plan", ref: "/plans/#unitplans" },
      { name: "Outdoor living", ref: "/plans/#outdoor" },
      { name: "Master Plan", ref: "/plans/#masterplans" },
      { name: "Tower Plan", ref: "/plans/#towerplans" },
      { name: "urban corridor", ref: "/plans/#urbancorridor" },
    ],
  },
  {
    name: "Amenities",
    url: "/amenities",
    dropdown: [
      { name: "Arrival Experience", ref: "/amenities/#arrivalexperience" },
      { name: "Fitness", ref: "/amenities/#fitness" },
      { name: "Guest Experience", ref: "/amenities/#guestexp" },
      { name: "Practical Luxury", ref: "/amenities/#practicalluxury" },
      { name: "Childcare", ref: "/amenities/#childcare" },
    ],
  },
  {
    name: "Location",
    url: "/location",
    dropdown: [
      { name: "Connectivity", ref: "/location/#connectivity" },
      {
        name: "Why Finanical District?",
        ref: "/location/#whyfinacialdistrict",
      },
      { name: "Near By", ref: "/location/#nearby" },
      { name: "Find Distance", ref: "/location/#finddistance" },
    ],
  },
  {
    name: "Price",
    url: "/price",
    dropdown: [{ name: "Preemioffer", ref: "/price/#preemioffer" }],
  },
  {
    name: "Specifications",
    url: "/specifications",
  },
  {
    name: "Media",
    url: "/media",
  },
];
export default NavItems;
