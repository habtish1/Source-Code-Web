"use client";

import Link from "next/link";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";
import avatar from "@/public/images/avatar.png";

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
        <div className="pt-24  pb-12 md:pt-36 md:pb-20">
          {/* Page header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h1 className="h1 mb-4" data-aos="zoom-y-out">
              Source Code IT Solutions PLC: Building Innovative Apps for Your
              Success
            </h1>
            <p
              className="text-xl text-gray-600"
              data-aos="zoom-y-out"
              data-aos-delay="200"
            >
              We have transformed product development, making it faster,
              simpler... better! That's why in just three years we now help more
              developers build projects than anyone else.
            </p>
          </div>
          {/* image goes here */}
          <div
            className="mx-auto max-w-3xl h-[432px]  flex justify-center items-center bg-gray-300 border border-gray-400"
            data-aos="zoom-out"
          >
            image place
          </div>
        </div>

        {/* story goes here */}
        <section className="max-w-5xl mx-auto h-auto pb-12  md:pb-20">
          <div className="max-w-3xl w-full mx-auto">
            <h1 className="h3 mb-3" data-aos="zoom-y-out">
              our story
            </h1>
            <p
              className="text-xl text-gray-600 mb-8"
              data-aos="zoom-y-out"
              data-aos-delay="200"
            >
              At Source Code IT Solutions PLC, we're passionate about crafting
              exceptional software solutions that empower your business. Our
              team of skilled developers boasts a diverse range of expertise,
              allowing us to tackle your most complex projects and bring your
              ideas to life.
            </p>
            <h1 className="text-2xl font-bold">Here's what sets us apart:</h1>
            <ul
              className="list-disc ml-6 text-xl text-gray-600"
              data-aos="zoom-y-out"
              data-aos-delay="200"
            >
              <li>
                <span className="font-bold mr-1 text-gray-800">
                  React.js Masters:{" "}
                </span>
                Our developers are fluent in React.js, a powerful JavaScript
                library for building dynamic and user-friendly web interfaces.
                This ensures your web applications are not only functional but
                also visually stunning and performant.
              </li>
              <li>
                <span className="font-bold mr-1 text-gray-800">
                  Web Development Gurus:{" "}
                </span>
                We are veterans of web development, possessing a deep
                understanding of front-end and back-end technologies. Whether
                it's building a simple website or a complex e-commerce platform,
                we have the expertise to deliver exceptional results.
              </li>
              <li>
                <span className="font-bold mr-1 text-gray-800">
                  Messaging Experts:{" "}
                </span>
                A We dive deep into the world of chatbots, crafting intelligent
                and interactive bots for both Telegram and WhatsApp. These bots
                can automate tasks, provide customer support, or even act as a
                powerful marketing tool to engage your audience.
              </li>
              <li>
                <span className="font-bold mr-1 text-gray-800">
                  Mobile App Development Powerhouse:
                </span>
                Our team is well-versed in building high-performance mobile
                applications for both iOS and Android platforms. Whether you
                need a native app built with Flutter or a cross-platform
                solution, we can deliver an app that seamlessly integrates with
                your existing ecosystem.
              </li>
              <li>
                <span className="font-bold mr-1 text-gray-800">
                  Sports Betting Specialists:
                </span>
                We have a proven track record in developing robust and secure
                sports betting platforms. Our solutions ensure a seamless user
                experience for placing bets, managing funds, and tracking
                results.
              </li>
              <li>
                <span className="font-bold mr-1 text-gray-800">
                  Wallet Telegram Bots -
                </span>
                Your Financial Concierge: Our team can create custom Telegram
                bots that act as secure and convenient wallet extensions.
                Imagine managing your finances, making payments, and receiving
                updates directly through Telegram.
              </li>
            </ul>
          </div>
          <div className="w-full flex flex-col md:flex-row gap-4 mt-5 md:mt-10">
            <div
              className="max-w-[435px] mx-auto w-full h-80 flex justify-center items-center bg-gray-300 border border-gray-400"
              data-aos="zoom-out"
              data-aos-delay="200"
            >
              image goes here
            </div>
            <div className="flex flex-col w-full md:ml-16">
              <h1 className="h3 mb-3" data-aos="fade" data-aos-delay="200">
                2017-2024
              </h1>
              <p
                className="text-xl text-gray-600 mb-8"
                data-aos="zoom-y-out"
                data-aos-delay="200"
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
                    data-aos="flip-left"
                    data-aos-delay="300"
                    viewBox="0 0 12 12"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M11.854.146a.5.5 0 00-.525-.116l-11 4a.5.5 0 00-.015.934l4.8 1.921 1.921 4.8A.5.5 0 007.5 12h.008a.5.5 0 00.462-.329l4-11a.5.5 0 00-.116-.525z"
                      fillRule="nonzero"
                    />
                  </svg>
                </div>
                <q data-aos="zoom-in" data-aos-delay="200">
                  love this product and would recommend it to anyone. Could be
                  not easier to use, and our multiple websites are wonderful. We
                  get nice comments all the time.
                </q>
              </div>
            </div>
          </div>
        </section>

        {/* developing mind-set */}

        <div className="max-w-6xl mx-auto h-auto pt-12  pb-12 md:pt-20  md:pb-20">
          <div className="max-w-3xl  mx-auto text-center pb-12 md:pb-20">
            <h1 className="h1 mb-4" data-aos="fade" data-aos-delay="200">
              We don't just develop apps, we build experiences.
            </h1>
            <p
              className="text-xl text-gray-600"
              data-aos="zoom-y-out"
              data-aos-delay="150"
            >
              At Source Code IT Solutions PLC, we understand that your software
              is a reflection of your brand. That's why we focus on creating
              user-centric solutions that not only deliver functionality but
              also captivate your users.
            </p>
          </div>
          {/* world illustration */}
          <div
            className="w-full min-h-[400px] mx-auto text-center flex justify-center items-center bg-gray-300 border border-gray-400  pt-16 pb-12 md:pt-20 md:pb-16"
            data-aos="zoom-out"
          >
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
          <div className="max-w-6xl mx-auto h-auto   pt-12  pb-12 md:pt-20  md:pb-20">
            <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
              <h1 className="h2 mb-4" data-aos="zoom-out" data-aos-delay="200">
                The humans behind the product
              </h1>
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
      <section className="w-full bg-gray-200 h-auto border-t border-gray-300">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="max-w-6xl mx-auto pt-12  pb-12 md:pt-20  md:pb-20">
            <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
              <h1 className="h2 mb-4" data-aos="zoom-out" data-aos-delay="200">
                Simple is growing. Grow with us.
              </h1>
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
            <div
              className="max-w-3xl mx-auto h-[596px]  text-center flex justify-center items-center bg-gray-300 border border-gray-400  pb-12 md:pb-20"
              data-aos="zoom-out"
            >
              image goes here
            </div>
            <div className="max-w-3xl mx-auto h-auto bg-inherit">
              <h1 className="h3 mb-8" data-aos="zoom-out" data-aos-delay="100">
                Current open positions
              </h1>
              <div
                className="w-full "
                data-aos="fade-down"
                data-aos-delay="300"
              >
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
      <section className="w-full bg-gray-200 h-auto md:pb-28">
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
              <ProcessCard
                number={4}
                title="Job Offers"
                desc=" Duis aute irure dolor in reprehenderitin volupta velit esse
                  cillum sint occaecat cupidatat."
              />
            </div>
          </div>
          <div
            className="max-w-6xl min-h-20 mx-auto  bg-blue-950 px-8 py-12 md:px-12 md:py-16 mb-16 md:mb-16"
            data-aos="fade-up"
          >
            <div className="w-full min-h-20 text-white flex flex-col md:flex-row justify-between items-center gap-10 ">
              <div className="text-center md:text-left max-w-lg">
                <h1
                  className="w-full md:mr-6 h3"
                  data-aos="zoom-y-out"
                  data-aos-delay="200"
                >
                  Sounds like we are building something cool?
                </h1>
              </div>
              <div>
                <a
                  href="#"
                  className="px-8 py-3 text-lg text-nowrap capitalize bg-blue-600 rounded-md font-medium hover:bg-blue-800"
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
    <div
      className="w-[300px] h-max bg-white"
      data-aos="fade-up"
      data-aos-delay="250"
    >
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
    <div
      className="w-[320px] h-[307px] flex flex-col justify-center items-center bg-inherit"
      data-aos="fade-up"
      data-aos-delay="200"
    >
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
    <div
      className="w-[260px] flex flex-col items-center h-max bg-white p-6 shadow-xl drop-shadow-xl"
      data-aos="fade-right"
      data-aos-delay="100"
    >
      <div className="w-12 h-12 mb-3 flex justify-center items-center rounded-full bg-blue-700 text-white">
        <h1 className="h5">{number}</h1>
      </div>
      <h1 className="h4">{title}</h1>
      <p className="text-center">{desc}</p>
    </div>
  );
}
