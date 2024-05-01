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

export default function SignIn() {
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

      <section className="max-w-6xl bg-white mx-auto pt-8 md:pt-16 px-4 md:pb-20 md:mt-8 border-t-2 border-gray-300">
        <div className="relative max-w-md  mx-auto text-center mb-8 md:mb-20 before:flex  before:mx-auto before:h-1 before:w-16 before:bg-blue-700 ">
          <h1 className="h3 font-normal pt-6">Our design and</h1>
          <h1 className="h3">development approach</h1>
        </div>

        <div className="flex flex-col justify-center items-center h-40 md:flex-row gap-x-24 gap-y-4 "></div>
      </section>
    </section>
  );
}
