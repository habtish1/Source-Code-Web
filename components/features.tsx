"use client";

import { useState, useRef, useEffect } from "react";
import { Transition } from "@headlessui/react";
import Image from "next/image";
import FeaturesBg from "@/public/images/features-bg.png";
import FeaturesElement from "@/public/images/features-element.png";
import mela from "@/public/images/mela.png";
import kacha from "@/public/images/kacha.png";
import mela_moch from "@/public/images/mela_moch.png";
import chenet from "@/public/images/chenet.png";
import capstone from "@/public/images/capstone.png";
import duruj from "@/public/images/duruj.png";
import adopay from "@/public/images/adopay.png";
import Slider, { Settings } from "react-slick";

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

  // function myFunction(id: number): void {
  //   const dots = document.getElementById(`dots-${id}`) as HTMLElement;
  //   const moreText = document.getElementById(`more-${id}`) as HTMLElement;
  //   const btnText = document.getElementById(`myBtn-${id}`) as HTMLButtonElement;

  //   if (dots.style.display === "none") {
  //     dots.style.display = "inline";
  //     btnText.innerHTML = "Read more";
  //     moreText.style.display = "none";
  //   } else {
  //     // dots.style.display = "none";
  //     // btnText.innerHTML = "Read less";
  //     // moreText.style.display = "block";
  //   }
  // }
  const VerticalSettings: Settings = {
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    vertical: true,
    verticalSwiping: true,
    lazyLoad: "ondemand",
    autoplay: true,
    // speed: 4000,
    autoplaySpeed: 2000,
    swipeToSlide: true,
    cssEase: "ease-in",
    nextArrow: <Arrow />,
    prevArrow: <Arrow />,
  };
  const settings = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    // speed: 4000,
    autoplaySpeed: 4000,
    pauseOnHover: false,
    swipeToSlide: true,
    cssEase: "linear",
    nextArrow: <Arrow />,
    prevArrow: <Arrow />,
  };
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
              {/* <div className=" mb-8 md:mb-0 h-[400px] overflow-y-auto scroll-direction ">
                <div className="animate-verticalScroll">
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
                      <div className="flex flex-row-reverse justify-between">
                        <div className="font-bold leading-snug tracking-tight mb-1">
                          Mela Books
                        </div>
                        <div className="flex justify-center items-center w-8 h-8 bg-white rounded-lg shadow flex-shrink-0 ml-3">
                          <Image className="w-4 h-4" src={mela} alt="" />
                        </div>
                      </div>
                      <div className="text-left text-gray-600 pr-12">
                        Melabooks is a mobile bookkeeping app designed to make
                        it easy for small businesses and freelancers to track{" "}
                      </div>
                    </div>
                  </a>
                  <a
                    className={` flex items-center text-lg p-5 rounded border transition duration-300 ease-in-out mb-3 ${
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
                      <div className="flex flex-row-reverse justify-between">
                        <div className="font-bold leading-snug capitalize tracking-tight mb-1">
                          kacha digital financial service
                        </div>
                        <div className="flex justify-center items-center w-8 h-8 bg-white rounded-lg shadow flex-shrink-0 ml-3">
                          <Image className="w-4 h-4" src={kacha} alt="" />
                        </div>
                      </div>
                      <div className="text-left text-gray-600 pr-12">
                        Kacha Digital Financial Service S.C. is the first a
                        premier digital platform that provides seamless
                        financial
                      </div>
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
                      <div className="flex flex-row-reverse justify-between">
                        <div className="font-bold leading-snug capitalize tracking-tight mb-1">
                          kacha digital financial service
                        </div>
                        <div className="flex justify-center items-center w-8 h-8 bg-white rounded-lg shadow flex-shrink-0 ml-3">
                          <Image className="w-4 h-4" src={kacha} alt="" />
                        </div>
                      </div>
                      <div className="text-left text-gray-600 pr-12">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Magni ad eaque recusandae iste, minus sunt velit,
                      </div>
                    </div>
                  </a>
                  <a
                    className={`flex items-center text-lg p-5 rounded border transition duration-300 ease-in-out mb-3 ${
                      tab !== 4
                        ? "bg-white shadow-md border-gray-200 hover:shadow-lg"
                        : "bg-gray-200 border-transparent"
                    }`}
                    href="#0"
                    onClick={(e) => {
                      e.preventDefault();
                      setTab(4);
                    }}
                  >
                    <div>
                      <div className="flex flex-row-reverse justify-between">
                        <div className="font-bold leading-snug tracking-tight mb-1">
                          Mela Books
                        </div>
                        <div className="flex justify-center items-center w-8 h-8 bg-white rounded-lg shadow flex-shrink-0 ml-3">
                          <Image className="w-4 h-4" src={mela} alt="" />
                        </div>
                      </div>
                      <div className="text-left text-gray-600 pr-12">
                        Melabooks is a mobile bookkeeping app designed to make
                        it easy for small businesses and freelancers to track{" "}
                      </div>
                    </div>
                  </a>
                </div>
              </div> */}

              <div className="slider-container ">
                <Slider {...VerticalSettings}>
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
                      <div className="text-left text-gray-600 pr-12">
                        Melabooks is a mobile bookkeeping app designed to make
                        it easy for small businesses and freelancers to track{" "}
                      </div>
                    </div>
                  </a>

                  <div>
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
                        <div className="flex  justify-between">
                          <div className="font-bold leading-snug tracking-tight mb-1">
                            kacha financial service
                          </div>
                          <div className="flex justify-center items-center w-8 h-8 bg-white rounded-lg shadow flex-shrink-0 ml-3">
                            <Image className="w-4 h-4" src={kacha} alt="" />
                          </div>
                        </div>
                        <div className="text-left text-gray-600 pr-12">
                          kacha is a mobile bookkeeping app designed to make it
                          easy for small businesses and freelancers to track{" "}
                        </div>
                      </div>
                    </a>
                  </div>
                  <div>
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
                            chenet logistic service
                          </div>
                          <div className="flex justify-center items-center w-8 h-8 bg-white rounded-lg shadow flex-shrink-0 ml-3">
                            <Image className="w-4 h-4" src={chenet} alt="" />
                          </div>
                        </div>
                        <div className="text-left text-gray-600 pr-12">
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Magni ad eaque recusandae iste, minus sunt
                          velit,
                        </div>
                      </div>
                    </a>
                  </div>
                  <div>
                    <a
                      className={`flex items-center text-lg p-5 rounded border transition duration-300 ease-in-out mb-3 ${
                        tab !== 4
                          ? "bg-white shadow-md border-gray-200 hover:shadow-lg"
                          : "bg-gray-200 border-transparent"
                      }`}
                      href="#0"
                      onClick={(e) => {
                        e.preventDefault();
                        setTab(4);
                      }}
                    >
                      <div>
                        <div className="flex justify-between">
                          <div className="font-bold leading-snug tracking-tight mb-1">
                            capstone
                          </div>
                          <div className="flex justify-center items-center w-8 h-8 bg-white rounded-lg shadow flex-shrink-0 ml-3">
                            <Image className="w-4 h-4" src={capstone} alt="" />
                          </div>
                        </div>
                        <div className="text-left text-gray-600 pr-12">
                          capstone is a mobile bookkeeping app designed to make
                          it easy for small businesses and freelancers to track{" "}
                        </div>
                      </div>
                    </a>
                  </div>
                  <div>
                    <a
                      className={`flex items-center text-lg p-5 rounded border transition duration-300 ease-in-out mb-3 ${
                        tab !== 5
                          ? "bg-white shadow-md border-gray-200 hover:shadow-lg"
                          : "bg-gray-200 border-transparent"
                      }`}
                      href="#0"
                      onClick={(e) => {
                        e.preventDefault();
                        setTab(5);
                      }}
                    >
                      <div>
                        <div className="flex  justify-between">
                          <div className="font-bold leading-snug tracking-tight mb-1">
                            duruj
                          </div>
                          <div className="flex justify-center items-center w-8 h-8 bg-white rounded-lg shadow flex-shrink-0 ml-3">
                            <Image className="w-4 h-4" src={duruj} alt="" />
                          </div>
                        </div>
                        <div className="text-left text-gray-600 pr-12">
                          duruj is a mobile bookkeeping app designed to make it
                          easy for small businesses and freelancers to track{" "}
                        </div>
                      </div>
                    </a>
                  </div>
                  <div>
                    <a
                      className={`flex items-center text-lg p-5 rounded border transition duration-300 ease-in-out mb-3 ${
                        tab !== 6
                          ? "bg-white shadow-md border-gray-200 hover:shadow-lg"
                          : "bg-gray-200 border-transparent"
                      }`}
                      href="#0"
                      onClick={(e) => {
                        e.preventDefault();
                        setTab(6);
                      }}
                    >
                      <div>
                        <div className="flex justify-between">
                          <div className="font-bold leading-snug tracking-tight mb-1">
                            Ado pay
                          </div>
                          <div className="flex justify-center items-center w-8 h-8 bg-white rounded-lg shadow flex-shrink-0 ml-3">
                            <Image className="w-4 h-4" src={adopay} alt="" />
                          </div>
                        </div>
                        <div className="text-left text-gray-600 pr-12">
                          Melabooks is a mobile bookkeeping app designed to make
                          it easy for small businesses and freelancers to track{" "}
                        </div>
                      </div>
                    </a>
                  </div>
                </Slider>
              </div>
            </div>

            {/* Tabs items */}
            <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 md:order-1">
              <div className="transition-all">
                <div
                  className="relative flex flex-col text-center lg:text-right"
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
                    <Slider className="w-[500px] rounded-box" {...settings}>
                      <div className="w-full h-full">
                        <img
                          src="https://img.daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.jpg"
                          className="w-[500px] h-[400px] object-cover"
                          alt="Tailwind CSS Carousel component"
                        />
                      </div>
                      <div className="w-full h-full">
                        <img
                          src="https://img.daisyui.com/images/stock/photo-1565098772267-60af42b81ef2.jpg"
                          className="w-[500px] h-[400px] object-cover"
                          alt="Tailwind CSS Carousel component"
                        />
                      </div>
                      <div className="w-full h-full">
                        <img
                          src="https://img.daisyui.com/images/stock/photo-1572635148818-ef6fd45eb394.jpg"
                          className="w-[500px] h-[400px] object-cover"
                          alt="Tailwind CSS Carousel component"
                        />
                      </div>
                      <div className="w-full h-full">
                        <img
                          src="https://img.daisyui.com/images/stock/photo-1494253109108-2e30c049369b.jpg"
                          className="w-[500px] h-[400px] object-cover"
                          alt="Tailwind CSS Carousel component"
                        />
                      </div>
                      <div className="w-full h-full">
                        <img
                          src="https://img.daisyui.com/images/stock/photo-1550258987-190a2d41a8ba.jpg"
                          className="w-[500px] h-[400px] object-cover"
                          alt="Tailwind CSS Carousel component"
                        />
                      </div>
                      <div className="w-full h-full">
                        <img
                          src="https://img.daisyui.com/images/stock/photo-1559181567-c3190ca9959b.jpg"
                          className="w-[500px] h-[400px] object-cover"
                          alt="Tailwind CSS Carousel component"
                        />
                      </div>
                      <div className="w-full h-full">
                        <img
                          src="https://img.daisyui.com/images/stock/photo-1601004890684-d8cbf643f5f2.jpg"
                          className="w-[500px] h-[400px] object-cover"
                          alt="Tailwind CSS Carousel component"
                        />
                      </div>
                    </Slider>
                    {/* </div> */}
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
                  <Transition
                    show={tab === 4}
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

function Arrow(props: any) {
  const { className, style } = props;
  return <div className={className} style={{ ...style, display: "none" }} />;
}
