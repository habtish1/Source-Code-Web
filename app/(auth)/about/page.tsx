"use client";

import Link from "next/link";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";
import avatar from "@/public/images/avatar.png";

// export default function DefaultLayout({
//   children,
// }: {
//   children: React.ReactNode;
// }) {
//   useEffect(() => {
//     AOS.init({
//       once: true,
//       disable: "phone",
//       duration: 700,
//       easing: "ease-out-cubic",
//     });
//   });

export default function About() {
  useEffect(() => {
    AOS.init({
      once: true,
      disable: "phone",
      duration: 700,
      easing: "ease-out-cubic",
    });
  });

  return (
    <section className="bg-gradient-to-b from-gray-100 to-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-32  pb-12 md:pt-40 md:pb-20">
          {/* Page header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h1 className="h1 mb-4">
              We enable developers to build amazing things
            </h1>
            <p
              className="text-xl text-gray-600"
              data-aos="zoom-y-out"
              data-aos-delay="150"
            >
              We have transformed product development, making it faster,
              simpler... better! That's why in just three years we now help more
              developers build projects than anyone else.
            </p>
          </div>
          {/* image goes here */}
          <div className="mx-auto max-w-3xl h-[432px]  flex justify-center items-center bg-gray-300 border border-gray-400">
            image place
          </div>
        </div>

        {/* story goes here */}
        <section className="max-w-5xl mx-auto min-h-[808px]  pb-12  md:pb-20">
          <div className="max-w-3xl w-full mx-auto">
            <h1 className="h3 mb-3">our story</h1>
            <p
              className="text-xl text-gray-600 mb-8"
              data-aos="zoom-y-out"
              data-aos-delay="150"
            >
              Aenean sed adipiscing diam donec adipiscing tristique risus nec
              feugiat auctor urna nunc id cursus metus aliquam eleifend, arcu
              dictum varius duis at consectetur lorem donec massa sapien, sed
              risus ultricies tristique nulla aliquet. Morbi tristique senectus
              et netus et, nibh nisl condimentum id venenatis a condimentum
              vitae sapien.
            </p>
            <p
              className="text-xl text-gray-600 mb-8"
              data-aos="zoom-y-out"
              data-aos-delay="150"
            >
              Quam pellentesque nec nam aliquam sem et tortor consequat,
              pellentesque adipiscing commodo elit at imperdiet. Semper auctor
              neque vitae tempus quam pellentesque nec. Amet dictum sit amet
              justo donec enim diam varius sit amet mattis vulputate enim nulla
              aliquet porttitor.
            </p>
          </div>
          <div className="w-full flex flex-col md:flex-row gap-4">
            <div className="max-w-[435px] mx-auto w-full h-80 flex justify-center items-center bg-gray-300 border border-gray-400">
              image goes here
            </div>
            <div className="flex flex-col w-full md:ml-16">
              <h1 className="h3 mb-3">2017-2024</h1>
              <p
                className="text-xl text-gray-600 mb-8"
                data-aos="zoom-y-out"
                data-aos-delay="150"
              >
                Quam pellentesque nec nam aliquam sem et tortor consequat,
                pellentesque adipiscing commodo elit at imperdiet. Semper auctor
                neque vitae tempus quam pellentesque nec. Amet dictum sit amet
                justo donec enim diam varius sit amet mattis vulputate enim
                nulla aliquet porttitor.
              </p>
              <div className="flex">
                <div className="flex items-center pr-4">
                  <svg
                    className="w-8 h-8 fill-current"
                    viewBox="0 0 12 12"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M11.854.146a.5.5 0 00-.525-.116l-11 4a.5.5 0 00-.015.934l4.8 1.921 1.921 4.8A.5.5 0 007.5 12h.008a.5.5 0 00.462-.329l4-11a.5.5 0 00-.116-.525z"
                      fillRule="nonzero"
                    />
                  </svg>
                </div>
                <q>
                  love this product and would recommend it to anyone. Could be
                  not easier to use, and our multiple websites are wonderful. We
                  get nice comments all the time.
                </q>
              </div>
            </div>
          </div>
        </section>

        {/* developing mind-set */}

        <div className="max-w-6xl mx-auto min-h-[1080px] pt-12  pb-12 md:pt-20  md:pb-20">
          <div className="max-w-3xl  mx-auto text-center pb-12 md:pb-20">
            <h1 className="h1 mb-4">Developing a global mindset </h1>
            <p
              className="text-xl text-gray-600"
              data-aos="zoom-y-out"
              data-aos-delay="150"
            >
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur excepteur sint occaecat
              cupidatat.
            </p>
          </div>
          {/* world illustration */}
          <div className="w-full min-h-[400px] mx-auto text-center flex justify-center items-center bg-gray-300 border border-gray-400  pt-16 pb-12 md:pt-20 md:pb-16">
            world illustration goes here which could be replaced by other images
          </div>
          <div className="w-auto flex flex-wrap justify-center gap-12 min-h-[400px] text-center mx-10  pt-8 md:pt-12">
            <AchievementCard
              title="2012"
              subtitle="Lorem ipsum is placeholder text commonly used tristique senectus
                et netus"
            />
            <AchievementCard
              title="$20M"
              subtitle="Lorem ipsum is placeholder text commonly used tristique senectus
                et netus"
            />
            <AchievementCard
              title="250M+"
              subtitle="Lorem ipsum is placeholder text commonly used tristique senectus
                et netus"
            />
            <AchievementCard
              title="2700+"
              subtitle="Lorem ipsum is placeholder text commonly used tristique senectus
                et netus"
            />
            <AchievementCard
              title="400K"
              subtitle="Lorem ipsum is placeholder text commonly used tristique senectus
                et netus"
            />
            <AchievementCard
              title="Millions"
              subtitle="Lorem ipsum is placeholder text commonly used tristique senectus
                et netus"
            />
          </div>
        </div>
      </div>

      {/* developers team */}
      <section className="w-full bg-gray-200 min-h-[1000px] border border-gray-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="max-w-6xl mx-auto min-h-[1080px]   pt-12  pb-12 md:pt-20  md:pb-20">
            <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
              <h1 className="h2 mb-4">The humans behind the product</h1>
            </div>
            <div className="max-w-6xl flex flex-wrap  gap-8 items-center justify-center">
              <TeamCard
                name="Mark Lamprecht"
                position="CEO & Co-founder"
                desc=" Duis aute irure dolor in reprehenderit in voluptate velit esse
                  cillum sint occaecat cupidatat."
              />
              <TeamCard
                name="Mark Lamprecht"
                position="CEO & Co-founder"
                desc=" Duis aute irure dolor in reprehenderit in voluptate velit esse
                  cillum sint occaecat cupidatat."
              />
              <TeamCard
                name="Mark Lamprecht"
                position="CEO & Co-founder"
                desc=" Duis aute irure dolor in reprehenderit in voluptate velit esse
                  cillum sint occaecat cupidatat."
              />
              <TeamCard
                name="Mark Lamprecht"
                position="CEO & Co-founder"
                desc=" Duis aute irure dolor in reprehenderit in voluptate velit esse
                  cillum sint occaecat cupidatat."
              />
              <TeamCard
                name="Mark Lamprecht"
                position="CEO & Co-founder"
                desc=" Duis aute irure dolor in reprehenderit in voluptate velit esse
                  cillum sint occaecat cupidatat."
              />
              <TeamCard
                name="Mark Lamprecht"
                position="CEO & Co-founder"
                desc=" Duis aute irure dolor in reprehenderit in voluptate velit esse
                  cillum sint occaecat cupidatat."
              />
              <TeamCard
                name="Mark Lamprecht"
                position="CEO & Co-founder"
                desc=" Duis aute irure dolor in reprehenderit in voluptate velit esse
                  cillum sint occaecat cupidatat."
              />
              <TeamCard
                name="Mark Lamprecht"
                position="CEO & Co-founder"
                desc=" Duis aute irure dolor in reprehenderit in voluptate velit esse
                  cillum sint occaecat cupidatat."
              />
              <TeamCard
                name="Mark Lamprecht"
                position="CEO & Co-founder"
                desc=" Duis aute irure dolor in reprehenderit in voluptate velit esse
                  cillum sint occaecat cupidatat."
              />
            </div>
          </div>
        </div>
      </section>
      {/* simple is growing */}
      <section className="w-full bg-gray-200 min-h-[1000px] border-t border-gray-300">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="max-w-6xl mx-auto pt-12  pb-12 md:pt-20  md:pb-20">
            <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
              <h1 className="h2 mb-4">Simple is growing. Grow with us.</h1>
              <p
                className="text-xl text-gray-600"
                data-aos="zoom-y-out"
                data-aos-delay="150"
              >
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur excepteur sint occaecat
                cupidatat.
              </p>
            </div>
            {/* image below */}
            <div className="max-w-3xl mx-auto h-[596px]  text-center flex justify-center items-center bg-gray-300 border border-gray-400  pb-12 md:pb-20">
              image goes here
            </div>
            <div className="max-w-3xl mx-auto h-auto bg-inherit">
              <h1 className="h3 mb-8">Current open positions</h1>
              <div className="w-full ">
                <a
                  href="#"
                  className="w-full  p-4 mb-3 flex justify-between items-center rounded-md border border-gray-300 bg-gray-200 shadow-lg"
                >
                  <div className="w-max"> Software engineering </div>
                  <svg
                    className="w-4 h-4 text-blue-400"
                    viewBox="0 0 16 16"
                    style={{ fill: "blue" }}
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M13.707 1h-8v2h5.586L1 13.293l1.414 1.414L12.707 4.414V10h2V2a1 1 0 00-1-1z"></path>
                  </svg>
                </a>
                <a
                  href="#"
                  className="w-full p-4 mb-3 flex justify-between items-center rounded-md border border-gray-300 bg-gray-200 shadow-lg"
                >
                  <div className="w-max"> Software engineering </div>
                  <svg
                    className="cw-4 h-4 text-blue-400"
                    viewBox="0 0 16 16"
                    style={{ fill: "blue" }}
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M13.707 1h-8v2h5.586L1 13.293l1.414 1.414L12.707 4.414V10h2V2a1 1 0 00-1-1z"></path>
                  </svg>
                </a>
                <a
                  href="#"
                  className="w-full p-4 mb-3 flex justify-between items-center rounded-md border border-gray-300 bg-gray-200 shadow-lg"
                >
                  <div className="w-max"> Software engineering </div>
                  <svg
                    className="w-4 h-4 text-blue-400 ce0fo chxnn cy8j5"
                    viewBox="0 0 16 16"
                    style={{ fill: "blue" }}
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M13.707 1h-8v2h5.586L1 13.293l1.414 1.414L12.707 4.414V10h2V2a1 1 0 00-1-1z"></path>
                  </svg>
                </a>
                <a
                  href="#"
                  className="w-full p-4 mb-3 flex justify-between items-center rounded-md border border-gray-300 bg-gray-200 shadow-lg"
                >
                  <div className="w-max"> Software engineering </div>
                  <svg
                    className="w-4 h-4 "
                    viewBox="0 0 16 16"
                    style={{ fill: "blue" }}
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M13.707 1h-8v2h5.586L1 13.293l1.414 1.414L12.707 4.414V10h2V2a1 1 0 00-1-1z"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* process card */}
      <section className="w-full bg-gray-200 min-h-[1000px]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="max-w-6xl mx-auto  bg-gray-200 py-12 md:py-16">
            <div className="w-full flex flex-col justify-center items-center gap-6 md:flex-row">
              <ProcessCard
                number={1}
                title="Apply"
                desc=" Duis aute irure dolor in reprehenderitin volupta velit esse
                  cillum sint occaecat cupidatat."
              />
              {/* <div className="w-[260px] h-[179px] bg-white p-6 drop-shadow-2xl"></div> */}
              <ProcessCard
                number={2}
                title="Screening"
                desc=" Duis aute irure dolor in reprehenderitin volupta velit esse
                  cillum sint occaecat cupidatat."
              />
              {/* <div className="w-[260px] h-[179px] bg-white p-6 drop-shadow-2xl"></div> */}
              <ProcessCard
                number={3}
                title="Interview"
                desc=" Duis aute irure dolor in reprehenderitin volupta velit esse
                  cillum sint occaecat cupidatat."
              />
              {/* <div className="w-[260px] h-[179px] bg-white p-6 drop-shadow-2xl"></div> */}
              <ProcessCard
                number={4}
                title="Job Offers"
                desc=" Duis aute irure dolor in reprehenderitin volupta velit esse
                  cillum sint occaecat cupidatat."
              />
            </div>
          </div>
          <div className="max-w-6xl min-h-20 mx-auto  bg-blue-950 px-8 py-12 md:px-12 md:py-16 mb-16 md:mb-20">
            <div className="w-full min-h-20 text-white flex flex-col md:flex-row justify-between items-center gap-10 ">
              <div className="text-center md:text-left max-w-lg">
                <h1 className="w-full md:mr-6 h3">
                  Sounds like we are building something cool?
                </h1>
              </div>
              <div>
                <a
                  href="#"
                  className="px-8 py-3 text-base leading-6 text-nowrap bg-blue-600 rounded-md font-medium"
                >
                  {" "}
                  join us today
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}

interface IProps {
  title: string;
  subtitle: string;
}

function AchievementCard({ title, subtitle }: IProps) {
  return (
    <div className="w-[300px] h-max bg-white">
      <h1 className="h3 mb-2">{title}</h1>
      <p className="text-base text-gray-600 ">{subtitle}</p>
    </div>
  );
}

interface TProps {
  name: string;
  position: string;
  desc: string;
}

function TeamCard({ name, position, desc }: TProps) {
  return (
    <div className="w-[320px] h-[307px] flex flex-col justify-center items-center bg-inherit">
      <Image
        className="w-[120px] h-[120px] rounded-full mb-4"
        src={avatar}
        alt="dev"
      />

      <h1 className="h4 mb-1">{name}</h1>
      <h1 className="h5 text-blue-600 mb-2">{position}</h1>
      <p className="text-base text-center text-gray-600 mb-3">{desc}</p>
      <div className="flex gap-2">
        <p>Twitter -</p>
        <p>github</p>
        <p>- LinkedIn</p>
      </div>
    </div>
  );
}

interface PProps {
  number: number;
  title: string;
  desc: string;
}

function ProcessCard({ number, title, desc }: PProps) {
  return (
    <div className="w-[260px] flex flex-col items-center h-max bg-white p-6 shadow-xl drop-shadow-xl">
      <div className="w-12 h-12 mb-3 flex justify-center items-center rounded-full bg-blue-700 text-white">
        <h1 className="h5">{number}</h1>
      </div>
      <h1 className="h4">{title}</h1>
      <p className="text-center">{desc}</p>
    </div>
  );
}
