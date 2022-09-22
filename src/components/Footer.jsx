import React from "react";

const Footer = () => {
  return (
    <footer className="relative lg:px-24 md:px-16 px-4 my-16 flex flex-col  md:flex-row justify-center items-center md:items-stretch gap-16 md:gap-2  md:justify-start">
      <div className="flex-1 flex gap-6 flex-col  items-start justify-start">
        <h1 className="text-DarkGrayishViolet font-bold tracking-wider">
          OUR COMPANY
        </h1>
        <ul className="flex flex-col items-center md:items-start gap-3">
          <li>
            <a
              className="whitespace-nowrap tracking-wider hover:underline transition font-bold text-sm text-VeryDarkViolet"
              href="#"
            >
              HOW WE WORK
            </a>
          </li>
          <li>
            <a
              className="whitespace-nowrap tracking-wider hover:underline transition font-bold text-sm text-VeryDarkViolet"
              href="#"
            >
              WHY INSURE?
            </a>
          </li>
          <li>
            <a
              className="whitespace-nowrap tracking-wider hover:underline transition font-bold text-sm text-VeryDarkViolet"
              href="#"
            >
              VIEW PLANS
            </a>
          </li>
          <li>
            <a
              className="whitespace-nowrap tracking-wider hover:underline transition font-bold text-sm text-VeryDarkViolet"
              href="#"
            >
              REVIEWS
            </a>
          </li>
        </ul>
      </div>
      <div className="flex-1  flex gap-6 flex-col  items-center md:items-start justify-start">
        <h1 className="text-DarkGrayishViolet font-bold tracking-wider">
          HELP ME
        </h1>
        <ul className=" flex flex-col items-center md:items-start gap-3">
          <li>
            <a
              className="whitespace-nowrap tracking-wider hover:underline transition font-bold text-sm text-VeryDarkViolet"
              href="#"
            >
              FAQ
            </a>
          </li>
          <li>
            <a
              className="whitespace-nowrap tracking-wider hover:underline transition font-bold text-sm text-VeryDarkViolet"
              href="#"
            >
              TERMS OF USE
            </a>
          </li>
          <li>
            <a
              className="whitespace-nowrap tracking-wider hover:underline transition font-bold text-sm text-VeryDarkViolet"
              href="#"
            >
              PRIVACY POLICY
            </a>
          </li>
          <li>
            <a
              className="whitespace-nowrap tracking-wider hover:underline transition font-bold text-sm text-VeryDarkViolet"
              href="#"
            >
              COOKIES
            </a>
          </li>
        </ul>
      </div>
      <div className="flex-1 flex gap-6 flex-col  items-start justify-start">
        <h1 className="text-DarkGrayishViolet font-bold tracking-wider">
          CONTACT
        </h1>
        <ul className="flex flex-col items-center md:items-start gap-3">
          <li>
            <a
              className="whitespace-nowrap tracking-wider hover:underline transition font-bold text-sm text-VeryDarkViolet"
              href="#"
            >
              SALES
            </a>
          </li>
          <li>
            <a
              className="whitespace-nowrap tracking-wider hover:underline transition font-bold text-sm text-VeryDarkViolet"
              href="#"
            >
              SUPPORT
            </a>
          </li>
          <li>
            <a
              className="whitespace-nowrap tracking-wider hover:underline transition font-bold text-sm text-VeryDarkViolet"
              href="#"
            >
              LIVE CHAT
            </a>
          </li>
        </ul>
      </div>
      <div className="flex-1 flex gap-6 flex-col  items-start justify-start">
        <h1 className="text-DarkGrayishViolet font-bold tracking-wider">
          OTHERS
        </h1>
        <ul className="flex flex-col items-center md:items-start gap-3">
          <li>
            <a
              className="whitespace-nowrap tracking-wider hover:underline transition font-bold text-sm text-VeryDarkViolet"
              href="#"
            >
              CAREERS
            </a>
          </li>
          <li>
            <a
              className="whitespace-nowrap tracking-wider hover:underline transition font-bold text-sm text-VeryDarkViolet"
              href="#"
            >
              PRESS
            </a>
          </li>
          <li>
            <a
              className="whitespace-nowrap tracking-wider hover:underline transition font-bold text-sm text-VeryDarkViolet"
              href="#"
            >
              LICENSES
            </a>
          </li>
        </ul>
      </div>
      <img
        className="hidden md:inline-block md:absolute  md:-top-full md:left-0  z-10 "
        src="/images/bg-pattern-footer-desktop.svg"
        alt=""
      />
      <img
        className=" md:hidden absolute  left-0 -top-1/4  "
        src="/images/bg-pattern-footer-mobile.svg"
        alt=""
      />
    </footer>
  );
};

export default Footer;
