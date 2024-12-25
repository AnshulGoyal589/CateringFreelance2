import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import { useNavigate } from 'react-router-dom';
import { FaCheck } from 'react-icons/fa';
import '../../index.css';
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

const PriceOptions = () => {
  
  const navigateAndScroll = useNavigateAndScroll();
  useEffect(() => {
    // Initialize AOS with optimized settings
    AOS.init({
      duration: 800,
      easing: 'ease-out',
      once: true,
      offset: 50,
      delay: 0,
      mirror: false,
      anchorPlacement: 'top-bottom',
    });

    // Refresh AOS when component mounts
    AOS.refresh();

    return () => {
      // Clean up AOS instances on component unmount
      AOS.refresh();
    };
  }, []);

  return (
    <div className="w-full font-semibold flex flex-col p-10 items-center">
      <div className="flex flex-col gap-3 mb-8 text-center">
        <h1 className="text-[2.5rem] text-richblack-800">Price Options</h1>
        <p className="text-2xl text-richblack-100 leading-7 gap-y-2">
          Check out the price for getting a professional catering plan completed to suit you and your guests.
        </p>
      </div>

      <div className="flex flex-wrap lg:flex-nowrap justify-between gap-6 w-full font-semibold max-w-7xl">
        {/* Expert Buffets */}
        <div className="flex flex-col text-pure-greys-300 bg-f5f5f0 p-6 items-center w-full font-semibold" 
             data-aos="fade-up" 
             data-aos-delay="100">
          <h1 className="text-black text-2xl">Expert Buffets</h1>
          <div className="rounded-full h-20 w-20 text-[#f1a986]">
            <img
              src={"https://res.cloudinary.com/daa3y840x/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_5px_solid_red,b_rgb:262c35/v1734955055/47649fb7-d0f4-4e9a-a173-5e445a688174_vawpwt.jpg"}
              alt="image-icon"
              className="h-full w-full mt-3 font-semibold object-cover rounded-full"
            />
          </div>
          <div className="text-[#f1a986] text-center mt-3">
            <span className="text-[3rem]">
              <sup className="text-[2rem]">$</sup> 50
            </span>
            <br />
            <p>/ person</p>
          </div>
          <div className="w-full font-semibold">
            {['Appetizer', 'Barbecue', 'Beverages', 'Desserts', 'Side Dishes'].map((item, index) => (
              <div key={index} className="w-full font-semibold">
                <div className="flex items-center space-x-2 justify-center">
                  <FaCheck style={{ color: '#f1a986' }} />
                  <span className="text-lg">{item}</span>
                </div>
                {index !== 4 && <div className="w-full font-semibold h-[1px] bg-richblack-100 my-2"></div>}
              </div>
            ))}
            <button
              className="mt-3 bg-transparent hover:bg-[#f1a986] border-[#f1a986] border px-3 py-3 transition-all duration-300 text-[#f1a986] hover:text-white w-full font-semibold rounded-full text-center"
              onClick={() => navigateAndScroll("/events")}
              
            >
              Get Started
            </button>
          </div>
        </div>

        {/* Ultimate Buffets */}
        <div className="flex flex-col text-pure-greys-300 bg-white p-6 items-center w-full font-semibold"
             data-aos="fade-up"
             data-aos-delay="200">
          <h1 className="text-2xl text-black">Ultimate Buffets</h1>
          <div className="rounded-full h-20 w-20 text-[#f1a986]">
            <img
              src={"https://res.cloudinary.com/daa3y840x/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_5px_solid_red,b_rgb:262c35/v1734955052/8e584dc3-55d3-41ba-a940-873f194db2a8_vq70ng.jpg"}
              alt="image-icon"
              className="h-full mt-3 w-full font-semibold object-cover rounded-full"
            />
          </div>
          <div className="text-[#f1a986] text-center mt-3">
            <span className="text-[3rem]">
              <sup className="text-[2rem]">$</sup> 75
            </span>
            <br />
            <p>/ person</p>
          </div>
          <div className="w-full font-semibold">
            {['Appetizer', 'Barbecue', 'Beverages', 'Desserts', 'Side Dishes'].map((item, index) => (
              <div key={index} className="w-full font-semibold">
                <div className="flex items-center space-x-2 justify-center">
                  <FaCheck style={{ color: '#f1a986' }} />
                  <span className="text-lg">{item}</span>
                </div>
                {index !== 4 && <div className="w-full font-semibold h-[1px] bg-richblack-100 my-2"></div>}
              </div>
            ))}
            <button
              className="mt-3 hover:bg-transparent bg-[#f1a986] border-[#f1a986] border px-3 py-3 transition-all duration-300 hover:text-[#f1a986] text-white w-full font-semibold mx-auto rounded-full text-center"
              onClick={() => navigateAndScroll("/events")}
              
            >
              Get Started
            </button>
          </div>
        </div>

        {/* Specialty Buffets */}
        <div className="flex flex-col text-pure-greys-300 bg-f5f5f0 p-6 items-center w-full font-semibold"
             data-aos="fade-up"
             data-aos-delay="300">
          <h1 className="text-2xl text-black">Specialty Buffets</h1>
          <div className="rounded-full h-20 w-20 text-[#f1a986]">
            <img
              src={"https://res.cloudinary.com/daa3y840x/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_5px_solid_red,b_rgb:262c35/v1734955096/8f19e195-0b78-4dd8-a491-f53feb4a814a_ptcfkk.jpg"}
              alt="image-icon"
              className="h-full mt-3 w-full font-semibold object-cover rounded-full"
            />
          </div>
          <div className="text-[#f1a986] text-center mt-3">
            <span className="text-[3rem]">
              <sup className="text-[2rem]">$</sup> 100
            </span>
            <br />
            <p>/ person</p>
          </div>
          <div className="w-full font-semibold">
            {['Appetizer', 'Barbecue', 'Beverages', 'Desserts', 'Side Dishes'].map((item, index) => (
              <div key={index} className="w-full font-semibold">
                <div className="flex items-center space-x-2 justify-center">
                  <FaCheck style={{ color: '#f1a986' }} />
                  <span className="text-lg">{item}</span>
                </div>
                {index !== 4 && <div className="w-full font-semibold h-[1px] bg-richblack-100 my-2"></div>}
              </div>
            ))}
            <button
              className="mt-3 bg-transparent hover:bg-[#f1a986] border-[#f1a986] border px-3 py-3 transition-all duration-300 text-[#f1a986] hover:text-white w-full font-semibold rounded-full text-center"
              onClick={() => navigateAndScroll("/events")}
              
            >
              Get Started
            </button>
          </div>
        </div>
      </div>

      <div className="mt-2 py-5 flex flex-col items-center justify-between gap-3" 
           data-aos="fade-up"
           >
        <h1 className="text-[1.5rem]">Need more? Request a free quote</h1>
        <p className="text-lg text-richblack-100">We tailor our services to meet your needs.</p>
        <button
          className="px-6 font-semibold py-3 border min-w-52 border-richblack-700 transition-all duration-300 hover:text-richblack-700 hover:bg-white bg-richblack-700 text-white"  
          onClick={() => navigateAndScroll("/contact-us")}
        
        >
          Contact Us
        </button>
      </div>
    </div>
  );
};

export default PriceOptions;