"use client";

import { contentData } from "@/components/data/data";
import { useParams } from "next/navigation";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";
import mock from "@/public/images/serviceImage/mock-1.jpg";
import mock_2 from "@/public/images/serviceImage/mock-2.jpg";
import { useRouter } from "next/router";
import Link from "next/link";

export default function Page() {
  useEffect(() => {
    AOS.init({
      once: true,
      disable: "phone",
      duration: 700,
      easing: "ease-out-cubic",
    });
  });
  const id = useParams().id;
  const selectedContent = contentData.find((content) => content.id === id);
  return (
    <section className="bg-gradient-to-b from-gray-100 to-white sm:px-6">
      <div className="max-w-6xl mx-auto px-4  pt-20  pb-20 md:pt-36 md:pb-20">
        <div className="max-w-md  mx-auto text-center mb-1 md:mb-4 before:flex  before:mx-auto before:h-1 before:w-16 before:bg-blue-700 "></div>
        {selectedContent && (
          <div className="max-w-6xl w-full mx-auto text-center pb-12 md:pb-20">
            <div className="max-w-4xl w-full mx-auto text-center pb-8 md:pb-12">
              <h1
                className="h1 mb-4 font-normal pt-6"
                data-aos="zoom-y-out"
                data-aos-delay="100"
              >
                {selectedContent.title}
              </h1>
              {/* <h2>{selectedContent.title}</h2> */}
              <p
                className="text-xl text-gray-600"
                data-aos="zoom-y-out"
                data-aos-delay="200"
              >
                {selectedContent.description}
              </p>
            </div>

            {/* mock up preview */}
            <div className="flex bg-white flex-col justify-center items-center md:flex-row-reverse gap-x-24 gap-y-4 md:mt-12 ">
              <div className="flex flex-col justify-center text-left my-5 gap-y-4 max-w-lg w-full  h-auto">
                <h1
                  className="h3 max-h-max"
                  data-aos="zoom-y-out"
                  data-aos-delay="200"
                >
                  {selectedContent.imageTitle}
                </h1>
                <p
                  className="w-full pb-2 leading-7"
                  data-aos="zoom-y-out"
                  data-aos-delay="100"
                >
                  {selectedContent.mockDescription}
                </p>
              </div>
              {/* <div className="w-full bg-blue-400 max-h-max"> */}
              <Image
                className="max-w-xl w-full max-h-[473px]"
                src={selectedContent.imageUrl}
                width={100}
                height={100}
                alt={selectedContent.title}
                data-aos="slide-right"
                data-aos-delay="10"
              />
            </div>
            <br />
            <div className="flex bg-white flex-col justify-center items-center md:flex-row gap-x-24 gap-y-4 md:mt-12 ">
              <div className="flex flex-col justify-center text-left my-5 gap-y-4 max-w-lg w-full  h-auto">
                <h1
                  className="h3 max-h-max"
                  data-aos="zoom-y-out"
                  data-aos-delay="200"
                >
                  {selectedContent.imageTitleTwo}
                </h1>
                <p
                  className="w-full pb-2 leading-7"
                  data-aos="zoom-y-out"
                  data-aos-delay="100"
                >
                  {selectedContent.mockDescriptionTwo}
                </p>
              </div>
              {/* <div className="w-full bg-blue-400 max-h-max"> */}
              <Image
                className="max-w-xl w-full max-h-[473px]"
                src={selectedContent.imageUrlTwo}
                width={100}
                height={100}
                alt={selectedContent.title}
                data-aos="slide-left"
                data-aos-delay="10"
              />
            </div>

            {/* <img src={selectedContent.imageUrl} alt={selectedContent.title} /> */}
            <div className="flex max-md:flex-wrap gap-8 text-nowrap justify-center items-center mx-auto max-w-md w-full  mt-10 md:mt-20">
              <Link
                href="/services/web-developments"
                className="btn text-white bg-blue-600 hover:bg-blue-700 shadow"
              >
                web development
              </Link>
              <Link
                href="/services/telegram-bots"
                className="btn text-white bg-blue-600 hover:bg-blue-700 shadow"
              >
                Telegram Bot
              </Link>
              <Link
                href="/services/app-developments"
                className="btn text-white bg-blue-600 hover:bg-blue-700 shadow"
              >
                App Development
              </Link>
              <Link
                href="/services/fintechs"
                className="btn text-white bg-blue-600 hover:bg-blue-700 shadow"
              >
                Finteck
              </Link>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
