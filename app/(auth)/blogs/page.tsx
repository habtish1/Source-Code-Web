"use client";

import Image from "next/image";
import Link from "next/link";
import author from "@/public/images/author.png";
import feature from "@/public/images/feature.png";
import article from "@/public/images/article.png";
import keyboardTyping from "@/public/images/blogImage/keyboardTyping.jpg";
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

export default function Blog() {
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
      <div className="max-w-6xl mx-auto px-4 sm:px-6 pt-32  pb-12 md:pt-40 md:pb-20">
        {/* Page header */}
        <div className="w-full mx-auto pb-12 md:pb-20">
          <h1
            className="max-w-3xl text-5xl pb-20"
            data-aos="zoom-y-out"
            data-aos-delay="100"
          >
            How Mobile Apps Can Fuel Your Small Business Growth in 2024
          </h1>
          <div
            className="flex gap-x-2 justify-start items-center max-w-md h-auto pb-11"
            data-aos="slide-up"
            data-aos-delay="5"
          >
            <Image className="w-10 h-10 inline" src={author} alt="" />
            <div className="flex flex-wrap justify-start items-center gap-x-1">
              <p className="text-sm text-nowrap">By Jordan Mirchev</p>
              <span>|</span>
              <p className="text-sm text-nowrap">Published on</p>
              <span>|</span>
              <p className="text-sm text-nowrap">November 14, 2022</p>
              <span>|</span>
              <p className="text-sm text-nowrap">2 min read</p>
            </div>
          </div>

          <div
            className="w-full flex justify-center items-center h-[594px] bg-cyan-200"
            data-aos="zoom-out"
            data-aos-delay="150"
          >
            <Image
              alt=""
              className="relative w-full h-full object-cover"
              src={keyboardTyping}
            />
          </div>

          <div className="flex flex-col md:flex-row gap-5 max-w-6xl p-1  mt-12">
            <div className="max-w-3xl">
              <p
                className=" text-xl text-gray-600"
                data-aos="zoom-y-out"
                data-aos-delay="100"
              >
                In today's mobile-first world, consumers are glued to their
                smartphones. This presents a massive opportunity for small
                businesses to connect with their target audience in a convenient
                and personalized way. A well-designed mobile app can be a
                game-changer, boosting brand awareness, customer engagement, and
                ultimately, sales.
              </p>
              <br />{" "}
              <p
                className=" text-xl text-gray-600"
                data-aos="zoom-y-out"
                data-aos-delay="200"
              >
                Quisque sagittis orci ut diam condimentum, vel euismod erat
                placerat. In iaculis arcu eros, eget tempus orci facilisis
                id.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet
                sapien fringilla, mattis ligula consectetur, ultrices mauris.
                Maecenas vitae mattis tellus. Nullam quis imperdiet augue.
                Vestibulum auctor ornare leo, non suscipit magna interdum eu.
                Curabitur pellentesque nibh nibh, at maximus ante fermentum sit
                amet.
              </p>
              <br />{" "}
              <p
                className=" text-xl text-gray-600"
                data-aos="zoom-y-out"
                data-aos-delay="300"
              >
                Pellentesque commodo lacus at sodales sodales. Quisque sagittis
                orci ut diam condimentum, vel euismod erat placerat. In iaculis
                arcu eros, eget tempus orci facilisis id.Lorem ipsum dolor sit
                amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in
                hendrerit urna. Pellentesque sit amet sapien fringilla, mattis
                ligula consectetur, ultrices mauris. Maecenas vitae mattis
                tellus.
              </p>
              <h1
                className="max-w-3xl text-5xl mt-6 mb-7"
                data-aos="zoom-y-out"
                data-aos-delay="200"
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </h1>
              <p
                className=" text-xl text-gray-600"
                data-aos="zoom-y-out"
                data-aos-delay="300"
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et
                massa mi. Aliquam in hendrerit urna. Pellentesque sit amet
                sapien fringilla, mattis ligula consectetur, ultrices mauris.
                Maecenas vitae mattis tellus. Nullam quis imperdiet augue.
                Vestibulum auctor ornare leo, non suscipit magna interdum eu.
                Curabitur pellentesque nibh nibh, at maximus ante fermentum sit
                amet. Pellentesque commodo lacus at sodales sodales.
              </p>
              <br />{" "}
              <p
                className=" text-xl text-gray-600"
                data-aos="zoom-y-out"
                data-aos-delay="300"
              >
                Quisque sagittis orci ut diam condimentum, vel euismod erat
                placerat. In iaculis arcu eros, eget tempus orci facilisis
                id.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet
                sapien fringilla, mattis ligula consectetur, ultrices mauris.
                Maecenas vitae mattis tellus. Nullam quis imperdiet augue.
                Vestibulum auctor ornare leo, non suscipit magna interdum eu.
                Curabitur pellentesque nibh nibh, at maximus ante fermentum sit
                amet.
              </p>
              <br />{" "}
              <p
                className=" text-xl text-gray-600"
                data-aos="zoom-y-out"
                data-aos-delay="300"
              >
                Pellentesque commodo lacus at sodales sodales. Quisque sagittis
                orci ut diam condimentum, vel euismod erat placerat. In iaculis
                arcu eros, eget tempus orci facilisis id.Lorem ipsum dolor sit
                amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in
                hendrerit urna. Pellentesque sit amet sapien fringilla, mattis
                ligula consectetur, ultrices mauris. Maecenas vitae mattis
                tellus.
              </p>
            </div>
            <div className="flex flex-col items-center gap-y-6">
              <div className="flex flex-col gap-y-2 w-[318px] min-h-[545px]">
                <div className="flex  gap-x-9  pb-8 border-b-2 border-slate-600">
                  <Image
                    className="w-[80px] h-[80px] mx-auto"
                    src={article}
                    alt=""
                    data-aos="zoom-out"
                    data-aos-delay="200"
                  />
                  <div className="flex flex-col gap-x-3 justify-center">
                    <p
                      className="uppercase text-xs"
                      data-aos="zoom-y-out"
                      data-aos-delay="100"
                    >
                      product
                    </p>

                    <p
                      className="text-xl"
                      data-aos="zoom-y-out"
                      data-aos-delay="100"
                    >
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>
                    {/* <hr className="mt-10 bg-black" /> */}
                  </div>
                </div>
                <div className="flex  gap-x-9 gap-y-2 pb-10 border-b-2 border-slate-600">
                  <Image
                    className="w-[80px] h-[80px] mx-auto"
                    src={article}
                    alt=""
                    data-aos="zoom-out"
                    data-aos-delay="250"
                  />
                  <div className="flex flex-col gap-x-3 justify-center">
                    <p
                      className="uppercase text-xs"
                      data-aos="zoom-y-out"
                      data-aos-delay="100"
                    >
                      product
                    </p>

                    <p
                      className="text-xl"
                      data-aos="zoom-y-out"
                      data-aos-delay="200"
                    >
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>
                    {/* <hr className="mt-10 bg-black" /> */}
                  </div>
                </div>
                <div className="flex  gap-x-9 gap-y-2 pb-10 border-b-2 border-slate-600">
                  <Image
                    className="w-[80px] h-[80px] mx-auto"
                    src={article}
                    alt=""
                    data-aos="zoom-out"
                    data-aos-delay="300"
                  />
                  <div className="flex flex-col gap-x-3 justify-center">
                    <p
                      className="uppercase text-xs"
                      data-aos="zoom-y-out"
                      data-aos-delay="100"
                    >
                      product
                    </p>

                    <p
                      className="text-xl"
                      data-aos="zoom-y-out"
                      data-aos-delay="200"
                    >
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>
                    {/* <hr className="mt-10 bg-black" /> */}
                  </div>
                </div>
                <div className="flex  gap-x-9 gap-y-2 pb-10 border-b-2 border-slate-600">
                  <Image
                    className="w-[80px] h-[80px] mx-auto"
                    src={article}
                    alt=""
                    data-aos="zoom-out"
                    data-aos-delay="300"
                  />
                  <div className="flex flex-col gap-x-3 justify-center">
                    <p
                      className="uppercase text-xs"
                      data-aos="zoom-y-out"
                      data-aos-delay="100"
                    >
                      product
                    </p>

                    <p
                      className="text-xl"
                      data-aos="zoom-y-out"
                      data-aos-delay="200"
                    >
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>
                    {/* <hr className="mt-10 bg-black" /> */}
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-4 justify-center text-white items-center w-[318px] h-[345px] bg-[#FCA130] rounded-sm">
                <h1
                  className="text-2xl text-center px-8"
                  data-aos="zoom-y-out"
                  data-aos-delay="200"
                >
                  Get More Done Together With US
                </h1>
                <h1
                  className="text-xl text-center px-8"
                  data-aos="zoom-y-out"
                  data-aos-delay="200"
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </h1>
                <button
                  className="capitalize px-3 py-2 text-black bg-slate-200 mt-6"
                  data-aos="slide-up"
                  data-aos-delay="50"
                >
                  get started
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-end max-w-3xl  h-20 border-t-2 border-gray-300 mt-12">
          <p
            className=" text-xl text-gray-600"
            data-aos="zoom-out"
            data-aos-delay="200"
          >
            Good or bad, we’d love to hear your thoughts. Find us on Twitter
            (@twitter)
          </p>
        </div>

        <div className="flex flex-col gap-y-9 max-w-3xl  min-h-[800px] mt-12 pb-20 md:pb-40">
          <p
            className="uppercase text-xs"
            data-aos="zoom-y-out"
            data-aos-delay="200"
          >
            Here are some related articles you may find interesting:
          </p>
          <a href="#" className="flex max-sm:flex-col gap-x-9 gap-y-2 ">
            <Image
              className="w-[270px] h-[203px] mx-auto"
              src={article}
              alt=""
              data-aos="zoom-out"
              data-aos-delay="300"
            />
            <div className="flex flex-col max-sm:items-center gap-x-2 justify-center">
              <div className="flex gap-2">
                <p
                  className="uppercase"
                  data-aos="zoom-y-out"
                  data-aos-delay="100"
                >
                  product
                </p>
                <p
                  className="uppercase"
                  data-aos="zoom-out"
                  data-aos-delay="100"
                >
                  4 minuts read
                </p>
              </div>
              <h1
                className="text-2xl"
                data-aos="zoom-y-out"
                data-aos-delay="200"
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit
              </h1>
              <p
                className="text-base"
                data-aos="zoom-y-out"
                data-aos-delay="150"
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                eu turpis molestie, dictum est a, mattis tellus. Sed dignissim,
                metus nec fringilla accumsan, risus sem{" "}
              </p>
            </div>
          </a>
          <a href="#" className="flex max-sm:flex-col gap-x-9 gap-y-2 ">
            <Image
              className="w-[270px] h-[203px] mx-auto"
              src={article}
              alt=""
              data-aos="zoom-out"
              data-aos-delay="300"
            />
            <div className="flex flex-col max-sm:items-center gap-x-2 justify-center">
              <div className="flex gap-2">
                <p
                  className="uppercase"
                  data-aos="zoom-y-out"
                  data-aos-delay="100"
                >
                  product
                </p>
                <p
                  className="uppercase"
                  data-aos="zoom-y-out"
                  data-aos-delay="200"
                >
                  4 minuts read
                </p>
              </div>
              <h1
                className="text-2xl"
                data-aos="zoom-y-out"
                data-aos-delay="200"
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit
              </h1>
              <p
                className="text-base"
                data-aos="zoom-y-out"
                data-aos-delay="200"
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                eu turpis molestie, dictum est a, mattis tellus. Sed dignissim,
                metus nec fringilla accumsan, risus sem{" "}
              </p>
            </div>
          </a>
          <a href="#" className="flex max-sm:flex-col gap-x-9 gap-y-2 ">
            <Image
              className="w-[270px] h-[203px] mx-auto"
              src={article}
              alt=""
              data-aos="zoom-out"
              data-aos-delay="300"
            />
            <div className="flex flex-col max-sm:items-center gap-x-2 justify-center">
              <div className="flex gap-2">
                <p
                  className="uppercase"
                  data-aos="zoom-out"
                  data-aos-delay="100"
                >
                  product
                </p>
                <p
                  className="uppercase"
                  data-aos="zoom-y-out"
                  data-aos-delay="200"
                >
                  4 minuts read
                </p>
              </div>
              <h1
                className="text-2xl"
                data-aos="zoom-y-out"
                data-aos-delay="200"
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit
              </h1>
              <p className="text-base" data-aos="zoom-out" data-aos-delay="200">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                eu turpis molestie, dictum est a, mattis tellus. Sed dignissim,
                metus nec fringilla accumsan, risus sem{" "}
              </p>
            </div>
          </a>
          <a href="#" className="flex max-sm:flex-col gap-x-9 gap-y-2 ">
            <Image
              className="w-[270px] h-[203px] mx-auto"
              src={article}
              alt=""
              data-aos="zoom-out"
              data-aos-delay="300"
            />
            <div className="flex flex-col max-sm:items-center gap-x-2 justify-center">
              <div className="flex gap-2">
                <p
                  className="uppercase"
                  data-aos="zoom-y-out"
                  data-aos-delay="100"
                >
                  product
                </p>
                <p
                  className="uppercase"
                  data-aos="zoom-y-out"
                  data-aos-delay="200"
                >
                  4 minuts read
                </p>
              </div>
              <h1
                className="text-2xl"
                data-aos="zoom-y-out"
                data-aos-delay="200"
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit
              </h1>
              <p
                className="text-base"
                data-aos="zoom-y-out"
                data-aos-delay="200"
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                eu turpis molestie, dictum est a, mattis tellus. Sed dignissim,
                metus nec fringilla accumsan, risus sem{" "}
              </p>
            </div>
          </a>
        </div>
      </div>
      {/* </div> */}
    </section>
  );
}
