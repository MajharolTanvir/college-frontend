import Image from "next/image";
import React from "react";
import { MdBorderColor } from "react-icons/md";
import { BsNewspaper, BsTextareaResize } from "react-icons/bs";
import { PiExamBold } from "react-icons/pi";
import { GrUserAdmin } from "react-icons/gr";
import { AiFillWindows } from "react-icons/ai";
import { FcBusinessman, FcDepartment } from "react-icons/fc";
import { GiTeacher } from "react-icons/gi";
const Banner = () => {
  return (
    <div className="lg:h-[430px] bg-base-200 container mx-auto rounded">
      <div className=" p-5 grid lg:grid-cols-2 gap-10 grid-cols-1">
        <div className="">
          <div className="carousel w-full">
            <div id="slide1" className="carousel-item relative w-full h-96">
              <Image
                src="https://www.dcc.edu.bd/media/slide/13-03-2019-1552533939.jpg"
                width={150}
                height={5}
                className="w-full rounded-lg"
                alt="pic"
              />
              <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide1" className="btn btn-circle">
                  ❮
                </a>
                <a href="#slide2" className="btn btn-circle">
                  ❯
                </a>
              </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full h-96">
              <Image
                src="https://www.dcc.edu.bd/media/slide/13-03-2019-1552533993.jpg"
                width={150}
                height={5}
                className="w-full rounded"
                alt="pic"
              />
              <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide1" className="btn btn-circle">
                  ❮
                </a>
                <a href="#slide2" className="btn btn-circle">
                  ❯
                </a>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div className=" grid  grid-cols-3  lg:gap-5 gap-3 lg:mt-2 ">
            <div
              className=" lg:w-full xl:w-full sm:w-[105px] md:w-60  h-28 border rounded-lg bg-white
            flex justify-center items-center "
            >
              <div>
                <span className=" text-2xl  flex justify-center mb-2 text-[#262582]">
                  <MdBorderColor />
                </span>
                <h3 className=" uppercase">Notice</h3>
              </div>
            </div>
            <div
              className="lg:w-full xl:w-full sm:w-[105px] md:w-60   h-28 border rounded-lg bg-white
            flex justify-center items-center "
            >
              <div className=" ">
                <span className=" text-2xl  flex justify-center mb-2 text-[#262582]">
                  <BsTextareaResize />
                </span>
                <h3 className=" uppercase">RESULT</h3>
              </div>
            </div>
            <div
              className=" lg:w-full xl:w-full sm:w-[105px] md:w-60   h-28 border rounded-lg bg-white
            flex justify-center items-center "
            >
              <div className=" ">
                <span className=" text-2xl  flex justify-center mb-2 text-[#262582]">
                  <BsNewspaper />
                </span>
                <h3 className=" uppercase">NEWS</h3>
              </div>
            </div>
          </div>
          <div className=" grid  grid-cols-3  lg:gap-5 gap-3 mt-5">
            <div
              className=" lg:w-full xl:w-full sm:w-[105px] md:w-60   h-28 border rounded-lg bg-white
            flex justify-center items-center "
            >
              <div className=" ">
                <span className=" text-2xl  flex justify-center mb-2 text-[#262582]">
                  <PiExamBold />
                </span>
                <h3 className=" uppercase text-center">EXAM ROUTINE</h3>
              </div>
            </div>
            <div
              className=" lg:w-full xl:w-full sm:w-[105px] md:w-60   h-28 border rounded-lg bg-white
            flex justify-center items-center "
            >
              <div className=" ">
                <span className=" text-2xl  flex justify-center mb-2 text-[#262582]">
                  <GrUserAdmin />
                </span>
                <h3 className=" uppercase">ADMISSION</h3>
              </div>
            </div>
            <div
              className=" lg:w-full xl:w-full sm:w-[105px] md:w-60   h-28 border rounded-lg bg-white
            flex justify-center items-center "
            >
              <div className=" ">
                <span className=" text-2xl  flex justify-center mb-2 text-[#262582]">
                  <AiFillWindows />
                </span>
                <h3 className=" uppercase text-center">CLASS ROUTINE</h3>
              </div>
            </div>
          </div>
          <div className=" grid  grid-cols-3 lg:gap-5 gap-3 mt-5">
            <div
              className=" lg:w-full xl:w-full sm:w-[105px]   md:w-60  h-28 border rounded-lg bg-white
            flex justify-center items-center  "
            >
              <div className=" ">
                <span className=" text-2xl  flex justify-center mb-2 text-[#262582] ">
                  <FcDepartment />
                </span>
                <h3 className=" uppercase lg:text-[17px] text-[14px]">
                  DEPARTMENT
                </h3>
              </div>
            </div>
            <div
              className=" lg:w-full xl:w-full sm:w-[105px] md:w-60   h-28 border rounded-lg bg-white
            flex justify-center items-center "
            >
              <div className=" ">
                <span className=" text-2xl  flex justify-center mb-2 text-[#262582]">
                  <GiTeacher />
                </span>
                <h3 className=" uppercase">TEACHERS</h3>
              </div>
            </div>
            <div
              className=" lg:w-full xl:w-full sm:w-[105px] md:w-60   h-28 border rounded-lg bg-white
            flex justify-center items-center "
            >
              <div className=" ">
                <span className=" text-2xl  flex justify-center mb-2 text-[#262582]">
                  <FcBusinessman />
                </span>
                <h3 className=" uppercase">STUDENTS</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
