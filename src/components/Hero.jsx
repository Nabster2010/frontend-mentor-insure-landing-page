import React from "react";

const Hero = () => {
  return (
    <section className="md:relative flex flex-col-reverse gap-4 md:flex-row justify-center items-center md:items-stretch  w-full  bg-DarkViolet  text-VeryLightGray text-start  md:px-16 lg:px-24 md:py-20 ">
      <img
        className="hidden md:inline-block md:absolute lg:top-0 lg:right-0 md:top-0 md:-right-32 h-full z-10 "
        src="/images/bg-pattern-intro-right-desktop.svg"
        alt=""
      />
      <img
        className="hidden md:inline-block md:absolute left-0 top-[60%] h-full z-10 "
        src="/images/bg-pattern-intro-left-desktop.svg"
        alt=""
      />

      <article className="relative flex-1  text-center md:text-start px-4 md:px-0 pb-20 md:pb-0">
        <img
          className=" md:hidden absolute left-0 -top-4    "
          src="/images/bg-pattern-intro-left-mobile.svg"
          alt=""
        />
        <img
          className="  md:hidden absolute top-1/2 right-0 "
          src="/images/bg-pattern-intro-right-mobile.svg"
          alt=""
        />
        <span className="hidden md:block  w-40 border-b border-white"></span>
        <h1 className="text-5xl md:text-7xl mt-16 font-DmSerif">
          Humanizing <br /> your insurance.
        </h1>
        <p className="mt-8">
          Get your life insurance coverage easier and faster. We blend our
          expertise and technology to help you find the plan that’s right for
          you. Ensure you and your loved ones are protected.
        </p>
        <button className="md:relative md:z-10 mt-8 border-2 border-VeryLightGray px-8 py-3 transition hover:bg-VeryLightGray hover:text-DarkViolet uppercase tracking-widest font-bold">
          View plans
        </button>
      </article>
      <div className=" md:relative w-full md:w-auto flex-1 ">
        <img
          src="/images/image-intro-desktop.jpg"
          alt=""
          className=" md:absolute w-full object-cover top-0 left-0 -bottom-44"
        />
      </div>
    </section>
  );
};

export default Hero;
