import React from "react";
import img1 from "../Images/news1.webp";
import img2 from "../Images/news2.webp";
import img3 from "../Images/news3.webp";
const newsData = [
  {
    id: 1,
    image: img1,
    description: "Industry Leaders React to Nirmala Sitharaman's Budget's 2023",
    title: "01 February, 2023 03:46 PM IST",
    link: "#",
  },
  {
    id: 2,
    image: img2,
    description: "Tech-enabled construction steering real-estate business",
    title: "11 January, 2023 11:51 AM IST",
    link: "#",
  },
  {
    id: 3,
    image: img3,
    description: "ASBL Organizes 'National Engineer's Day Symposium",
    title: "16 September, 2022 02:36 PM IST",
    link: "#",
  },
];

const Media = () => {
  return (
    <div className="latest-news-container py-10">
      <h2 className="text-3xl font-bold text-center">Latest News</h2>
      <div className="w-24 h-1 bg-blue-500 mx-auto my-4"></div>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {newsData.map((news) => (
          <div key={news.id} className="bg-white p-6 rounded-lg shadow-lg">
            <img
              src={news.image}
              alt={news.title}
              className="w-full h-48 object-cover rounded-md mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">{news.title}</h3>
            <p className="text-gray-700 mb-4">{news.description}</p>
            <a href={news.link} className="text-blue-500 hover:underline">
              Learn More
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Media;
