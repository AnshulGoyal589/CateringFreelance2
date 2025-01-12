import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { useInView } from "react-intersection-observer";
import { useNavigate } from "react-router";
import AOS from "aos";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "aos/dist/aos.css";

// Import your components
import PriceOptions from "./PriceOptions";
import CardComponent from "./CardComponent";
import CateringService from "./CateringService";
import Service from "./Service";
import Testimonial from "./Testimonial";
import CateringEvents from "./CateringEvents";
import News from "./News";
import FilmList from "./AboutUs";

const slideAnimations = `
  @keyframes fadeInScale {
    0% {
      transform: scale(1.1) translateY(-20px);
      opacity: 0;
    }
    100% {
      transform: scale(1) translateY(0);
      opacity: 1;
    }
  }

  @keyframes slideUp {
    0% {
      transform: translateY(30px);
      opacity: 0;
    }
    100% {
      transform: translateY(0);
      opacity: 1;
    }
  }

  .animate-heading {
    animation: fadeInScale 1.5s cubic-bezier(0.4, 0, 0.2, 1) forwards;
    opacity: 0;
  }

  .animate-buttons {
    animation: slideUp 1.5s cubic-bezier(0.4, 0, 0.2, 1) forwards;
    animation-delay: 0.5s;
    opacity: 0;
  }
`;

const Home = (props) => {
  const navigate = useNavigate();
  const [animationKey, setAnimationKey] = useState(0);
  
  useEffect(() => {
    props.setPreview("n/a");
  }, []);

  const slidesData = [
    {
      image: "https://res.cloudinary.com/daa3y840x/image/upload/v1734955032/fe792f76-ba07-4f55-a2c3-09b071045c4b_o6sb3k.jpg",
      heading: "Elevating Your Events With Custom Catering Experiences",
      subheading: "Crafting Unforgettable Moments Through Culinary Excellence",
    },
    {
      image: "https://res.cloudinary.com/daa3y840x/image/upload/w_1000,ar_16:9,c_fill,g_auto,e_sharpen/v1734955025/cacfeb6d-209f-491b-9dc3-fd7863602f21_fm4f0s.jpg",
      heading: "Savor The Finest Catering Options, Designed Just For You",
      subheading: "Bespoke Dining Experiences For Distinguished Events",
    },
    {
      image: "https://cdn.pixabay.com/photo/2019/01/26/02/09/buffet-3955616_640.jpg",
      heading: "Premium Catering Services For Your Taste Only",
      subheading: "Where Luxury Meets Culinary Artistry",
    },
  ];

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  useEffect(() => {
    AOS.init({
      duration: 1200,
      once: true,
      easing: 'ease-out-cubic',
    });
  }, []);

  const handleSlideChange = () => {
    setAnimationKey(prev => prev + 1);
  };

  return (
    <div className="min-h-screen w-full bg-[#f5f4f0]">
      <style>{slideAnimations}</style>
      
      <Swiper
        className="w-full h-screen relative"
        loop={true}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        pagination={{
          clickable: true,
          bulletActiveClass: 'swiper-pagination-bullet-active bg-[#f1a986]'
        }}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        modules={[Navigation, Pagination, Autoplay]}
        onSlideChange={handleSlideChange}
        speed={1500}
      >
        {slidesData.map((slide, index) => (
          <SwiperSlide key={index}>
            <div
              className="h-screen w-full flex flex-col items-center justify-center text-white text-center relative overflow-hidden"
              style={{
                backgroundImage: `url(${slide.image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/40"></div>

              {/* Content Section */}
              <div
                ref={ref}
                className="relative z-10 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto"
                key={animationKey}
              >
                <h2 className="animate-heading text-4xl sm:text-5xl lg:text-6xl font-serif font-bold mb-6 leading-tight">
                  {slide.heading}
                </h2>
                <p className="animate-heading text-xl sm:text-2xl mb-8 text-gray-100">
                  {slide.subheading}
                </p>

                <div className="animate-buttons flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6">
                  <button
                    onClick={() => navigate("/about-us")}
                    className="px-8 py-3 text-lg font-medium bg-[#f1a986] text-white border-2 border-[#f1a986] hover:bg-transparent hover:text-white transition-all duration-300 rounded-md w-full sm:w-auto"
                  >
                    Discover More
                  </button>
                  <button
                    onClick={() => navigate("/contact-us")}
                    className="px-8 py-3 text-lg font-medium bg-white text-[#f1a986] border-2 border-white hover:bg-transparent hover:text-white transition-all duration-300 rounded-md w-full sm:w-auto"
                  >
                    Plan Your Event
                  </button>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Navigation Arrows */}
      <div className="swiper-button-next !text-white hover:text-[#f1a986] transition-colors duration-300"></div>
      <div className="swiper-button-prev !text-white hover:text-[#f1a986] transition-colors duration-300"></div>

      {/* Content Sections */}
      <div className="relative z-20 px-4 sm:px-6 lg:px-8 -mt-28 bg-transparent">
        <CardComponent />
      </div>

      {/* <div className="min-h-[700px] bg-white">
        <CateringService />
      </div> */}

      <div className="bg-[#f5f4f0]">
        <FilmList />
      </div>

      <div className="bg-white">
        <Service />
      </div>

      {/* <div className="bg-[#f5f4f0]">
        <PriceOptions />
      </div> */}

      {/* <div className="bg-gray-100 py-16">
        <Testimonial />
      </div> */}

      <div className="bg-white">
        <CateringEvents />
      </div>

      <div className="bg-[#f5f4f0] py-16 px-4 sm:px-6 lg:px-8">
        <News />
      </div>
    </div>
  );
};

export default Home;