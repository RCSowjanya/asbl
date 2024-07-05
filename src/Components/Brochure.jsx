import React from "react";
import linespattern from "../Images/Location-element-lines.webp";
import { FaDownload } from "react-icons/fa";
import elementline from "../Images/Element-lines.webp";
const Brochure = () => {
  return (
    <div className="bg-[#f9ede2] relative h-full">
      <img
        src={linespattern}
        alt="location-elet-lines-patterns"
        className="w-full"
      />
      {/*---exclusive and floors----*/}
      <div className="absolute top-[19%] left-0 right-0 text-center  max-[600px]:top-[6%]">
        <div className="flex items-center justify-center gap-5">
          <div>
            <h2 className="tracking-[5px] text-[#0F1520] text-[1.5cqw]  uppercase mb-[15%]  max-[600px]:mb-[5%]">
              Exclusive
            </h2>
            <h3 className="text-3xl tracking-[.4vw]  max-[600px]:text-[14px] font-[300]">
              3BHk<span className="text-sm">s</span>
            </h3>
          </div>
          <div className="border-l-2 border-[#decbb0] h-16 pt-[4%]"></div>
          <div>
            <p className="tracking-[5px] text-[#0F1520] text-[1.5cqw] uppercase mb-[15%]  max-[600px]:mb-[5%]">
              Floors
            </p>
            <h3 className="text-3xl  max-[600px]:text-[14px] tracking-[.4vw] font-[300]">
              G+45<span className="text-sm">s</span>
            </h3>
          </div>
        </div>
      </div>
      {/*---exclusive and floors-close---*/}
      {/*----download brochure----*/}
      <div className="absolute top-[32%] left-0 right-0 text-center  max-[600px]:top-[23%]">
        <div className="text-center">
          <h3 className="my-[3%] text-[1.7cqw] tracking-[.4cqw] uppercase font-[300]  max-[600px]:my-[8%]">
            Financial District, gachibowli
          </h3>
        </div>
        <div className="flex justify-center my-8  max-[600px]:mt-[-5%] ">
          <a
            href="/brochure.pdf" // Replace with your brochure file path
            download
            className="flex items-center space-x-2 px-10 py-2 bg-[#9D5088] text-white rounded-full"
          >
            <FaDownload />
            <span className="">Brochure</span>
          </a>
        </div>
      </div>
      {/*----download brochure-closed---*/}
      {/*---element line---*/}
      <div className="absolute bottom-[-29cqw] left-0 right-0 text-center max-[600px]:bottom-[-32cqw]">
        <div className="flex justify-center mt-8">
          <img src={elementline} className="w-[10vw]" alt="elementlinekey" />
        </div>
      </div>
      {/*---element line-close--*/}
    </div>
  );
};

export default Brochure;
