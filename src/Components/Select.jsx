import React from "react";
import pricebg from "../Images/Price-bg-new.webp";
import pricelines from "../Images/Price-Line-Element-new.webp";
const Select = () => {
  return (
    <div>
      <div className="relative h-full w-full">
        <img src={pricebg} className="" alt="price-bg" />
        <div>
          <img
            src={pricelines}
            className="absolute top-0 w-80 left-[40%] max-[600px]:w-44 max-[600px]:left-[32%]"
            alt="price-lines"
          />
          <h1 className="un text-[#1E1E1E] absolute top-7 left-[44%] text-[3vw] font-sm">
            Made For The <br />
            <span className="un text-[#1E1E1E]">Select few</span>
          </h1>
          <div className="flex gap-4 absolute top-[21%] left-[33%] max-[600px]:top-[38%]">
            <p className="uppercase tracking-[.5cqw] text-[1.6vw] font-[300]">
              Price | payment Structure | Offer
            </p>
          </div>
          <button className="absolute max-[600px]:text-[11px] top-[30%] max-[600px]:top-[50%] left-[46%] max-[600px]:left-[34%] px-6 py-2 bg-[#9D5088] text-white rounded-full">
            Explore Pricing
          </button>
        </div>
      </div>
    </div>
  );
};

export default Select;
