import React, { useState } from "react";

const Slider = () => {
  // Array of image URLs
  const images = [
    "https://auto-didakt.com/assets/images/3/retromobile_2020-bertone_collection00015-c7f4f6a3.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLkEw25NaQRIlFbUJSPgikOmxwH8wW3_YjeQ&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2Ay5ry4fO_Ei_iPS_DiseBCB4P0hWkWTW9w&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4D5N7j6pTQ3woOEqNZMBOw0x2j93NZAj2Xg&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQm-w3hvob3oWi9fAYbCLOgzhxTonjiydiPAA&s",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Function to go to the next image
  const goNext = () => {
    if (currentIndex < images.length -3) {
      setCurrentIndex(currentIndex + 1);
    }else{
      setCurrentIndex(0)
    }
  };

  // Function to go to the previous image
  const goPrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }else{
      setCurrentIndex(3)
    }
  };

  return (
    <div className="w-full flex items-center justify-center">
      <button 
        onClick={goPrev} 
        className="bg-gray-800 text-white p-2 rounded-lg mx-2 hover:bg-gray-700"
      >
        &larr;
      </button>

      {/* Slider */}
      <div className="flex overflow-hidden w-[80%]">
        <div className="flex " style={{ transform: `translateX(-${currentIndex * 33.33}%)` }}>
          {images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Slide ${index}`}
              className="w-[33%] h-[250px] object-cover p-2"
            />
          ))}
        </div>
      </div>

      <button 
        onClick={goNext} 
        className="bg-gray-800 text-white p-2 rounded-lg mx-2 hover:bg-gray-700"
      >
        &rarr;
      </button>
    </div>
  );
};

export default Slider;
