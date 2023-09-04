import { useState } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { RxDotFilled } from "react-icons/rx";

const Events = () => {
  const slides = [
    {
      url: "https://d2v9ipibika81v.cloudfront.net/uploads/sites/70/83444296_2709011275851591_8471094543431761920_o.jpg",
      title: "Title 1",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minima quae dicta esse illo qui voluptates quam, minus a eveniet nostrum, est saepe ea dolorum accusantium deleniti consequuntur molestias doloremque iusto similique magni amet necessitatibus pariatur odit soluta! Laborum, sed voluptatem?",
    },
    {
      url: "https://www.sub.ac.bd/uploads/slider/566d37e310616d6d0ed6.jpg",
      title: "Title 2",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minima quae dicta esse illo qui voluptates quam, minus a eveniet nostrum, est saepe ea dolorum accusantium deleniti consequuntur molestias doloremque iusto similique magni amet necessitatibus pariatur odit soluta! Laborum, sed voluptatem?",
    },
    {
      url: "https://lcls-south.com/wp-content/uploads/2021/10/lclshp.jpg",
      title: "Title 3",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minima quae dicta esse illo qui voluptates quam, minus a eveniet nostrum, est saepe ea dolorum accusantium deleniti consequuntur molestias doloremque iusto similique magni amet necessitatibus pariatur odit soluta! Laborum, sed voluptatem?",
    },
    {
      url: "https://dscsc.mil.bd/wp-content/uploads/2019/04/ice-breaking.jpg",
      title: "Title 4",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minima quae dicta esse illo qui voluptates quam, minus a eveniet nostrum, est saepe ea dolorum accusantium deleniti consequuntur molestias doloremque iusto similique magni amet necessitatibus pariatur odit soluta! Laborum, sed voluptatem?",
    },
    {
      url: "https://api.diu.ac//images/diuac/slider/1624433411_4cxmNEmYqW.jpg",
      title: "Title 5",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minima quae dicta esse illo qui voluptates quam, minus a eveniet nostrum, est saepe ea dolorum accusantium deleniti consequuntur molestias doloremque iusto similique magni amet necessitatibus pariatur odit soluta! Laborum, sed voluptatem?",
    },
    {
      url: "https://d2v9ipibika81v.cloudfront.net/uploads/sites/70/GMM2023-750x450.jpg",
      title: "Title 6",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minima quae dicta esse illo qui voluptates quam, minus a eveniet nostrum, est saepe ea dolorum accusantium deleniti consequuntur molestias doloremque iusto similique magni amet necessitatibus pariatur odit soluta! Laborum, sed voluptatem?",
    },
  ];
  const [currentIndex, setCurrentIndex] = useState(2);

  const prevSlide = () => {
    const isLastSlide = currentIndex === 0;
    const newIndex = isLastSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex: number) => {
    setCurrentIndex(slideIndex);
  };

  return (
    <div className="container mx-auto">
      <div className="flex item-center justify-center">
        <h3 className="text-3xl font-bold text-[#262582] text-center my-10 border-b-2 border-green-600 w-[210px]">
          সর্বশেষ অনুষ্ঠান
        </h3>
      </div>
      <div className="h-[300px] md:h-[500] lg:h-[680px] w-full m-auto px-4 relative group">
        <div
          style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
          className="w-full h-full rounded-2xl bg-center bg-cover duration-500"
        >
          <div className="hidden md:flex flex-col justify-center h-full items-start w-96 glass md:p-5 lg:p-10">
            <h1 className="text-xl lg:text-3xl text-white">
              {slides[currentIndex].title}
            </h1>
            <p className="text-white text-[12px] lg:text-[18px] text-justify py-5 lg:py-10">
              {slides[currentIndex].description}
            </p>
            <button className="glass px-5 py-1 text-white font-medium">
              Show details
            </button>
          </div>
        </div>
        <div className="hidden group-hover:block absolute top-[50%] -translate-x-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
          <BsChevronCompactLeft onClick={prevSlide} size={30} />
        </div>
        <div className="hidden group-hover:block absolute top-[50%] -translate-x-[-50%] right-14 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
          <BsChevronCompactRight onClick={nextSlide} size={30} />
        </div>
        <div className="flex top-10 justify-center py-2 gap-3">
          {slides.map((slide, slideIndex) => (
            <div
              key={slideIndex}
              onClick={() => goToSlide(slideIndex)}
              className="cursor-pointer"
            >
              <div className="h-[2px] rounded-md bg-green-600 w-8 md:w-24 lg:w-36" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Events;
