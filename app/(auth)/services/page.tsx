"use client";

import Image from "next/image";
import team_1 from "@/public/images/team-1.png";
import team_2 from "@/public/images/team-2.png";
import team_3 from "@/public/images/team-3.png";
import author from "@/public/images/author.png";
import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { DropdownProvider, useDropdown } from "@/context/DropdownContext";
import { contentData } from "@/components/data/data";

// export default function Services() {
const Services: React.FC = () => {
  const { selectedOption } = useDropdown();
  const selectedContent = contentData.find(
    (content) => content.id === selectedOption
  );

  console.log(`this is ${selectedContent}`);
  console.log("contentData:", contentData);

  console.log(`this is ${selectedOption}`);

  useEffect(() => {
    AOS.init({
      once: true,
      disable: "phone",
      duration: 700,
      easing: "ease-out-cubic",
    });
  });
  return (
    <DropdownProvider>
      <section className="bg-gradient-to-b from-gray-100 to-white sm:px-6">
        <section className="max-w-6xl mx-auto px-4  pt-20  pb-20 md:pt-36 md:pb-20">
          <div className="relative max-w-md  mx-auto text-center mb-8 md:mb-16 before:flex  before:mx-auto before:h-1 before:w-16 before:bg-blue-700 ">
            {selectedContent && (
              <div>
                {/* <h2>{selectedOption.}</h2> */}
                <p>{selectedContent.description}</p>
                <img
                  src={selectedContent.imageUrl}
                  alt={selectedContent.title}
                />
              </div>
            )}
            {/* <h1
              className="h3 font-normal pt-6"
              data-aos="zoom-y-out"
              data-aos-delay="100"
            >
              Way of building
            </h1>
            <h1 className="h3" data-aos="zoom-y-out" data-aos-delay="200">
              Great Software
            </h1> */}
          </div>

          <div className="flex flex-col justify-center items-center md:flex-row gap-x-24 gap-y-4 ">
            <div className="flex flex-col justify-center my-5 gap-y-7 max-w-lg w-full  h-auto">
              <h1
                className="h4 max-h-max"
                data-aos="zoom-y-out"
                data-aos-delay="200"
              >
                Build the right team to scale
              </h1>
              <p
                className="w-full pb-2"
                data-aos="zoom-y-out"
                data-aos-delay="100"
              >
                Finding the right talent is not easy. We help you find the
                talent that suits your needs, follows your processes, and sticks
                with you long term (not the case with freelancers
              </p>
              <div className="w-full pb-2">
                <p className="w-full pb-2 mb-5" data-aos="zoom-y-out">
                  Our delivery model helps you cut costs and deliver within
                  budget.
                </p>
                <q
                  className="relative inline-block mr-4 h-auto max-w-[400px] text-red-400 font-light left-4 before:h-full before:w-1 before:bg-blue-600 before:absolute before:mr-4 before:-left-4"
                  data-aos="fade-out"
                  data-aos-delay="100"
                >
                  "Simform is quick to identify larger problem with the Software
                  so we decided to expand our scope to build new modules"
                </q>
              </div>
              <div className="flex gap-2">
                <Image
                  className="w-10 h-10 rounded-full"
                  src={author}
                  alt=""
                  data-aos="slide-up"
                  data-aos-delay="10"
                />
                <div
                  className="flex flex-col"
                  data-aos="slide-left"
                  data-aos-delay="10"
                >
                  <p className="text-sm text-nowrap">Jordan Mirchev</p>
                  <p className="text-sm font-light text-nowrap uppercase">
                    ceo
                  </p>
                </div>
              </div>
            </div>
            {/* <div className="w-full bg-blue-400 max-h-max"> */}
            <Image
              className="max-w-xl w-full max-h-[473px]"
              src={team_1}
              alt=""
              data-aos="slide-left"
              data-aos-delay="2"
            />
            {/* </div> */}
          </div>
          {/* other team */}
          <div className="flex flex-col justify-center items-center md:flex-row-reverse gap-x-24 gap-y-4 md:mt-24 ">
            <div className="flex flex-col justify-center my-5 gap-y-7 max-w-lg w-full  h-auto">
              <h1
                className="h4 max-h-max"
                data-aos="zoom-y-out"
                data-aos-delay="200"
              >
                Build the right team to scale
              </h1>
              <p
                className="w-full pb-2"
                data-aos="zoom-y-out"
                data-aos-delay="100"
              >
                Finding the right talent is not easy. We help you find the
                talent that suits your needs, follows your processes, and sticks
                with you long term (not the case with freelancers
              </p>
              <div className="w-full pb-2">
                <p className="w-full pb-2 mb-5" data-aos="zoom-y-out">
                  Our delivery model helps you cut costs and deliver within
                  budget.
                </p>
                <q
                  className="relative inline-block mr-4 h-auto max-w-[400px] text-red-400 font-light left-4 before:h-full before:w-1 before:bg-blue-600 before:absolute before:mr-4 before:-left-4"
                  data-aos="fade-out"
                  data-aos-delay="100"
                >
                  "Simform is quick to identify larger problem with the Software
                  so we decided to expand our scope to build new modules"
                </q>
              </div>
              <div className="flex gap-2">
                <Image
                  className="w-10 h-10 rounded-full"
                  src={author}
                  alt=""
                  data-aos="slide-up"
                  data-aos-delay="10"
                />
                <div
                  className="flex flex-col"
                  data-aos="slide-left"
                  data-aos-delay="10"
                >
                  <p className="text-sm text-nowrap">Jordan Mirchev</p>
                  <p className="text-sm font-light text-nowrap uppercase">
                    ceo
                  </p>
                </div>
              </div>
            </div>
            {/* <div className="w-full bg-blue-400 max-h-max"> */}
            <Image
              className="max-w-xl w-full max-h-[473px]"
              src={team_2}
              alt=""
              data-aos="slide-right"
              data-aos-delay="10"
            />
            {/* </div> */}
          </div>

          {/* other team */}
          <div className="flex flex-col justify-center items-center md:flex-row gap-x-24 gap-y-4 md:mt-24">
            <div className="flex flex-col justify-center my-5 gap-y-7 max-w-lg w-full h-auto">
              <h1
                className="h4 max-h-max"
                data-aos="zoom-y-out"
                data-aos-delay="200"
              >
                Build the right team to scale
              </h1>
              <p
                className="w-full pb-2"
                data-aos="zoom-y-out"
                data-aos-delay="100"
              >
                Finding the right talent is not easy. We help you find the
                talent that suits your needs, follows your processes, and sticks
                with you long term (not the case with freelancers
              </p>
              <div className="w-full pb-2" data-aos="zoom-y-out">
                <p
                  className="w-full pb-2 mb-5"
                  data-aos="fade-out"
                  data-aos-delay="100"
                >
                  Our delivery model helps you cut costs and deliver within
                  budget.
                </p>
                <q className="relative inline-block mr-4 h-auto max-w-[400px] text-red-400 font-light left-4 before:h-full before:w-1 before:bg-blue-600 before:absolute before:mr-4 before:-left-4">
                  Simform is quick to identify larger problem with the Software
                  so we decided to expand our scope to build new modules
                </q>
              </div>
              <div className="flex gap-2">
                <Image
                  className="w-10 h-10 rounded-full"
                  src={author}
                  alt=""
                  data-aos="slide-up"
                  data-aos-delay="10"
                />
                <div
                  className="flex flex-col"
                  data-aos="slide-left"
                  data-aos-delay="10"
                >
                  <p className="text-sm text-nowrap">Jordan Mirchev</p>
                  <p className="text-sm font-light text-nowrap uppercase">
                    ceo
                  </p>
                </div>
              </div>
            </div>
            {/* <div className="w-full bg-blue-400 max-h-max"> */}
            <Image
              className="max-w-xl w-full max-h-[473px]"
              src={team_3}
              alt=""
              data-aos="slide-left"
              data-aos-delay="2"
            />
            {/* </div> */}
          </div>
        </section>
      </section>
    </DropdownProvider>
  );
};

export default Services;
