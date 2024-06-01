"use client";
import Image from "next/image";
import dynamic from "next/dynamic";
import TestimonialImage from "@/public/images/testimonial.jpg";
import mela from "@/public/images/mela.png";
import kacha from "@/public/images/kacha.png";
import chenet from "@/public/images/chenet.png";
import capstone from "@/public/images/capstone.png";
import duruj from "@/public/images/duruj.png";
import adopay from "@/public/images/adopay.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

export default function Testimonials() {
  const settings = {
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 20,
    pauseOnHover: false,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          // initialSlide: 2,
        },
      },
    ],
  };

  return (
    <section className="relative">
      {/* Illustration behind content */}
      <div
        className="absolute left-1/2 transform -translate-x-1/2 bottom-0 pointer-events-none -mb-32"
        aria-hidden="true"
      >
        <svg
          width="1760"
          height="518"
          viewBox="0 0 1760 518"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient
              x1="50%"
              y1="0%"
              x2="50%"
              y2="100%"
              id="illustration-02"
            >
              <stop stopColor="#FFF" offset="0%" />
              <stop stopColor="#EAEAEA" offset="77.402%" />
              <stop stopColor="#DFDFDF" offset="100%" />
            </linearGradient>
          </defs>
          <g
            transform="translate(0 -3)"
            fill="url(#illustration-02)"
            fillRule="evenodd"
          >
            <circle cx="1630" cy="128" r="128" />
            <circle cx="178" cy="481" r="40" />
          </g>
        </svg>
      </div>

      <div className="w-full mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">
          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
            <h2 className="h2 mb-4">
              Trusted by over 20,000 companies all over the world
            </h2>
            <p className="text-xl text-gray-600" data-aos="zoom-y-out">
              Arcu cursus vitae congue mauris rhoncus viverra nibh cras pulvinar
              mattis blandit libero cursus mattis.
            </p>
          </div>
        </div>
        {/* test */}

        <div className="w-full mx-auto pb-6 pt-1">
          <Slider className="" {...settings}>
            <div className="relative aspect-square h-[30vh] max-h-[275px] w-2/3 max-w-[450px] mr-2 flex-none md:w-1/3">
              <a className="relative h-full w-full" href="/product/acme-mug">
                <div className="group flex h-full w-full items-center justify-center overflow-hidden rounded-lg border bg-white hover:border-blue-600 relative border-neutral-200 ">
                  <div className="flex items-center hover:scale-125 ease-in-out duration-300 justify-center py-2 col-span-2 md:col-auto">
                    <Image className="w-12 h-12" src={mela} alt="" />
                    <p className="pl-2 uppercase text-base font-bold tracking-wider">
                      Melabooks
                    </p>
                  </div>{" "}
                </div>
              </a>
            </div>
            <div className="relative aspect-square h-[30vh] max-h-[275px] w-2/3 max-w-[450px] mr-2 flex-none md:w-1/3">
              <a className="relative h-full w-full" href="/product/acme-mug">
                <div className="group flex h-full w-full items-center justify-center overflow-hidden rounded-lg border bg-white hover:border-blue-600  relative border-neutral-200">
                  <div className="flex items-center hover:scale-125 ease-in-out duration-300 justify-center py-2 col-span-2 md:col-auto">
                    <Image className="w-12 h-12" src={kacha} alt="" />
                    <p className="pl-2 uppercase text-base font-bold tracking-widest">
                      kacha
                    </p>
                  </div>
                </div>
              </a>
            </div>
            <div className="relative aspect-square h-[30vh] max-h-[275px] w-2/3 max-w-[450px] mr-2 flex-none md:w-1/3">
              <a className="relative h-full w-full" href="/product/acme-mug">
                <div className="group flex h-full w-full items-center justify-center overflow-hidden rounded-lg border bg-white hover:border-blue-600  relative border-neutral-200">
                  <Image
                    className="w-36 hover:scale-125 h-auto ease-in-out duration-300"
                    src={chenet}
                    alt=""
                  />
                </div>
              </a>
            </div>
            <div className="relative aspect-square h-[30vh] max-h-[275px] w-2/3 max-w-[450px] mr-2 flex-none md:w-1/3">
              <a className="relative h-full w-full" href="/product/acme-mug">
                <div className="group flex h-full w-full items-center justify-center overflow-hidden rounded-lg border bg-white hover:border-blue-600 relative border-neutral-200">
                  <Image
                    className="w-36 h-auto hover:scale-125 ease-in-out duration-300"
                    src={capstone}
                    alt=""
                  />
                </div>
              </a>
            </div>
            <div className="relative aspect-square h-[30vh] max-h-[275px] w-2/3 max-w-[450px] mr-2 flex-none md:w-1/3">
              <a className="relative h-full w-full" href="/product/acme-mug">
                <div className="group flex h-full w-full items-center justify-center overflow-hidden rounded-lg border bg-white hover:border-blue-600  relative border-neutral-200">
                  <Image
                    className="w-36 h-auto hover:scale-125 ease-in-out duration-300"
                    src={duruj}
                    alt=""
                  />
                </div>
              </a>
            </div>
            <div className="relative aspect-square h-[30vh] max-h-[275px] w-2/3 max-w-[450px] mr-2 flex-none md:w-1/3">
              <a className="relative h-full w-full" href="/product/acme-mug">
                <div className="group flex h-full w-full items-center justify-center overflow-hidden rounded-lg border bg-white hover:border-blue-600  relative border-neutral-200">
                  <Image
                    className="w-36 h-auto hover:scale-125 ease-in-out duration-300"
                    src={adopay}
                    alt=""
                  />
                </div>
              </a>
            </div>
          </Slider>
        </div>

        {/* <div className="w-full mx-auto overflow-x-auto custom-scroll pb-6 pt-1">
          <ul className="flex animate-carousel gap-4 whitespace-nowrap">
            <li className="relative aspect-square h-[30vh] max-h-[275px] w-2/3 max-w-[475px] flex-none md:w-1/3">
              <a className="relative h-full w-full" href="/product/acme-mug">
                <div className="group flex h-full w-full items-center justify-center overflow-hidden rounded-lg border bg-white hover:border-blue-600 relative border-neutral-200 ">
                  <div className="flex items-center hover:scale-125 ease-in-out duration-300 justify-center py-2 col-span-2 md:col-auto">
                    <Image className="w-12 h-12" src={mela} alt="" />
                    <p className="pl-2 uppercase text-base font-bold tracking-wider">
                      Melabooks
                    </p>
                  </div>{" "}
                </div>
              </a>
            </li>
            <li className="relative aspect-square h-[30vh] max-h-[275px] w-2/3 max-w-[475px] flex-none md:w-1/3">
              <a className="relative h-full w-full" href="/product/acme-mug">
                <div className="group flex h-full w-full items-center justify-center overflow-hidden rounded-lg border bg-white hover:border-blue-600  relative border-neutral-200">
                  <div className="flex items-center hover:scale-125 ease-in-out duration-300 justify-center py-2 col-span-2 md:col-auto">
                    <Image className="w-12 h-12" src={kacha} alt="" />
                    <p className="pl-2 uppercase text-base font-bold tracking-widest">
                      kacha
                    </p>
                  </div>
                </div>
              </a>
            </li>
            <li className="relative aspect-square h-[30vh] max-h-[275px] w-2/3 max-w-[475px] flex-none md:w-1/3">
              <a className="relative h-full w-full" href="/product/acme-mug">
                <div className="group flex h-full w-full items-center justify-center overflow-hidden rounded-lg border bg-white hover:border-blue-600  relative border-neutral-200">
                  <Image
                    className="w-36 hover:scale-125 h-auto ease-in-out duration-300"
                    src={chenet}
                    alt=""
                  />
                </div>
              </a>
            </li>
            <li className="relative aspect-square h-[30vh] max-h-[275px] w-2/3 max-w-[475px] flex-none md:w-1/3">
              <a className="relative h-full w-full" href="/product/acme-mug">
                <div className="group flex h-full w-full items-center justify-center overflow-hidden rounded-lg border bg-white hover:border-blue-600 relative border-neutral-200">
                  <Image
                    className="w-36 h-auto hover:scale-125 ease-in-out duration-300"
                    src={capstone}
                    alt=""
                  />
                </div>
              </a>
            </li>
            <li className="relative aspect-square h-[30vh] max-h-[275px] w-2/3 max-w-[475px] flex-none md:w-1/3">
              <a className="relative h-full w-full" href="/product/acme-mug">
                <div className="group flex h-full w-full items-center justify-center overflow-hidden rounded-lg border bg-white hover:border-blue-600  relative border-neutral-200">
                  <Image
                    className="w-36 h-auto hover:scale-125 ease-in-out duration-300"
                    src={duruj}
                    alt=""
                  />
                </div>
              </a>
            </li>
            <li className="relative aspect-square h-[30vh] max-h-[275px] w-2/3 max-w-[475px] flex-none md:w-1/3">
              <a className="relative h-full w-full" href="/product/acme-mug">
                <div className="group flex h-full w-full items-center justify-center overflow-hidden rounded-lg border bg-white hover:border-blue-600  relative border-neutral-200">
                  <Image
                    className="w-36 h-auto hover:scale-125 ease-in-out duration-300"
                    src={adopay}
                    alt=""
                  />
                </div>
              </a>
            </li>
          </ul>
        </div> */}

        {/* Testimonials */}
        <div className="max-w-3xl mx-auto mt-20 mb-10" data-aos="zoom-y-out">
          <div className="relative flex items-start border-2 border-gray-200 rounded bg-white">
            {/* Testimonial */}
            <div className="text-center px-12 py-8 pt-20 mx-4 md:mx-0">
              <div className="absolute top-0 -mt-8 left-1/2 transform -translate-x-1/2">
                <svg
                  className="absolute top-0 right-0 -mt-3 -mr-8 w-16 h-16 fill-current text-blue-500"
                  viewBox="0 0 64 64"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M37.89 58.338c-2.648-5.63-3.572-10.045-2.774-13.249.8-3.203 8.711-13.383 23.737-30.538l2.135.532c-6.552 10.033-10.532 17.87-11.939 23.515-.583 2.34.22 6.158 2.41 11.457l-13.57 8.283zm-26.963-6.56c-2.648-5.63-3.572-10.046-2.773-13.25.799-3.203 8.71-13.382 23.736-30.538l2.136.533c-6.552 10.032-10.532 17.87-11.94 23.515-.583 2.339.22 6.158 2.41 11.456l-13.57 8.283z" />
                </svg>
                <Image
                  className="relative rounded-full"
                  src={TestimonialImage}
                  width={96}
                  height={96}
                  alt="Testimonial 01"
                />
              </div>
              <blockquote className="text-xl font-medium mb-4">
                “ I love this product and would recommend it to anyone. Could be
                not easier to use, and our multiple websites are wonderful. We
                get nice comments all the time. “
              </blockquote>
              <cite className="block font-bold text-lg not-italic mb-1">
                Darya Finger
              </cite>
              <div className="text-gray-600">
                <span>CEO & Co-Founder</span>{" "}
                <a className="text-blue-600 hover:underline" href="#0">
                  @Dropbox
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
