"use client";

import Aos from "aos";
import "aos/dist/aos.css";
import Image from "next/image";
import { useEffect } from "react";
import map from "@/public/images/map/googleMap.png";
import companyLogo from "@/public/images/image.png";

export default function Contact() {
  useEffect(() => {
    Aos.init({
      once: true,
      disable: "phone",
      duration: 700,
      easing: "ease-out-cubic",
    });
  });
  return (
    <section className="bg-gradient-to-b from-gray-100 to-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="w-full flex flex-col gap-y-4 md:flex-row h-auto mx-auto pt-24  pb-12 md:pt-36 md:pb-20">
          <div className="max-w-[682px]  w-full max-h-max bg-white py-8 px-5 mr-8">
            <div className="w-full h-auto ">
              <h1
                className="h5 mt-4"
                data-aos="zoom-y-out"
                data-aos-delay="200"
              >
                contact us
              </h1>
              <h1 className="h2 mt-4" data-aos="fade-out" data-aos-delay="200">
                Feel free to get in touch with us.
              </h1>
              <p
                className="text-lg max-w-[682px] w-full text-gray-600"
                data-aos="zoom-y-out"
                data-aos-delay="150"
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua
              </p>
              <div
                className="w-full max-w-lg overflow-x-scroll flex h-24 text-nowrap justify-start items-center gap-x-2 gap-y-4 mt-3"
                data-aos="slide-up"
                data-aos-delay="10"
              >
                <button className="text-white text-center capitalize font-medium text-base bg-btnColor px-5 py-3 rounded-[64px]">
                  Website Development
                </button>
                <button className="text-btnColor capitalize font-medium text-base bg-transparent border border-btnColor px-5 py-2 rounded-[64px]">
                  telegram bot
                </button>
                <button className="text-btnColor capitalize font-medium text-base bg-transparent border border-btnColor px-5 py-2 rounded-[64px]">
                  WhatsApp bot
                </button>
                <button className="text-btnColor capitalize font-medium text-base bg-transparent border border-btnColor px-5 py-2 rounded-[64px]">
                  Mobile Development
                </button>
                <button className="text-btnColor capitalize font-medium text-base bg-transparent border border-btnColor px-5 py-2 rounded-[64px]">
                  Database administration
                </button>
                <button className="text-btnColor capitalize font-medium text-base bg-transparent border border-btnColor px-5 py-2 rounded-[64px]">
                  IT consultation
                </button>
                <button className="text-btnColor capitalize font-medium text-base bg-transparent border border-btnColor px-5 py-2 rounded-[64px]">
                  System Architecture and Design
                </button>
              </div>
            </div>

            <form
              className="w-96 h-96 mt-16 bg-white"
              data-aos="fade"
              data-aos-delay="200"
            >
              <div className="w-full flex flex-col">
                <input
                  type="email"
                  className="w-full placeholder:capitalize py-3 text-base border-y-0 border-x-0 border-b-2 border-gray-300  placeholder:text-gray-400  outline-none"
                  placeholder="enter your email"
                  required
                />
              </div>
              <div className="w-full  flex flex-col">
                <input
                  type="text"
                  className="w-full placeholder:capitalize mt-6 py-3 text-base border-y-0 border-x-0 border-b-2 border-gray-300  placeholder:text-gray-400 outline-none"
                  placeholder="enter your name"
                  required
                />
              </div>
              {/* <div className="w-full flex flex-col">
                <input
                  type="text"
                  className="w-full placeholder:capitalize mt-6 py-3 text-base border-y-0 border-x-0 border-b-2 border-gray-300 placeholder:text-gray-400 outline-none"
                  placeholder="your subject here"
                  required
                />
              </div> */}
              <div className="w-full flex flex-col ">
                <textarea
                  rows={3}
                  className="w-full placeholder:capitalize mt-6 py-3 text-base border-y-0 border-x-0 border-b-2 border-gray-300 placeholder:text-gray-400 outline-none"
                  placeholder="your message here"
                />
              </div>

              {/* button */}

              <button className="w-full mt-6 py-3 px-8 outline-none border-b-2 disabled:cursor-not-allowed disabled:opacity-50 bg-blue-600 rounded-lg capitalize text-base text-white font-semibold text-center">
                send
              </button>
              {/* </div> */}
            </form>
          </div>
          <div
            className="max-w-[533px] flex items-center justify-center min-h-80 w-full mx-auto bg-gradient-to-br from-blue-50 to-indigo-100 rounded-lg shadow-lg border-2 border-blue-200"
            data-aos="slide-left"
            data-aos-delay="2"
          >
            <Image
              src={companyLogo}
              alt="Source Code IT Solutions - Company Logo"
              width={256}
              height={256}
              className="object-contain animate-bounce hover:animate-pulse transition-all duration-300 hover:scale-110"
              data-aos="zoom-in"
              data-aos-delay="400"
              priority
            />
          </div>
        </div>
        {/* our office */}
        <div className="w-full flex flex-col justify-center items-center  mx-auto text-black max-h-max bg-white pt-10 md:pt-14 pb-6 md:pb-10">
          <h1
            className=" max-w-max h-5 text-center mb-4 "
            data-aos="zoom-out"
            data-aos-delay="200"
          >
            location
          </h1>
          <h1
            className="h2 text-center w-full"
            data-aos="zoom-y-out"
            data-aos-delay="200"
          >
            Our Offices
          </h1>
          <p
            className="max-w-xl mx-auto mt-4 text-center text-base text-gray-600"
            data-aos="zoom-y-out"
            data-aos-delay="250"
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>

        {/* map and address */}
        <div className="w-full flex flex-col gap-y-8 md:flex-row max-h-max mx-auto pt-6  pb-12 md:pt-10 md:pb-20">
          <div className="max-w-[682px] w-full py-4  md:py-8">
            <div className="w-full max-h-max ">
              <h1 className="h3 mt-4" data-aos="zoom-out" data-aos-delay="100">
                Addis Ababa, Ethiopia
              </h1>
              <p
                className="text-base mt-4"
                data-aos="fade-in"
                data-aos-delay="200"
              >
                22, around golagol
              </p>
              <h1 className="h4 mt-4" data-aos="fade-out" data-aos-delay="200">
                commet building,{" "}
              </h1>
              <p
                className="text-base mt-4"
                data-aos="fade-out"
                data-aos-delay="100"
              >
                office number: 201
              </p>
              <p
                className="text-base my-4"
                data-aos="fade-out"
                data-aos-delay="200"
              >
                support@sourcecodeet.com
              </p>
              <a href="tel:+1234567890" data-aos="fade-in" data-aos-delay="300">
                Call us at (+251) 974-017208
              </a>
            </div>
          </div>
          <a
            href="https://maps.app.goo.gl/EDy3CgevZ8qvebfu6"
            target="_blank"
            className="flex justify-center items-center max-w-[533px] mx-auto h-96 w-full max-h-max cursor-pointer hover:drop-shadow-md"
            data-aos="zoom-out"
            data-aos-delay="100"
          >
            <Image
              className="object-contain hover:scale-[1.011] transform ease-linear duration-75"
              src={map}
              alt=""
            />
          </a>
        </div>
      </div>
    </section>
  );
}
