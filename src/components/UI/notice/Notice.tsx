import React from "react";

const Notice = () => {
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
    <div className="lg:w-[80vw] mx-auto lg:my-40 mt-[400px] px-2">
      <div className=" mt-5">
        <h1 className="text-center text-2xl">NEWS & NOTICE </h1>
      </div>

      <div className=" grid lg:grid-cols-3 grid-cols-1 gap-10 mt-5">
        <div className=" h-[65vh] border rounded">
          <div className=" h-14 bg-[#262582] rounded flex justify-center items-center text-white uppercase font-medium">
            <p>Academic Notice</p>
          </div>

          <div className=" h-[50vh]  overflow-y-auto ">
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

          <div className=" flex justify-center items-center h-16">
            <button className=" bg-[#262582] text-white px-8 py-2 rounded">
              See More
            </button>
          </div>
        </div>
        <div className=" h-[65vh] border rounded">
          <div className=" h-14 bg-[#262582] rounded flex justify-center items-center text-white uppercase font-medium">
            <p>News</p>
          </div>

          <div className=" h-[50vh]  overflow-y-auto ">
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

          <div className=" flex justify-center items-center h-16">
            <button className=" bg-[#262582] text-white px-8 py-2 rounded">
              See More
            </button>
          </div>
        </div>
        <div className=" h-[65vh] border rounded">
          <div className=" h-14 bg-[#262582] rounded flex justify-center items-center text-white uppercase font-medium">
            <p>General Notice</p>
          </div>

          <div className=" h-[50vh]   overflow-y-auto scrollable-div">
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

          <div className=" flex justify-center items-center h-16">
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