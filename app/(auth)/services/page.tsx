export const metadata = {
  title: "Sign In - Simple",
  description: "Page description",
};

import Image from "next/image";
import Link from "next/link";
import team_1 from "@/public/images/team-1.png";
import team_2 from "@/public/images/team-2.png";
import team_3 from "@/public/images/team-3.png";
import author from "@/public/images/author.png";
import icon_1 from "@/public/icons/Rocket_perspective_matte.png";
import icon_2 from "@/public/icons/Code_perspective_matte-1.png";
import icon_3 from "@/public/icons/Heart_rate_perspective_matte.png";
import icon_4 from "@/public/icons/Shield_perspective_matte.png";
import icon_5 from "@/public/icons/Success_perspective_matte.png";
import icon_6 from "@/public/icons/Padlock_perspective_matte.png";
import mode from "@/public/icons/NodeJS.png";
import php from "@/public/icons/PHP.png";
import database from "@/public/icons/database.png";
import java from "@/public/icons/Java.png";
import core from "@/public/icons/NETCore.png";
import python from "@/public/icons/Python.png";
import ruby from "@/public/icons/RubyOnRails.png";
import go from "@/public/icons/Go.png";
import mon from "@/public/icons/mon 1.png";

export default function Services() {
  return (
    <section className="bg-gradient-to-b from-gray-100 to-white sm:px-6">
      <section className="max-w-6xl mx-auto px-4  pt-20  pb-12 md:pt-32 md:pb-20">
        <div className="relative max-w-md  mx-auto text-center mb-8 md:mb-16 before:flex  before:mx-auto before:h-1 before:w-16 before:bg-blue-700 ">
          <h1 className="h3 font-normal pt-6">Way of building</h1>
          <h1 className="h3">Great Software</h1>
        </div>

        <div className="flex flex-col justify-center items-center md:flex-row gap-x-24 gap-y-4 ">
          <div className="flex flex-col justify-center my-5 gap-y-7 max-w-lg w-full  h-auto">
            <h1 className="h4 max-h-max">Build the right team to scale</h1>
            <p className="w-full pb-2">
              Finding the right talent is not easy. We help you find the talent
              that suits your needs, follows your processes, and sticks with you
              long term (not the case with freelancers
            </p>
            <div className="w-full pb-2">
              <p className="w-full pb-2 mb-5">
                Our delivery model helps you cut costs and deliver within
                budget.
              </p>
              <q className="relative inline-block mr-4 h-auto max-w-[400px] text-red-400 font-light left-4 before:h-full before:w-1 before:bg-blue-600 before:absolute before:mr-4 before:-left-4">
                "Simform is quick to identify larger problem with the Software
                so we decided to expand our scope to build new modules"
              </q>
            </div>
            <div className="flex gap-2">
              <Image className="w-10 h-10 rounded-full" src={author} alt="" />
              <div className="flex flex-col">
                <p className="text-sm text-nowrap">Jordan Mirchev</p>
                <p className="text-sm font-light text-nowrap uppercase">ceo</p>
              </div>
            </div>
          </div>
          {/* <div className="w-full bg-blue-400 max-h-max"> */}
          <Image
            className="max-w-xl w-full max-h-[473px]"
            src={team_1}
            alt=""
          />
          {/* </div> */}
        </div>
        {/* other team */}
        <div className="flex flex-col justify-center items-center md:flex-row-reverse gap-x-24 gap-y-4 md:mt-24 ">
          <div className="flex flex-col justify-center my-5 gap-y-7 max-w-lg w-full  h-auto">
            <h1 className="h4 max-h-max">Build the right team to scale</h1>
            <p className="w-full pb-2">
              Finding the right talent is not easy. We help you find the talent
              that suits your needs, follows your processes, and sticks with you
              long term (not the case with freelancers
            </p>
            <div className="w-full pb-2">
              <p className="w-full pb-2 mb-5">
                Our delivery model helps you cut costs and deliver within
                budget.
              </p>
              <q className="relative inline-block mr-4 h-auto max-w-[400px] text-red-400 font-light left-4 before:h-full before:w-1 before:bg-blue-600 before:absolute before:mr-4 before:-left-4">
                Simform is quick to identify larger problem with the Software so
                we decided to expand our scope to build new modules
              </q>
            </div>
            <div className="flex gap-2">
              <Image className="w-10 h-10 rounded-full" src={author} alt="" />
              <div className="flex flex-col">
                <p className="text-sm text-nowrap">Jordan Mirchev</p>
                <p className="text-sm font-light text-nowrap uppercase">ceo</p>
              </div>
            </div>
          </div>
          {/* <div className="w-full bg-blue-400 max-h-max"> */}
          <Image
            className="max-w-xl w-full max-h-[473px]"
            src={team_2}
            alt=""
          />
          {/* </div> */}
        </div>

        {/* other team */}
        <div className="flex flex-col justify-center items-center md:flex-row gap-x-24 gap-y-4 md:mt-24">
          <div className="flex flex-col justify-center my-5 gap-y-7 max-w-lg w-full h-auto">
            <h1 className="h4 max-h-max">Build the right team to scale</h1>
            <p className="w-full pb-2">
              Finding the right talent is not easy. We help you find the talent
              that suits your needs, follows your processes, and sticks with you
              long term (not the case with freelancers
            </p>
            <div className="w-full pb-2">
              <p className="w-full pb-2 mb-5">
                Our delivery model helps you cut costs and deliver within
                budget.
              </p>
              <q className="relative inline-block mr-4 h-auto max-w-[400px] text-red-400 font-light left-4 before:h-full before:w-1 before:bg-blue-600 before:absolute before:mr-4 before:-left-4">
                Simform is quick to identify larger problem with the Software so
                we decided to expand our scope to build new modules
              </q>
            </div>
            <div className="flex gap-2">
              <Image className="w-10 h-10 rounded-full" src={author} alt="" />
              <div className="flex flex-col">
                <p className="text-sm text-nowrap">Jordan Mirchev</p>
                <p className="text-sm font-light text-nowrap uppercase">ceo</p>
              </div>
            </div>
          </div>
          {/* <div className="w-full bg-blue-400 max-h-max"> */}
          <Image
            className="max-w-xl w-full max-h-[473px]"
            src={team_3}
            alt=""
          />
          {/* </div> */}
        </div>
      </section>

      <section className="max-w-6xl bg-gray-100 mx-auto pt-8 md:pt-16 px-4 pb-10 md:pb-20 md:mt-8 border-y-2 border-gray-300">
        <div className="relative max-w-md  mx-auto text-center mb-8 md:mb-20 before:flex  before:mx-auto before:h-1 before:w-16 before:bg-blue-700 ">
          <h1 className="h3 font-normal pt-6">Our design and</h1>
          <h1 className="h3">development approach</h1>
        </div>
        {/* design cards */}
        <div className="w-full flex flex-wrap justify-center items-center h-auto  gap-6">
          <DesignCards
            image={icon_1}
            color="#29272E"
            title="UX Driven Engineering"
            desc="Unlike other companies, we are a UX first development company.
                  Projects are driven by designers and they make sure design and
                  experiences translate to code."
          />
          <DesignCards
            image={icon_2}
            color="#68DBF2"
            title="Developing Shared Understanding"
            desc="Unlike other companies, we are a UX first development company.
                  Projects are driven by designers and they make sure design and
                  experiences translate to code."
          />
          <DesignCards
            image={icon_3}
            color="#FF3D9A"
            title="Proven Experience and Expertise"
            desc="Unlike other companies, we are a UX first development company.
                  Projects are driven by designers and they make sure design and
                  experiences translate to code."
          />
          <DesignCards
            image={icon_4}
            color="#67E9F1"
            title="Security & Intellectual Property (IP)"
            desc="Unlike other companies, we are a UX first development company.
                  Projects are driven by designers and they make sure design and
                  experiences translate to code."
          />
          <DesignCards
            image={icon_5}
            color="#F7936F"
            title="Code Reviews"
            desc="Unlike other companies, we are a UX first development company.
                  Projects are driven by designers and they make sure design and
                  experiences translate to code."
          />
          <DesignCards
            image={icon_6}
            color="#F76680"
            title="Quality Assurance & Testing"
            desc="Unlike other companies, we are a UX first development company.
                  Projects are driven by designers and they make sure design and
                  experiences translate to code."
          />
        </div>
      </section>

      {/* tech stack */}
      <section className="max-w-6xl h-auto mx-auto pt-8 md:pt-16 px-4 pb-10 md:pb-24 md:mt-8 border-b-2 border-gray-300">
        <div className="relative max-w-md  mx-auto b text-center mb-8 md:mb-20 before:flex  before:mx-auto before:h-1 before:w-16 before:bg-blue-700 ">
          <h1 className="h3 font-normal pt-6">Our</h1>
          <h1 className="h3 capitalize">tech stack</h1>
        </div>
        <div className="max-w-3xl mx-auto flex flex-wrap justify-center gap-x-14 gap-y-5">
          <p className="bg-clip-text text-transparent text-nowrap capitalize  bg-gradient-to-r from-red-900 to-red-400">
            backend
          </p>
          <p className="bg-clip-text text-transparent text-nowrap capitalize  bg-gradient-to-r from-red-900 to-red-400">
            Frontend
          </p>
          <p className="bg-clip-text text-transparent text-nowrap capitalize  bg-gradient-to-r from-red-900 to-red-400">
            Databases
          </p>
          <p className="bg-clip-text text-transparent text-nowrap uppercase  bg-gradient-to-r from-red-900 to-red-400">
            BOT
          </p>
          <p className="bg-clip-text text-transparent text-nowrap capitalize  bg-gradient-to-r from-red-900 to-red-400">
            CloudTesting
          </p>
          <p className="bg-clip-text text-transparent text-nowrap capitalize  bg-gradient-to-r from-red-900 to-red-400">
            DevOps
          </p>
          <p className="bg-clip-text text-transparent text-nowrap capitalize  bg-gradient-to-r from-red-900 to-red-400">
            Mobile
          </p>
        </div>

        <div className="max-w-5xl  h-auto mx-auto flex flex-wrap justify-center gap-x-14 gap-y-5 mt-8 md:mt-16">
          <div className="w-full flex flex-wrap justify-center items-center  gap-x-14">
            <Image className="w-[160px] h-[90px]" src={mode} alt="" />
            <Image className="w-[160px] h-[90px]" src={php} alt="" />
            <Image className="w-[160px] h-[90px]" src={database} alt="" />
            <Image className="w-[160px] h-[90px]" src={java} alt="" />
            <Image className="w-[160px] h-[90px]" src={core} alt="" />
          </div>
          <div className="max-w-3xl w-full mx-auto flex  flex-wrap justify-center items-center mt-7 gap-1">
            <Image className="w-[160px] h-[90px]" src={python} alt="" />
            <Image className="w-[160px] h-[90px]" src={ruby} alt="" />
            <Image className="w-[160px] h-[90px]" src={go} alt="" />
            <Image className="w-[200px] h-[50px]" src={mon} alt="" />
          </div>
        </div>
      </section>

      {/* alkaline works */}
      <section className="max-w-6xl h-auto mx-auto pt-8 md:pt-16 px-4 pb-10 md:pb-24 md:mt-8 ">
        <div className="relative max-w-md  mx-auto text-center mb-8 md:mb-20 before:flex  before:mx-auto before:h-1 before:w-16 before:bg-blue-700 ">
          <h1 className="h3 font-normal pt-6">How development </h1>
          <h1 className="h3 capitalize">through Alcaline works</h1>
        </div>
        <div className="w-full flex h-32  border border-gray-400 justify-center items-center  gap-x-14"></div>
      </section>
    </section>
  );
}

interface IProps {
  image: any;
  color: string;
  title: string;
  desc: string;
}

function DesignCards({ image, color, title, desc }: IProps) {
  return (
    <div className="max-w-[540px] w-full min-h-[237px] bg-white border border-gray-300 px-7 pt-12 pb-8">
      <div className="flex justify-center gap-x-6">
        <div
          className={`flex justify-center items-center max-w-[59px] w-full rounded-xl h-[56px] ${color}`}
        >
          <Image className="w-9 h-9" src={image} alt="" />
        </div>
        <div className="flex flex-col gap-3">
          <h1 className="capitalize text-xl font-semibold">{title}</h1>
          <p className="text-sm font-light">{desc}</p>
        </div>
      </div>
    </div>
  );
}
