"use client";

import { useState, useRef, useEffect } from "react";
import { Transition } from "@headlessui/react";
import Link from "next/link";
import { FaPhone } from "react-icons/fa6";

export default function MobileMenu() {
  const [mobileNavOpen, setMobileNavOpen] = useState<boolean>(false);

  const trigger = useRef<HTMLButtonElement>(null);
  const mobileNav = useRef<HTMLDivElement>(null);

  // close the mobile menu on click outside
  useEffect(() => {
    const clickHandler = ({ target }: { target: EventTarget | null }): void => {
      if (!mobileNav.current || !trigger.current) return;
      if (
        !mobileNavOpen ||
        mobileNav.current.contains(target as Node) ||
        trigger.current.contains(target as Node)
      )
        return;
      setMobileNavOpen(false);
    };
    document.addEventListener("click", clickHandler);
    return () => document.removeEventListener("click", clickHandler);
  });

  // close the mobile menu if the esc key is pressed
  useEffect(() => {
    const keyHandler = ({ keyCode }: { keyCode: number }): void => {
      if (!mobileNavOpen || keyCode !== 27) return;
      setMobileNavOpen(false);
    };
    document.addEventListener("keydown", keyHandler);
    return () => document.removeEventListener("keydown", keyHandler);
  });

  return (
    <div className="flex md:hidden">
      {/* Hamburger button */}
      <button
        ref={trigger}
        className={`hamburger ${mobileNavOpen && "active"}`}
        aria-controls="mobile-nav"
        aria-expanded={mobileNavOpen}
        onClick={() => setMobileNavOpen(!mobileNavOpen)}
      >
        <span className="sr-only">Menu</span>
        <svg
          className="w-6 h-6 fill-current text-gray-900"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect y="4" width="24" height="2" />
          <rect y="11" width="24" height="2" />
          <rect y="18" width="24" height="2" />
        </svg>
      </button>

      {/*Mobile navigation */}
      <div ref={mobileNav}>
        <Transition
          show={mobileNavOpen}
          as="nav"
          id="mobile-nav"
          className="absolute top-full h-screen pb-16 z-20 left-0 w-full overflow-scroll bg-white"
          enter="transition ease-out duration-200 transform"
          enterFrom="opacity-0 -translate-y-2"
          enterTo="opacity-100 translate-y-0"
          leave="transition ease-out duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <ul className="flex flex-col w-full gap-3 px-5 py-2 ">
            {/* <li>
              <Link href="/signin" className="flex font-medium w-full text-gray-600 hover:text-gray-900 py-2 justify-center" onClick={() => setMobileNavOpen(false)}>Sign in</Link>
            </li> */}
            <li>
              <Link
                href="/"
                className="flex font-medium w-full hover:bg-gray-200 text-gray-600 hover:text-gray-900 py-4 text-left"
                onClick={() => setMobileNavOpen(false)}
              >
                <span className="pl-2">Home</span>
              </Link>
            </li>
            <li>
              <Link
                href="/services"
                className="flex font-medium w-full text-gray-600 hover:bg-gray-200 hover:text-gray-900 py-4 text-left border-t border-gray-200"
                onClick={() => setMobileNavOpen(false)}
              >
                <span className="pl-2">Service</span>
              </Link>
            </li>
            <li>
              <Link
                href="/blogs"
                className="flex font-medium w-full text-gray-600 hover:bg-gray-200 hover:text-gray-900 py-4 text-left"
                onClick={() => setMobileNavOpen(false)}
              >
                <span className="pl-2">Blogs</span>
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className="flex font-medium w-full text-gray-600 hover:bg-gray-200 hover:text-gray-900 py-4 text-left"
                onClick={() => setMobileNavOpen(false)}
              >
                <span className="pl-2">About us</span>
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="flex font-medium w-full text-gray-600 hover:bg-gray-200 hover:text-gray-900  text-left border-b border-gray-400 py-4"
                onClick={() => setMobileNavOpen(false)}
              >
                <span className="pl-2">Contact us</span>
              </Link>
            </li>
          </ul>
          <div className="flex px-4 mt-10">
            <a
              className=" flex gap-10 justify-center items-center font-medium text-xl w-full py-4 px-6 rounded-md text-center text-nowrap text-white bg-blue-600 hover:bg-white hover:text-blue-600 border-2 border-blue-600 ease-linear duration-300"
              href="tel:+1234567890"
            >
              <FaPhone className=" " />
              <span>+251 974-017208</span>
            </a>
          </div>
        </Transition>
      </div>
    </div>
  );
}
