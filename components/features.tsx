"use client";

import { useState, useRef, useEffect } from "react";
import { Transition } from "@headlessui/react";
import Image from "next/image";
import FeaturesBg from "@/public/images/features-bg.png";
import FeaturesElement from "@/public/images/features-element.png";
import mela from "@/public/images/mela.png";
import kacha from "@/public/images/kacha.png";
import mela_moch from "@/public/images/mela_moch.png";

export default function Features() {
  const [tab, setTab] = useState<number>(1);

  const tabs = useRef<HTMLDivElement>(null);

  const heightFix = () => {
    if (tabs.current && tabs.current.parentElement)
      tabs.current.parentElement.style.height = `${tabs.current.clientHeight}px`;
  };

  useEffect(() => {
    heightFix();
  }, []);

  function myFunction(id: number): void {
    const dots = document.getElementById(`dots-${id}`) as HTMLElement;
    const moreText = document.getElementById(`more-${id}`) as HTMLElement;
    const btnText = document.getElementById(`myBtn-${id}`) as HTMLButtonElement;

    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "Read more";
      moreText.style.display = "none";
    } else {
      dots.style.display = "none";
      btnText.innerHTML = "Read less";
      moreText.style.display = "block";
    }
  }

  return (
    <section className="relative bg-gray-100">
      {/* Section background (needs .relative class on parent and next sibling elements) */}
      <div className="absolute left-0 right-0 m-auto w-px p-px h-20 bg-blue-400 transform -translate-y-1/2"></div>

      <div className="relative md:pb-20 max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-12 md:pt-20">
          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
            <h1 className="h2 mb-4">Explore the solutions</h1>
            <p className="text-xl text-gray-600">
              Origin of Your Business Journey, tailored to the needs of
              entrepreneurs
            </p>
          </div>

          {/* Section content */}
          <div className="md:grid md:grid-cols-12 md:gap-6">
            {/* Content */}
            <div
              className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6 md:mt-6"
              data-aos="slide-right"
              data-aos-delay="10"
            >
              <div className="md:pr-4 lg:pr-12 xl:pr-16 mb-8">
                <h3 className="h3 mb-3">Powerful suite of tools</h3>
                <p className="text-xl text-gray-600">
                  Duis aute irure dolor in reprehenderit in voluptate velit esse
                  cillum dolore pariatur. Excepteur sint occaecat cupidatat non
                  proident, sunt in culpa.
                </p>
              </div>
              {/* Tabs buttons */}
              <div className="mb-8 md:mb-0">
                <a
                  className={`flex items-center text-lg p-5 rounded border transition duration-300 ease-in-out mb-3 ${
                    tab !== 1
                      ? "bg-white shadow-md border-gray-200 hover:shadow-lg"
                      : "bg-gray-200 border-transparent"
                  }`}
                  href="#0"
                  onClick={(e) => {
                    e.preventDefault();
                    setTab(1);
                  }}
                >
                  <div>
                    <div className="flex justify-between">
                      <div className="font-bold leading-snug tracking-tight mb-1">
                        Mela Books
                      </div>
                      <div className="flex justify-center items-center w-8 h-8 bg-white rounded-lg shadow flex-shrink-0 ml-3">
                        <Image className="w-4 h-4" src={mela} alt="" />
                      </div>
                    </div>
                    <div className="text-gray-600 pr-12">
                      Melabooks is a mobile bookkeeping app designed to make it
                      easy for small businesses and freelancers to track{" "}
                      <span id="dots-1">...</span>
                      <span
                        id="more-1"
                        className="hidden ease-linear duration-1000"
                      >
                        their finances and manage their cash flow. It offers a
                        variety of features, including: Income and expense
                        tracking: Melabooks allows you to easily track your
                        income and expenses, and categorize them by client,
                        project, or expense type.
                      </span>
                    </div>
                    <button
                      className="py-2 px-3 rounded-lg mt-2 border border-gray-700 hover:bg-gray-100"
                      onClick={() => myFunction(1)}
                      id="myBtn-1"
                    >
                      Read more
                    </button>
                  </div>
                </a>
                <a
                  className={`flex items-center text-lg p-5 rounded border transition duration-300 ease-in-out mb-3 ${
                    tab !== 2
                      ? "bg-white shadow-md border-gray-200 hover:shadow-lg"
                      : "bg-gray-200 border-transparent"
                  }`}
                  href="#0"
                  onClick={(e) => {
                    e.preventDefault();
                    setTab(2);
                  }}
                >
                  <div>
                    <div className="flex justify-between">
                      <div className="font-bold leading-snug capitalize tracking-tight mb-1">
                        kacha digital financial service
                      </div>
                      <div className="flex justify-center items-center w-8 h-8 bg-white rounded-lg shadow flex-shrink-0 ml-3">
                        <Image className="w-4 h-4" src={kacha} alt="" />
                      </div>
                    </div>
                    <div className="text-gray-600 pr-12">
                      Kacha Digital Financial Service S.C. is the first a
                      premier digital platform that provides seamless financial
                      <span id="dots-2">...</span>
                      <span
                        id="more-2"
                        className="hidden ease-linear duration-1000"
                      >
                        services in Ethiopia It is committed to empowering
                        customers by providing them with convenient, affordable,
                        and secure digital financial services that meet their
                        everyday needs. Kacha are passionate about driving
                        positive change and creating value for customers,
                        employees, and society as a whole.
                      </span>
                    </div>
                    <button
                      className="py-2 px-3 mt-2 border border-gray-700 rounded-lg hover:bg-gray-100"
                      onClick={() => myFunction(2)}
                      id="myBtn-2"
                    >
                      Read more
                    </button>
                  </div>
                </a>
                <a
                  className={`flex items-center text-lg p-5 rounded border transition duration-300 ease-in-out mb-3 ${
                    tab !== 3
                      ? "bg-white shadow-md border-gray-200 hover:shadow-lg"
                      : "bg-gray-200 border-transparent"
                  }`}
                  href="#0"
                  onClick={(e) => {
                    e.preventDefault();
                    setTab(3);
                  }}
                >
                  <div>
                    <div className="flex justify-between">
                      <div className="font-bold leading-snug capitalize tracking-tight mb-1">
                        kacha digital financial service
                      </div>
                      <div className="flex justify-center items-center w-8 h-8 bg-white rounded-lg shadow flex-shrink-0 ml-3">
                        <Image className="w-4 h-4" src={kacha} alt="" />
                      </div>
                    </div>
                    <div className="text-gray-600 pr-12">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Magni ad eaque recusandae iste, minus sunt velit,
                      <span id="dots-3">...</span>
                      <span
                        id="more-3"
                        className="hidden ease-linear duration-1000"
                      >
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Et earum impedit dolore saepe at nostrum, corrupti
                        nesciunt officiis quos voluptates porro vitae atque,
                        nemo provident est voluptate nisi asperiores cupiditate?
                      </span>
                    </div>
                    <button
                      className="py-2 px-3 mt-2 border rounded-lg border-gray-700 hover:bg-gray-100"
                      onClick={() => myFunction(3)}
                      id="myBtn-3"
                    >
                      Read more
                    </button>
                  </div>
                </a>
              </div>
            </div>

            {/* Tabs items */}
            <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 md:order-1">
              <div className="transition-all">
                <div
                  className="relative flex flex-col mt-28 text-center lg:text-right"
                  data-aos="slide-left"
                  data-aos-delay="10"
                  ref={tabs}
                >
                  {/* Item 1 */}
                  <Transition
                    show={tab === 1}
                    appear={true}
                    className="w-full"
                    enter="transition ease-in-out duration-700 transform order-first"
                    enterFrom="opacity-0 translate-x-96"
                    enterTo="opacity-100 translate-x-0"
                    leave="transition ease-in-out duration-700 transform absolute"
                    leaveFrom="opacity-100 translate-x-0"
                    leaveTo="opacity-0 -translate-x-10"
                    beforeEnter={() => heightFix()}
                    unmount={false}
                  >
                    <div className="flex flex-col justify-center items-center">
                      {/* <div className="w-20 h-20 bg-cyan-500"> */}
                      <Image
                        width={500}
                        height={462}
                        className="max-w-[400px] h-[550px]  mx-auto rounded"
                        src={mela_moch}
                        alt="Features bg"
                      />
                      {/* </div> */}
                    </div>
                  </Transition>
                  {/* Item 2 */}
                  <Transition
                    show={tab === 2}
                    appear={true}
                    className="w-full"
                    enter="transition ease-in-out duration-700 transform order-first"
                    enterFrom="opacity-0 translate-x-96"
                    enterTo="opacity-100 translate-x-0"
                    leave="transition ease-in-out duration-700 transform absolute"
                    leaveFrom="opacity-100 translate-x-0"
                    leaveTo="opacity-0 -translate-x-10"
                    beforeEnter={() => heightFix()}
                    unmount={false}
                  >
                    <div className="relative inline-flex flex-col">
                      <Image
                        className="md:max-w-none mx-auto rounded"
                        src={FeaturesBg}
                        width={500}
                        height="462"
                        alt="Features bg"
                      />
                      <Image
                        className="md:max-w-none absolute w-full left-0 transform animate-float"
                        src={FeaturesElement}
                        width={500}
                        height="44"
                        alt="Element"
                        style={{ top: "30%" }}
                      />
                    </div>
                  </Transition>
                  {/* Item 3 */}
                  <Transition
                    show={tab === 3}
                    appear={true}
                    className="w-full"
                    enter="transition ease-in-out duration-700 transform order-first"
                    enterFrom="opacity-0 translate-x-96"
                    enterTo="opacity-100 translate-x-0"
                    leave="transition ease-in-out duration-700 transform absolute"
                    leaveFrom="opacity-100 translate-x-0"
                    leaveTo="opacity-0 -translate-x-10"
                    beforeEnter={() => heightFix()}
                    unmount={false}
                  >
                    <div className="relative inline-flex flex-col">
                      <Image
                        className="md:max-w-none mx-auto rounded"
                        src={FeaturesBg}
                        width={500}
                        height="462"
                        alt="Features bg"
                      />
                      <Image
                        className="md:max-w-none absolute w-full left-0 transform animate-float"
                        src={FeaturesElement}
                        width={500}
                        height="44"
                        alt="Element"
                        style={{ top: "30%" }}
                      />
                    </div>
                  </Transition>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
