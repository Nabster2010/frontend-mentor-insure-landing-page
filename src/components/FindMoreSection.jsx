import React from "react";

const FindMoreSection = () => {
  return (
    <section className=" md:px-16 lg:px-24 mt-36 text-VeryLightGray">
      <div className="relative bg-DarkViolet flex flex-col md:flex-row justify-between items-center px-4 py-16 md:p-16 ">
        <img
          className="hidden md:inline-block md:absolute right-0 top-0 h-full z-10 "
          src="/images/bg-pattern-how-we-work-desktop.svg"
          alt=""
        />
        <img
          className="  md:hidden absolute top-0 right-0 "
          src="/images/bg-pattern-how-we-work-mobile.svg"
          alt=""
        />
        <h1 className="text-4xl text-center md:text-start md:text-6xl font-DmSerif ">
          Find out more <br /> about how we work
        </h1>
        <div className="flex-1 flex justify-end mt-16 md:mt-0 ">
          <button className="relative md:z-10 border-2 whitespace-nowrap border-VeryLightGray px-6 py-3 tracking-wider hover:text-DarkViolet hover:bg-VeryLightGray transition">
            HOW WE WORK
          </button>
        </div>
      </div>
    </section>
  );
};

export default FindMoreSection;
