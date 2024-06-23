"use client";

import { useState, useEffect } from "react";

import Link from "next/link";
import Tooltip from "../utils/Tooltips";
import Logo from "./logo";
import Dropdown from "@/components/utils/dropdown";
import MobileMenu from "./mobile-menu";
import { FaShareAlt } from "react-icons/fa";
import {
  FaFacebookF,
  FaXTwitter,
  FaLinkedinIn,
  FaTelegram,
  FaWhatsapp,
} from "react-icons/fa6";
import { HiSupport } from "react-icons/hi";
import { IoMdMail, IoLogoGoogleplus } from "react-icons/io";

// import {  } from "react-icons/fa6";

import { usePathname, useRouter } from "next/navigation";
import { useDropdown } from "../../context/DropdownContext";
import { contentData } from "../data/data";

export default function Header() {
  const { selectedOption, setSelectedOption } = useDropdown();

  const handleDropdownChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    console.log(event.target.value);
    setSelectedOption(event.target.value);
  };

  const handleSharing = () => {
    console.log("sharing");
    if (navigator.share) {
      const shareData = {
        title: "Web url",
        file: "source code url",
      };
      if (navigator.canShare(shareData)) navigator.share(shareData);
      else console.log("con't share it ---1");
    } else console.log("con't share it----2");
  };

  const navigate = useRouter();
  const pathname = usePathname();
  const [top, setTop] = useState<boolean>(true);

  // detect whether user has solled the page down by 10px
  const scrollHandler = () => {
    window.pageYOffset > 10 ? setTop(false) : setTop(true);
  };

  useEffect(() => {
    scrollHandler();
    window.addEventListener("scroll", scrollHandler);
    return () => window.removeEventListener("scroll", scrollHandler);
  }, [top]);

  return (
    <>
      <div
        className={`fixed  flex items-center w-full mx-auto h-11 z-10 max-sm:px-5 sm:px-10 md:px-20 lg:px-32 border-b border-gray-300  duration-500 ease-in-out ${
          !top ? "hidden" : "bg-gray-100"
        }`}
      >
        <div className="flex justify-between items-center max-w-screen-2xl w-full mx-auto ">
          <div className="flex gap-2">
            <span
              onClick={handleSharing}
              className="text-primaryColor hover:bg-primaryColor cursor-pointer hover:text-white duration-300 ease-in-out w-7 h-7 flex justify-center items-center rounded-full bg-white shadow-md"
            >
              <FaShareAlt />
            </span>
            <span className="text-primaryColor hover:bg-primaryColor hover:text-white duration-300 ease-in-out w-7 h-7 flex justify-center items-center rounded-full bg-white shadow-md">
              <FaFacebookF />
            </span>
            <span className="text-primaryColor hover:bg-primaryColor hover:text-white duration-300 ease-in-out w-7 h-7 flex justify-center items-center rounded-full bg-white shadow-md">
              <FaXTwitter />
            </span>
            <a
              href="https://www.linkedin.com/company/source-code-it-solutions-plc/"
              target="_blank"
              className="text-primaryColor hover:bg-primaryColor hover:text-white duration-300 ease-in-out w-7 h-7 flex justify-center items-center rounded-full bg-white shadow-md"
            >
              <FaLinkedinIn />
            </a>
            <a
              href="mailto:info@sourcecodeet.com"
              target="_blank"
              className="text-primaryColor hover:bg-primaryColor hover:text-white duration-300 ease-in-out w-7 h-7 flex justify-center items-center rounded-full bg-white shadow-md"
            >
              <IoLogoGoogleplus />
            </a>
          </div>

          <div className="flex gap-x-3 text-gray-600">
            <a
              href="https://t.me/sourcecodeet"
              target="_blank"
              className="flex items-center hover:cursor-pointer hover:bg-slate-100 py-2 px-1"
            >
              <span className="text-primaryColor flex justify-center items-center mr-2">
                <FaTelegram />
              </span>
              <p className="inline-block font-normal text-nowrap max-md:hidden">
                Talk to us
              </p>
            </a>
            <a
              href="mailto:support@sourcecodeet.com?subject=software development"
              className="flex items-center cursor-pointer hover:bg-slate-100 py-2 px-1"
            >
              <span className="text-primaryColor flex justify-center items-center mr-2">
                <IoMdMail />
              </span>
              <span className="font-normal max-md:hidden">
                support@sourcecodeet.com
              </span>
            </a>
            <a
              href="https://wa.me/251974017208"
              target="_blank"
              className="flex items-center hover:bg-slate-100 py-2 px-1"
            >
              <span className="text-primaryColor flex justify-center items-center mr-2">
                <FaWhatsapp />
              </span>
              <p className="font-normal max-md:hidden">+251 974-017208</p>
            </a>
          </div>
        </div>
      </div>
      <header
        className={`fixed w-full z-30 md:bg-opacity-90 transition duration-150 ease-linear ${
          !top ? "bg-white backdrop-blur-sm shadow-lg" : "top-12 "
        }`}
      >
        {/* <div className="max-w-6xl mx-auto px-5 sm:px-6"> */}
        <div className="flex max-w-6xl mx-auto px-5 sm:px-6   items-center justify-between w-full h-16 md:h-20">
          {/* Site branding */}
          <div className="shrink-0 mr-4">
            <Logo />
          </div>

          <nav className="hidden md:flex  md:grow justify-end">
            <ul className="flex justify-center items-center gap-x-4 text-sm text-nowrap font-medium py-5">
              <li>
                <Link
                  className={`link ${
                    pathname === "/"
                      ? "text-base px-2 py-3 ease-in-out duration-500 text-navHoverColor"
                      : " text-gray-600 hover:text-navHoverColor hover:scale-[1.02] px-2 py-3   duration-500 ease-in"
                  }`}
                  href="/"
                >
                  Home
                </Link>
              </li>

              <li>
                <div className="font-medium text-left text-gray-600  duration-150 ease-in-out">
                  <Dropdown
                    onChange={handleDropdownChange}
                    value={selectedOption}
                    title="Services"
                  >
                    {contentData.map((content) => (
                      <option
                        onClick={() => navigate.push(`/services/${content.id}`)}
                        key={content.id}
                        value={content.title}
                        className="cursor-pointer w-full font-medium py-2 px-5 border-b border-b-gray-100 text-left text-gray-600 hover:text-gray-900 hover:bg-gray-200  transition duration-150 ease-in-out"
                      >
                        {content.title}
                      </option>
                    ))}
                  </Dropdown>
                </div>
              </li>
              <li>
                <Link
                  className={`link ${
                    pathname === "/choose"
                      ? "text-base px-2 py-3 ease-in-out duration-500 text-navHoverColor"
                      : " text-gray-600 hover:text-navHoverColor hover:scale-[1.02] px-2 py-3 flex items-center capitalize  duration-500 ease-in-out"
                  }`}
                  href="/choose"
                >
                  why choose us
                </Link>
              </li>
              <li>
                <Link
                  className={`link ${
                    pathname === "/blogs"
                      ? "text-base px-2 py-3 ease-in-out duration-500 text-navHoverColor"
                      : " text-gray-600 hover:text-navHoverColor hover:scale-[1.02] px-2 py-3 flex items-center  duration-500 ease-in-out"
                  }`}
                  href="/blogs"
                >
                  Blogs
                </Link>
              </li>

              <li>
                <Link
                  className={`link ${
                    pathname === "/about"
                      ? "text-base px-2 py-3 ease-in-out duration-500 text-navHoverColor"
                      : " text-gray-600 hover:text-navHoverColor hover:scale-[1.02] px-2 py-3 flex items-center  duration-500 ease-in-out"
                  }`}
                  href="/about"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  className={`link ${
                    pathname === "/contact"
                      ? "text-base px-2 py-3 ease-in-out duration-500 text-navHoverColor"
                      : " text-gray-600 hover:text-navHoverColor hover:scale-[1.02] px-2 py-3 flex items-center  duration-500 ease-in-out"
                  }`}
                  href="/contact"
                >
                  Contact us
                </Link>
              </li>
            </ul>
          </nav>
          <div className="flex w-auto items-center justify-center gap-1 ml-2 md:ml-16 max-md:hidden  font-medium text-primaryColor">
            <div>
              <Tooltip text="call us">
                <a
                  className="animate-smallBounce hover:animate-none block py-2 px-6 text-nowrap text-white bg-blue-600 hover:bg-white hover:text-blue-600 border-2 border-blue-600 ease-linear rounded-full duration-300"
                  href="tel:+251974017208"
                >
                  +251 974-017208
                </a>
              </Tooltip>
            </div>
          </div>
          <MobileMenu />
        </div>
        {/* </div> */}
      </header>
    </>
  );
}
