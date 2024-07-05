import React from "react";

const Content = ({ items }) => {
  return (
    <div className="ml-[25%] w-full overflow-y-auto h-screen p-5 max-[600px]:ml-[1%]">
      {items.map((item) => (
        <section
          key={item.id}
          id={item.id}
          className="py-10 h-screen flex items-center flex-col justify-center"
        >
          <h2 className="text-3xl font-bold mb-4 text-[#c19451]">
            {item.title}
          </h2>
          <div className="text-lg text-black">{item.content}</div>
        </section>
      ))}
    </div>
  );
};

export default Content;
