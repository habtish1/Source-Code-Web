"use client";

import { useState, useEffect } from "react";

import Link from "next/link";
import Logo from "./logo";
import Dropdown from "@/components/utils/dropdown";
import MobileMenu from "./mobile-menu";

export default function Header() {
  const [top, setTop] = useState<boolean>(true);

  // detect whether user has scrolled the page down by 10px
  const scrollHandler = () => {
    window.pageYOffset > 10 ? setTop(false) : setTop(true);
  };

  useEffect(() => {
    scrollHandler();
    window.addEventListener("scroll", scrollHandler);
    return () => window.removeEventListener("scroll", scrollHandler);
  }, [top]);

  return (
    <header
      className={`fixed w-full z-30 md:bg-opacity-90 transition duration-300 ease-in-out ${
        !top ? "bg-white backdrop-blur-sm shadow-lg" : ""
      }`}
    >
      {/* <div className="max-w-6xl mx-auto px-5 sm:px-6"> */}
      <div className="flex max-w-6xl mx-auto px-5 sm:px-6   items-center justify-between w-full h-16 md:h-20">
        {/* Site branding */}
        <div className="shrink-0 mr-4">
          <Logo />
        </div>

        {/* Desktop navigation */}
        {/* <nav className="hidden md:flex md:grow"> */}
        {/* Desktop sign in links */}
        {/* <ul className="flex grow justify-end flex-wrap items-center">
              <li>
                <Link href="/signin" className="font-medium text-gray-600 hover:text-gray-900 px-5 py-3 flex items-center transition duration-150 ease-in-out">Sign in</Link>
              </li>
              <li>
                <Link href="/signup" className="btn-sm text-gray-200 bg-gray-900 hover:bg-gray-800 ml-3">
                  <span>Sign up</span>
                  <svg className="w-3 h-3 fill-current text-gray-400 shrink-0 ml-2 -mr-1" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                    <path d="M11.707 5.293L7 .586 5.586 2l3 3H0v2h8.586l-3 3L7 11.414l4.707-4.707a1 1 0 000-1.414z" fillRule="nonzero" />
                  </svg>
                </Link>
              </li>
            </ul>

          </nav> */}

        <nav className="hidden md:flex  md:grow justify-end">
          <ul className="flex items-center gap-x-4 text-sm font-medium py-12">
            <li>
              <Link
                href="/"
                className="font-medium text-gray-600 hover:text-gray-900 px-3 py-3 flex items-center transition duration-150 ease-in-out"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/services"
                className="font-medium text-gray-600 hover:text-gray-900 px-3 py-3 flex items-center transition duration-150 ease-in-out"
              >
                Service
              </Link>
            </li>
            <li>
              <Link
                href="/blogs"
                className="font-medium text-gray-600 hover:text-gray-900 px-3 py-3 flex items-center transition duration-150 ease-in-out"
              >
                Blogs
              </Link>
            </li>

            <li>
              <Link
                href="/about"
                className="font-medium text-gray-600 text-nowrap hover:text-gray-900 px-3 py-3 flex items-center transition duration-150 ease-in-out"
              >
                About us
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="font-medium text-gray-600 text-nowrap hover:text-gray-900 px-3 py-3 flex items-center transition duration-150 ease-in-out"
              >
                Contact us
              </Link>
            </li>
          </ul>
          {/* <div className="flex items-center pl-5 gap-x-5">
            <Link href="/signup" className="text-[#0F1B4C]">
              Sign up
            </Link>
            <Link
              href="/register"
              className="text-white rounded-lg bg-[#0F1B4C] px-5  py-2"
            >
              Register
            </Link>
          </div> */}
        </nav>
        <div className="ml-2 max-md:hidden">
          <a href="tel:+1234567890"> +251 115-7890</a>
          {/* <a
            href="#"
            className="max-md:hidden px-8 py-3 text-base leading-6 text-nowrap bg-blue-600 text-white ml-4 rounded-md font-medium"
          >
            Available gigs
          </a> */}
        </div>

        <MobileMenu />
      </div>
      {/* </div> */}
    </header>
  );
}
