import React, { useState } from 'react';
import { FaPlus, FaMinus } from 'react-icons/fa';

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
      text: " At The Savoury Soiree, we don’t just cater events—we create cherished memories. "
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
    <div className="flex flex-col md:flex-row bg-[#ecece2] lg:min-h-80 gap-8 p-8">
      <div className="flex-1">
        <h1 className="text-richblack-700 text-3xl font-semibold mb-6  transition-colors duration-300">
          What we do
        </h1>
        <div className="text-richblack-300">
          <p className="mb-4 text-xl font-semibold">
          Welcome to <span className='italic text-brown-100 text-2xl'> The Savoury Soiree</span>, where culinary artistry meets sophisticated 
elegance. We are purveyors of exceptional catering, dedicated to transforming 
your celebrations into unforgettable experiences.
<br /><br />
 Whether an intimate soirée, a 
grand wedding, or a refined corporate affair, we weave flavour, style, and flair 
into every detail. 
<br /><br />
Whether you're planning an intimate gathering, a grand wedding, or a corporate affair, our team specializes in creating bespoke menus tailored to your tastes and preferences. 
<br /><br />
  From exquisite appetizers to delectable desserts, every dish is crafted with love and attention to detail, using only the freshest and finest ingredients.
  <br /><br />
  Let us take care of the culinary details so you can savor every moment. Your perfect event starts with a simple call—reach out to us now!
          </p>
          <ul className="list-disc text-lg font-semibold pl-16 space-y-2">
          <li>Customized menus to suit every event theme and preference</li>
            <li>Attention to detail in presentation and service</li>
            <li>Professional staff ensuring seamless event execution</li>
          </ul>
        </div>
      </div>

      {/* Right side */}
      <div className="flex-1 space-y-4">
        {data.map((item, index) => (
          <div
            key={index}
            className="border border-gray-300 p-4 rounded-md shadow-md hover:shadow-lg transition-shadow duration-300"
          >
            <div
              className="flex justify-between items-center cursor-pointer"
              onClick={() => toggleItem(index)}
            >
              <div
                className="font-semibold text-gray-800 text-xl hover:text-[#F1A986] transition-colors duration-300"
              >
                {item.heading}
              </div>
              <div
                className="text-[#F1A986] text-lg transition-transform duration-300 transform hover:scale-125"
              >
                {activeItems.includes(index) ? <FaMinus /> : <FaPlus />}
              </div>
            </div>
            <div
              className={`overflow-hidden transition-all duration-700 ease-out ${
                activeItems.includes(index) ? 'max-h-screen py-2' : 'max-h-0 py-0'
              }`}
            >
              {activeItems.includes(index) && (
                <p className="text-gray-600 mt-3">{item.text}</p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhatWeDo;
