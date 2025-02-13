import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { useInView } from "react-intersection-observer";
import { useNavigate } from "react-router";
import AOS from "aos";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "aos/dist/aos.css";

import CardComponent from "./CardComponent";
import Service from "./Service";
import CateringEvents from "./CateringEvents";
import FilmList from "./AboutUs";
import InternationalCatering from "./InternationalCatering";

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
      image: "https://img.freepik.com/premium-psd/abundant-buffet-table-with-various-dishes-including-pasta-seafood-salad-roasted-vegetables-bread_296091-32866.jpg?ga=GA1.1.1812414693.1722386078&semt=ais_hybrid",
      heading: "Premier Catering Services in Delhi NCR",
      subheading: "Luxury Catering Solutions for Corporate Events & Weddings",
      alt: "Luxury catering spread in Delhi featuring international cuisine"
    },
    {
      image: "https://img.freepik.com/premium-photo/contemporary-hotel-dining-area-featuring-sleek-buffet-setup-stylish-seating-arrangement_355018-11820.jpg?w=1060",
      heading: "Best Wedding Caterers in Delhi",
      subheading: "Crafting Memorable Celebrations with Exquisite Cuisines",
      alt: "Elegant wedding catering setup in Delhi"
    },
    {
      image: "https://img.freepik.com/premium-photo/festive-iftar-gathering-soft-lantern-lights-with-delicious-appetizers-drinks_1160244-4718.jpg?w=1060",
      heading: "Top Corporate Event Catering in Delhi",
      subheading: "Professional Catering Services for Business Functions",
      alt: "Corporate event catering arrangement in Delhi"
    },
  ];

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "CateringService",
    "name": "Premium Delhi Catering Services",
    "description": "Leading catering service provider in Delhi NCR, specializing in weddings, corporate events, and luxury celebrations with international cuisine options.",
    "areaServed": {
      "@type": "City",
      "name": "Delhi NCR"
    },
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Delhi",
      "addressRegion": "Delhi",
      "addressCountry": "IN"
    },
    "priceRange": "₹₹₹",
    "servesCuisine": [
      "Indian",
      "Continental",
      "Oriental",
      "Mediterranean"
    ],
    "amenityFeature": [
      "Corporate Catering",
      "Wedding Catering",
      "International Cuisine",
      "Theme Parties"
    ]
  };

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
    <>
      <Helmet>
        <title>Premium Catering Services in Delhi NCR | Wedding & Corporate Events</title>
        <meta name="description" content="Leading catering service provider in Delhi NCR. Specialized in luxury weddings, corporate events, and international cuisine. Professional catering solutions with customized menus." />
        <meta name="keywords" content="delhi catering services, wedding caterers delhi, corporate catering delhi ncr, best caterers in delhi, luxury catering delhi" />
        <meta name="robots" content="index, follow" />
        <meta name="geo.region" content="IN-DL" />
        <meta name="geo.placename" content="Delhi" />
        <link rel="canonical" href="https://yourwebsite.com/" />
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>

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
                role="banner"
              >
                <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/40"></div>
                <div
                  ref={ref}
                  className="relative z-10 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto"
                  key={animationKey}
                >
                  <h1 className="animate-heading text-3xl sm:text-5xl lg:text-6xl font-serif font-bold mb-6 leading-tight">
                    {slide.heading}
                  </h1>
                  <p className="animate-heading text-xl sm:text-2xl mb-8 text-gray-100">
                    {slide.subheading}
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <div 
          className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6"
          style={{position:"absolute", top:"69%", zIndex:"5", width:"100%"}}
        >
          <button
            onClick={() => navigate("/about-us")}
            className="px-8 py-3 text-lg font-medium bg-[#f1a986] text-white border-2 border-[#f1a986] hover:bg-transparent hover:text-white transition-all duration-300 rounded-md w-52 sm:w-auto"
            aria-label="Learn more about our catering services"
          >
            Discover More
          </button>
          <button
            onClick={() => navigate("/contact-us")}
            className="px-8 py-3 text-lg font-medium bg-white text-[#f1a986] border-2 border-white hover:bg-transparent hover:text-white transition-all duration-300 rounded-md w-52 sm:w-auto"
            aria-label="Contact us to plan your event"
          >
            Plan Your Event
          </button>
        </div>

        <div className="swiper-button-next !text-white hover:text-[#f1a986] transition-colors duration-300"></div>
        <div className="swiper-button-prev !text-white hover:text-[#f1a986] transition-colors duration-300"></div>

        <main>
          <section className="relative z-20 px-4 sm:px-6 lg:px-8 bg-transparent">
            <CardComponent />
          </section>

          <section className="bg-[#ecece2]">
            <FilmList />
          </section>

          <section className="bg-[#ecece2]">
            <Service />
          </section>

          <section className="bg-[#ecece2]">
            <CateringEvents />
          </section>

          <section>
            <InternationalCatering/>
          </section>
        </main>
      </div>
    </>
  );
};

export default Home;