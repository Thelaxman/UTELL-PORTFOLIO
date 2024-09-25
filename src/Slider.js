import React, { useState } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { RxDotFilled } from "react-icons/rx";

function App() {
  const slides = [
    {
      url: "https://guruindiarestaurant.ca/millrise/wp-content/uploads/2022/03/logo-1-1.png",
      link: "https://guruindiarestaurant.ca",
    },
    {
      url: "https://imgs.search.brave.com/xjQTtnxkE4Q8kJvvsgznsLc58Y7NYDYRPxb51ttTc68/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9zMy1t/ZWRpYTAuZmwueWVs/cGNkbi5jb20vYnBo/b3RvL0VzdHRTWFdV/SFNTNllySUVod2Ni/RVEvbC5qcGc",
      link: "https://indianaccentyyc.ca/",
    },
    {
      url: "https://www.zaikatheindiandelicacy.ca/zaika%20logo.png",
      link: "https://www.zaikatheindiandelicacy.ca/ ",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  return (
    <div className="max-w-screen flex flex-col bg-color-[#B4B4B4]">
      <div>
        <p className="text-center text-4xl font-bold">Our Happy Clients</p>
      </div>
      <div className="max-w-[1000px] h-[700px] w-full m-auto py-16 px-4 relative group">
        <a href={slides[currentIndex].link}>
          <div
            style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
            className="w-full h-full rounded-2xl bg-center bg-contain bg-no-repeat duration-500"
          ></div>
        </a>
        {/* Left Arrow */}
        <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
          <BsChevronCompactLeft onClick={prevSlide} size={30} />
        </div>
        {/* Right Arrow */}
        <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
          <BsChevronCompactRight onClick={nextSlide} size={30} />
        </div>
        <div className="flex top-4 justify-center py-2">
          {slides.map((slide, slideIndex) => (
            <div
              key={slideIndex}
              onMouseEnter={() => goToSlide(slideIndex)}
              className="text-2xl cursor-pointer"
            >
              <RxDotFilled />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
