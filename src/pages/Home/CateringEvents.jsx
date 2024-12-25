import React from "react";
import "aos/dist/aos.css"; 
import { useNavigate } from 'react-router';

const useNavigateAndScroll = () => {
  const navigate = useNavigate();
  
  const navigateAndScroll = (path) => {
    navigate(path);
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return navigateAndScroll;
};
const CateringEvents = () => {
  const navigateAndScroll = useNavigateAndScroll();
  const data = [
    { image: "https://res.cloudinary.com/daa3y840x/image/upload/a_-90/v1734955230/991e61cd-3a03-48ab-b80d-214a61fe13c6_ffcbfv.jpg", text: "Special Event Catering" },
    { image: "https://res.cloudinary.com/daa3y840x/image/upload/a_-90/v1734955199/3b43b671-3837-4ab5-ae93-b4b4f3a8b27a_xis2va.jpg", text: "Catering Holiday Buffet" },
    { image: "https://res.cloudinary.com/daa3y840x/image/upload/v1734955080/cd599d6a-3395-4c15-b56c-bf7677f64777_lriocn.jpg", text: "Private Dinner Party" },
    { image: "https://res.cloudinary.com/daa3y840x/image/upload/v1734955160/6c004137-1db9-411a-95cb-601c02f028f5_y82pt7.jpg", text: "Summer Garden Catering" },
    { image: "https://res.cloudinary.com/daa3y840x/image/upload/v1734955049/629005d8-0375-496c-833c-7c2cc9837d76_tg3gje.jpg", text: "Picnic and Party Buffet" },
  ];

  return (
    <div className="py-10 bg-white overflow-x-hidden">
      <div className="text-center mb-10">
        <h1 className="text-4xl font-semibold text-gray-800 mb-4">
          Catering Events
        </h1>
        <p className="text-2xl text-gray-600 font-light leading-relaxed">
          <span className="inline">From small to large corporate events or weddings and parties, get</span>
          <br />
          <span>inspired with our favorite catering projects.</span>
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-5 gap-4 px-6">
        {data.map((item, index) => (
          <div key={index} className="relative group">
            <div className="overflow-hidden rounded-lg">
              <img
                src={item.image}
                alt={`Catering Event ${index + 1}`}
                className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg">
              <div className="flex flex-col justify-center items-center w-full h-full">
                <button
                // onClick={()=>} 
                  className="bg-[#f1a986] text-white px-6 py-2 rounded-lg 
                    invisible opacity-0 group-hover:visible group-hover:opacity-100
                    transform -translate-y-2 group-hover:translate-y-0
                    transition-all delay-150 duration-300
                    hover:bg-[#e08b66]"
                    onClick={() => navigateAndScroll("/events")}
                
                >
                  Read More
                </button>
              </div>
              <p className="text-white absolute bottom-0 text-xl font-semibold 
                px-3 py-2 text-center w-full bg-black/80
                invisible opacity-0 group-hover:visible group-hover:opacity-100
                transform translate-y-2 group-hover:translate-y-0
                transition-all delay-300 duration-300
                rounded-b-lg"
              >
                {item.text}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CateringEvents;
