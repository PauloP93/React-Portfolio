import "./Carrousel.css";
import { useState } from "react";
import { FaArrowAltCircleLeft } from "react-icons/fa";
import { FaArrowAltCircleRight } from "react-icons/fa";
import CarrouselImg from "./CarrouselImg";

export default function Carrousel({ images }) {
  const [activeIndex, setActiveImg] = useState(1);

  const handleNext = () => {
    setActiveImg((activeIndex + 1) % images.length);
  };

  const handlePrev = () => {
    setActiveImg((activeIndex - 1 + images.length) % images.length);
  };

  return (
    <div className="flex flex-row flex-nowrap items-center justify-center">
      <button className="carousel-prev text-white" onClick={handlePrev}>
        <FaArrowAltCircleLeft />
      </button>
      <div className="w-fit h-64 p-10 items-center">
        <div className="box-content carousel-item active">
          <CarrouselImg image={images[activeIndex]} />
        </div>
      </div>
      <button className="carousel-next text-white" onClick={handleNext}>
        <FaArrowAltCircleRight />
      </button>
    </div>
  );
}
