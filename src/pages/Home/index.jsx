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
      image:"https://img.freepik.com/premium-psd/abundant-buffet-table-with-various-dishes-including-pasta-seafood-salad-roasted-vegetables-bread_296091-32866.jpg?ga=GA1.1.1812414693.1722386078&semt=ais_hybrid",
      heading: "Elevating Your Events With Custom Catering Experiences",
      subheading: "Crafting Unforgettable Moments Through Culinary Excellence",
    },
    {image:"https://img.freepik.com/premium-photo/contemporary-hotel-dining-area-featuring-sleek-buffet-setup-stylish-seating-arrangement_355018-11820.jpg?w=1060",
      heading: "Savor The Finest Catering Options, Designed Just For You",
      subheading: "Bespoke Dining Experiences For Distinguished Events",
    },
    {
      image:"https://img.freepik.com/premium-photo/festive-iftar-gathering-soft-lantern-lights-with-delicious-appetizers-drinks_1160244-4718.jpg?w=1060",
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
    <div className="min-h-screen w-full bg-[#ecece2]">
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
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className=" flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6"
      style={{position:"absolute",top:"67%",zIndex:"5",width:"100%"}}>
                  <button
                    onClick={() => navigate("/about-us")}
                    className="px-8 py-3 text-lg font-medium bg-[#f1a986] text-white border-2 border-[#f1a986] hover:bg-transparent hover:text-white transition-all duration-300 rounded-md w-52 sm:w-auto"
                  >
                    Discover More
                  </button>
                  <button
                    onClick={() => navigate("/contact-us")}
                    className="px-8 py-3 text-lg font-medium bg-white text-[#f1a986] border-2 border-white hover:bg-transparent hover:text-white transition-all duration-300 rounded-md w-52 sm:w-auto"
                  >
                    Plan Your Event
                  </button>
        </div>
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

      <div className="bg-[#ecece2]">
        <FilmList />
      </div>

      <div className="bg-[#ecece2]">
        <Service />
      </div>

      {/* <div className="bg-[#f5f4f0]">
        <PriceOptions />
      </div> */}

      {/* <div className="bg-gray-100 py-16">
        <Testimonial />
      </div> */}

      <div className="bg-[#ecece2]">
        <CateringEvents />
      </div>

      <div className="menu-container">
      <div 
        style={{
            marginBottom:"-5%", overflow:"hidden",
            display:"flex", alignItems:"center",justifyContent:"center",height:"250px",width:"100%",backgroundImage:"url('MenuTextBorder.png')", backgroundSize:"100%"}}>
           <p className="gold-lustrous-text">
           <p style={{fontFamily:"roboto"}}>{
            `Our global reach and unwavering dedication to excellence ensure a seamless and memorable\n dining experience for every occasion, no matter the location.
The Savoury Soiree is proud to cater for prestigious international events, including:`
          }</p>
        <pre style={{fontFamily:"roboto",display:"flex",justifyContent:"center",paddingLeft:"0"}} >
          {("-JSW PAINTS corporate catering at Hyatt Regency,\n Sydney, Australia| - ASIAN PAINTS coporate catering in Bali, Indonesia| -JSW PAINTS corporate catering in Budapest, Hungary.".split("|")).map((e)=>{
            return (
                <>{e}<br/></>
            )
        })}</pre>
           </p>
        </div>
      </div>
      
      <div className="bg-[#ecece2] py-16 px-4 sm:px-6 lg:px-8">
        {/* <News /> */}
      </div>
    </div>
  );
};

export default Home;