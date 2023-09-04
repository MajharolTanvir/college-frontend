import React from "react";
import mujibPic from "../../../../public/picture/bb-timeline-article.jpg";
import Image from "next/image";
import Image2 from "../../../../public/picture/4.jpg";
import Image3 from "../../../../public/picture/3.jpg";
import Image4 from "../../../../public/picture/2.jpg";
import Image5 from "../../../../public/picture/img-1.jpg";
import Image6 from "../../../../public/picture/7.png";
const MujibSection = () => {
  return (
    <div className=" my-20 px-8">
      <div className=" flex justify-center">
        <h3 className="text-3xl font-bold text-[#262582] text-center my-10 border-b-2 border-green-600 w-[230px]">
          Photo Archive
        </h3>
      </div>

      <div className=" lg:flex my-3 gap-3">
        <div className="lg:w-[40vw] lg:h-[470px] border p-2">
          <div className=" h-80 lg:h-full">
            <Image className="h-full" src={mujibPic} alt="mujib pic" />
          </div>
        </div>

        <div className=" lg:w-[20vw]  flex lg:block w-full gap-2">
          <div className=" w-full p-2 border h-[232px] lg:mt-0 mt-3">
            <Image className=" h-full" src={Image2} alt="mujib pic" />
          </div>
          <div className=" w-full p-2 border h-[227px] mt-3">
            <Image className="h-full" src={Image3} alt="mujib pic" />
          </div>
        </div>

        <div className=" lg:w-[20vw] ">
          <div className=" w-full p-2 border h-[230px] ">
            <Image className="h-full w-full" src={Image4} alt="mujib pic" />
          </div>
          <div className=" w-full p-2 border h-[227px] mt-3">
            <Image className="h-full w-full" src={Image5} alt="mujib pic" />
          </div>
        </div>

        <div className="  h-full border p-2 lg:w-[14vw] w-full ">
          <div className="w-full">
            <Image className="h-[455px] w-full" src={Image6} alt="mujib pic" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MujibSection;
