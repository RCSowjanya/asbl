import React from "react";
import img1 from "../Images/Sports-facilities.webp";
import img2 from "../Images/Swimming-pool-new.webp";
import img3 from "../Images/Yoga.webp";
import img4 from "../Images/Fitness-1-new.webp";
import img5 from "../Images/Fitness-2.webp";
import Threelines from "./Threelines";

const Fitness = () => {
  const data = [
    {
      id: 1,
      img: img1,
      heading: "Equisite Sports Facilities",
      description:
        "Our state-of-the-art sports facilities are meticulously designed to inspire and engage individuals of all ages and skill levels",
      hashtags: "#Badminton #Basketball #Squash #TurfGround",
    },
    {
      id: 2,
      img: img2,
      heading: "Swimming pool",
      description:
        "The fitness amenities overlook the expansive pool, carefully placed in a double heighted space",
      hashtags: "#SwimmingPool #KidsPool #PoolDeck",
    },
    {
      id: 3,
      img: img3,
      heading: "Yoga & Fitness Room",
      description:
        "Our state-of-the-art sports facilities are meticulously designed to inspire and engage individuals of all ages and skill levels",
      hashtags: "#Badminton #Basketball #Squash #TurfGround",
    },
  ];

  return (
    <section id="fitness">
      <h3 className="tracking-[3vw] text-2xl font-[300] uppercase text-center mb-[3%] mt-[5%]">
        fitness
      </h3>
      <div className="flex gap-5 mx-[5%] mt-[5%]">
        <div className="w-1/2 max-[600px]:w-full">
          <img src={img4} className="w-full h-full" alt="fitness-new1" />
        </div>
        <div className="w-1/2 max-[600px]:w-full">
          <img src={img5} className="w-full h-full" alt="fitness-new2" />
        </div>
      </div>
      <div className="mx-[5%]">
        <h3 className="text-[#AE8F56] text-2xl tracking-[1px] my-[3%] font-[600] un">
          HEALTH & FITNESS, SPREAD OVER 30,000 SQ FT
        </h3>
        <p className="mb-6">
          This vast space is dedicated to fitness includes the biggest gym in
          the segment! So now stay fit, the way you want!
        </p>
        <div class="flex flex-wrap gap-4 max-[600px]:flex-col text-[#AE8F56] mb-[4%]">
          #Gym #Calisthenics #OutdoorFitnessStation
        </div>
      </div>
      <div className="my-[5%]">
        {data.map((item) => (
          <div key={item.id} className="flex flex-wrap mb-[2%]">
            {item.id % 2 !== 0 ? (
              // For odd IDs: Image on the left, content on the right
              <React.Fragment>
                <div className="w-1/2 max-[600px]:w-full">
                  <img
                    src={item.img}
                    alt={item.heading}
                    className="w-full h-auto"
                  />
                </div>
                <div className="w-1/2 max-[600px]:w-full flex flex-col justify-center p-4">
                  <h2 className="text-xl font-bold text-[#AE8F56]">
                    {item.heading}
                  </h2>
                  <p className="my-5">{item.description}</p>
                  <p className="text-lg text-[#AE8F56] font-bold">
                    {item.hashtags}
                  </p>
                </div>
              </React.Fragment>
            ) : (
              // For even IDs: Content on the left, image on the right
              <React.Fragment>
                <div className="w-1/2 max-[600px]:w-full flex flex-col justify-center p-4">
                  <h2 className="text-xl font-bold text-[#AE8F56]">
                    {item.heading}
                  </h2>
                  <p className="my-5">{item.description}</p>
                  <p className="text-lg text-[#AE8F56] font-bold">
                    {item.hashtags}
                  </p>
                </div>
                <div className="w-1/2 max-[600px]:w-full">
                  <img
                    src={item.img}
                    alt={item.heading}
                    className="w-full h-auto"
                  />
                </div>
              </React.Fragment>
            )}
          </div>
        ))}
        {/*---3lines---*/}
        <div className="my-[4%]">
          <Threelines />
        </div>
      </div>
    </section>
  );
};

export default Fitness;
