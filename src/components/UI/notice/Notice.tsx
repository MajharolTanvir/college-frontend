import React from "react";

const Notice = () => {
  // notice array
  const notices = [
    {
      date: "12 jun 2023",
      text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorum nobis ducimus nostrum minima sit officia.",
    },
    {
      date: "12 jun 2023",
      text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorum nobis ducimus nostrum minima sit officia.",
    },
    {
      date: "12 jun 2023",
      text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorum nobis ducimus nostrum minima sit officia.",
    },
    {
      date: "12 jun 2023",
      text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorum nobis ducimus nostrum minima sit officia.",
    },
    {
      date: "12 jun 2023",
      text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorum nobis ducimus nostrum minima sit officia.",
    },
    {
      date: "12 jun 2023",
      text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorum nobis ducimus nostrum minima sit officia.",
    },
    {
      date: "12 jun 2023",
      text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorum nobis ducimus nostrum minima sit officia.",
    },
    {
      date: "12 jun 2023",
      text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorum nobis ducimus nostrum minima sit officia.",
    },
    {
      date: "12 jun 2023",
      text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorum nobis ducimus nostrum minima sit officia.",
    },
  ];
  return (
    <div className="container mx-auto lg:my-20  lg:px-2 px-4  ">
      <div className=" mt-5 ">
        <div className=" flex justify-center">
          <h3 className="text-3xl font-bold text-[#262582] text-center my-10 border-b-2 border-green-600 w-[270px]">
            NEWS & NOTICE
          </h3>
        </div>
      </div>

      <div className=" grid lg:grid-cols-3 md:grid-cols-2  grid-cols-1 gap-10 mt-5">
        <div className=" h-[65vh] border  rounded-t-2xl shadow-sm">
          <div className=" h-14 bg-[#262582] rounded-t-2xl flex justify-center items-center text-white uppercase font-medium">
            <p>Academic Notice</p>
          </div>

          <div className=" h-[50vh] border-b  overflow-y-auto ">
            {notices.map((notice, index) => (
              <div key={index} className=" flex h-18   gap-5 border p-2">
                <div className=" h-16 w-32 rounded p-2  text-center  flex  justify-center items-center bg-green-700 text-white">
                  <p>{notice.date}</p>
                </div>
                <div className=" w-full">
                  <p>{notice.text}</p>
                </div>
              </div>
            ))}
          </div>

          <div className=" flex justify-center items-center h-14">
            <button className=" bg-[#262582] text-white px-8 py-2 rounded">
              See More
            </button>
          </div>
        </div>
        <div className=" h-[65vh] border rounded-t-2xl shadow-sm">
          <div className=" h-14 bg-[#262582] rounded-t-2xl flex justify-center items-center text-white uppercase font-medium">
            <p>News</p>
          </div>

          <div className=" h-[50vh]  overflow-y-auto border-b">
            {notices.map((notice, index) => (
              <div key={index} className=" flex h-18   gap-5 border p-2">
                <div className=" h-16 w-32 rounded p-2  text-center  flex  justify-center items-center bg-green-700 text-white">
                  <p>{notice.date}</p>
                </div>
                <div className=" w-full">
                  <p>{notice.text}</p>
                </div>
              </div>
            ))}
          </div>

          <div className=" flex justify-center items-center h-14">
            <button className=" bg-[#262582] text-white px-8 py-2 rounded">
              See More
            </button>
          </div>
        </div>
        <div className=" h-[65vh] border rounded-t-2xl shadow">
          <div className=" h-14 bg-[#262582] rounded-t-2xl flex justify-center items-center text-white uppercase font-medium">
            <p>General Notice</p>
          </div>

          <div className=" h-[50vh]  border-b  overflow-y-auto scrollable-div">
            {notices.map((notice, index) => (
              <div key={index} className=" flex h-18   gap-5 border p-2">
                <div className=" h-16 w-32 rounded p-2  text-center  flex  justify-center items-center bg-green-700 text-white">
                  <p>{notice.date}</p>
                </div>
                <div className=" w-full">
                  <p>{notice.text}</p>
                </div>
              </div>
            ))}
          </div>

          <div className=" flex justify-center items-center h-14">
            <button className=" bg-[#262582] text-white px-8 py-2 rounded">
              See More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Notice;
