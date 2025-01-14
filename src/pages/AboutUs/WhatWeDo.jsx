import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

const WhatWeDo = () => {
  const data = [
    {
      no: 1,
      heading: "Our Philosophy",
      text: "Our philosophy is simple: to infuse every occasion with a sense of enchantment through exceptional flavours and unparalleled attention to detail."
    },
    {
      no: 2,
      heading: "Our Objectives",
      text: "At The Savoury Soiree, we don't just cater events—we create cherished memories."
    },
    {
      no: 3,
      heading: "Our People",
      text: "Our people are driven by passion and commitment, working together to achieve excellence and make a meaningful impact."
    }
  ];

  const [activeItems, setActiveItems] = useState([]);

  const toggleItem = (index) => {
    setActiveItems(prevState =>
      prevState.includes(index)
        ? prevState.filter(item => item !== index)
        : [...prevState, index]
    );
  };

  return (
    <div className="flex flex-col lg:flex-row bg-[#ecece2] lg:min-h-[32rem] gap-4 lg:gap-8 p-4 lg:p-16 lg:px-56 ">
      {/* Left side */}
      <div className="flex-1 space-y-4 lg:space-y-6">
        <h1 className="text-2xl lg:text-3xl font-semibold text-gray-800 transition-colors duration-300">
          What we do
        </h1>
        <div className="space-y-4">
          <p className="text-base lg:text-xl text-gray-700 space-y-4">
            Welcome to <span className="italic text-[#8B4513] text-lg lg:text-2xl">The Savoury Soiree</span>, 
            where culinary artistry meets sophisticated elegance. We are purveyors of exceptional catering, 
            dedicated to transforming your celebrations into unforgettable experiences.
          </p>
          
          <p className="text-base lg:text-xl text-gray-700">
            Whether an intimate soirée, a grand wedding, or a refined corporate affair, 
            we weave flavour, style, and flair into every detail.
          </p>
          
          <p className="text-base lg:text-xl text-gray-700">
            Our team specializes in creating bespoke menus tailored to your tastes and preferences. 
            From exquisite appetizers to delectable desserts, every dish is crafted with love and 
            attention to detail, using only the freshest and finest ingredients.
          </p>
          
          <p className="text-base lg:text-xl text-gray-700">
            Let us take care of the culinary details so you can savor every moment. 
            Your perfect event starts with a simple call—reach out to us now!
          </p>

          <ul className="list-disc text-base lg:text-lg text-gray-700 pl-8 lg:pl-16 space-y-2">
            <li>Customized menus to suit every event theme and preference</li>
            <li>Attention to detail in presentation and service</li>
            <li>Professional staff ensuring seamless event execution</li>
          </ul>
        </div>
      </div>

      {/* Right side */}
      <div className="flex-1 space-y-4 mt-6 lg:mt-0">
        {data.map((item, index) => (
          <div
            key={index}
            className="border border-gray-300 p-4 rounded-md shadow-md hover:shadow-lg transition-all duration-300 bg-white"
          >
            <div
              className="flex justify-between items-center cursor-pointer"
              onClick={() => toggleItem(index)}
            >
              <div className="font-semibold text-gray-800 text-lg lg:text-xl hover:text-[#F1A986] transition-colors duration-300">
                {item.heading}
              </div>
              <div className="text-[#F1A986] transition-transform duration-300 transform hover:scale-110">
                {activeItems.includes(index) ? 
                  <Minus className="w-5 h-5 lg:w-6 lg:h-6" /> : 
                  <Plus className="w-5 h-5 lg:w-6 lg:h-6" />
                }
              </div>
            </div>
            <div
              className={`overflow-hidden transition-all duration-500 ease-in-out ${
                activeItems.includes(index) ? 'max-h-40 py-2' : 'max-h-0 py-0'
              }`}
            >
              {activeItems.includes(index) && (
                <p className="text-gray-600 text-sm lg:text-base mt-2">{item.text}</p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhatWeDo;