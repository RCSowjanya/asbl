import React from "react";
import img1 from "../Images/OL-img-1.webp";
import img2 from "../Images/OL-img-2.webp";

const Outdoor = () => {
  return (
    <div>
      {/*----for desktop----*/}
      <div className="flex items-center justify-center mt-[5%] max-[1000px]:hidden bg-[#f8ece1]">
        <div className="w-1/3">
          <h1 className="text-5xl ml-[18%]">Outdoor</h1>
          <h1 className="text-5xl underline ml-[18%] mt-[4%]">Living</h1>
        </div>
        <div className="w-2/3">
          {/*--first row---*/}
          <div className="flex items-center border-b border-[#AE8F56]">
            <div className="w-1/2 border-r border-[#AE8F56]">
              <div className="flex flex-col justify-center h-52 text-right pr-[8%]">
                <h2 className="text-2xl mb-[5%]">
                  Outdoor Living <br /> Explainer
                </h2>
                <p className="text-[11px]">
                  What is outdoor living? How is it different from a normal
                  balcony? Check this video to get your questions answered.
                </p>
              </div>
            </div>
            <div className="w-1/2 pl-[5%]">
              <div className="h-full flex items-center">
                <img
                  src={img1}
                  className="w-full h-full object-cover rounded-lg"
                  alt="img1"
                />
              </div>
            </div>
          </div>
          {/*---first row close--*/}
          {/*--second row---*/}
          <div className="flex items-center">
            <div className="w-1/2 pr-[5%]">
              <div className=" h-full flex items-center">
                <img
                  src={img2}
                  className="w-full h-full object-cover  rounded-lg"
                  alt="img2"
                />
              </div>
            </div>
            <div className="w-1/2 border-l border-[#AE8F56]">
              <div className="flex flex-col justify-center h-52 text-left pl-[8%]">
                <h2 className="text-2xl mb-[5%]">
                  Outdoor Living <br /> Lifestyle
                </h2>
                <p className="text-[11px]">
                  What is outdoor living? How is it different from a normal
                  balcony? Check this video to get your questions answered.
                </p>
              </div>
            </div>
          </div>
          {/*--second row close---*/}
        </div>
      </div>
      <div className="bg-[#ae8f56] h-24 flex items-center justify-between px-[4%] max-[600px]:flex-col max-[600px]:h-28 max-[600px]:py-[5%]">
        <p className="text-white">Are you Interested In Property</p>
        <button className="rounded-full bg-white py-2 px-6 text-sm">
          connect With Us &rarr;
        </button>
      </div>
      {/*--for desktop close---*/}
      {/*---for mobile----*/}
      <div className="text-center min-[1001px]:hidden bg-[#f8ece1] py-[13%]">
        <h2 className="text-3xl pb-[6%]">Outdoor Living</h2>
        <div className="flex gap-3 ">
          <img src={img1} className="w-1/2" alt="img1" />
          <div className="w-1/2">
            <h2 className="text-[12px] mb-[5%]">
              Outdoor Living <br /> Explainer
            </h2>
            <p className="text-[8px]">
              What is outdoor living? How is it different from a normal balcony?
              Check this video to get your questions answered.
            </p>
          </div>
        </div>
        <div className="flex gap-3 pt-[8%]">
          <img src={img1} className="w-1/2" alt="img1" />
          <div className="w-1/2">
            <h2 className="text-[12px] mb-[5%]">
              Outdoor Living <br /> Lifestyle
            </h2>
            <p className="text-[8px]">
              What is outdoor living? How is it different from a normal balcony?
              Check this video to get your questions answered.
            </p>
          </div>
        </div>
      </div>
      {/*---for mobile close----*/}
    </div>
  );
};

export default Outdoor;
