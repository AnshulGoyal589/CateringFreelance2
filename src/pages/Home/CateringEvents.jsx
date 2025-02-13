import React from "react";
import { Helmet } from "react-helmet";
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
    { 
      image: "https://res.cloudinary.com/daa3y840x/image/upload/a_-90/v1734955230/991e61cd-3a03-48ab-b80d-214a61fe13c6_ffcbfv.jpg", 
      text: "Corporate Event Catering in Delhi NCR",
      alt: "Professional corporate catering setup in Delhi NCR",
      description: "Premium corporate event catering services in Delhi with customized menus"
    },
    { 
      image: "https://res.cloudinary.com/daa3y840x/image/upload/a_-90/v1734955199/3b43b671-3837-4ab5-ae93-b4b4f3a8b27a_xis2va.jpg", 
      text: "Wedding Catering Services Delhi",
      alt: "Elegant wedding catering display in Delhi",
      description: "Luxurious wedding catering arrangements with traditional and modern cuisines"
    },
    { 
      image: "http://www.keydesign-themes.com/etalon/catering/wp-content/uploads/sites/19/2017/06/blog2.jpg", 
      text: "Private Party Catering Delhi",
      alt: "Intimate private dinner party setup in Delhi",
      description: "Personalized catering solutions for private events in Delhi"
    },
    { 
      image: "https://res.cloudinary.com/daa3y840x/image/upload/v1734955160/6c004137-1db9-411a-95cb-601c02f028f5_y82pt7.jpg", 
      text: "Outdoor Catering Services Delhi",
      alt: "Garden party catering arrangement in Delhi",
      description: "Professional outdoor catering services for Delhi events"
    },
    { 
      image: "https://www.keydesign-themes.com/etalon/catering/wp-content/uploads/sites/19/2017/06/blog3.jpg", 
      text: "Birthday Party Catering Delhi",
      alt: "Birthday celebration catering setup in Delhi",
      description: "Creative birthday party catering solutions in Delhi NCR"
    },
  ];

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "FoodService",
    "name": "Delhi Premium Catering Services",
    "description": "Professional catering services in Delhi NCR for corporate events, weddings, private parties, and special occasions",
    "areaServed": {
      "@type": "City",
      "name": "Delhi"
    },
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Delhi",
      "addressRegion": "Delhi",
      "addressCountry": "IN"
    },
    "servesCuisine": [
      "Indian",
      "Continental",
      "Chinese",
      "Mediterranean"
    ]
  };

  return (
    <>
      <Helmet>
        <title>Premium Catering Services in Delhi NCR | Corporate & Wedding Events</title>
        <meta name="description" content="Leading catering service provider in Delhi NCR. Specialized in corporate events, weddings, private parties with customized menus and professional service." />
        <meta name="keywords" content="delhi catering, wedding catering delhi, corporate catering delhi, party catering services delhi, best caterers in delhi ncr" />
        <meta name="robots" content="index, follow" />
        <meta name="geo.region" content="IN-DL" />
        <meta name="geo.placename" content="Delhi" />
        <link rel="canonical" href="https://yourwebsite.com/catering-events" />
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>

      <div className="py-10 bg-[#ecece2] overflow-x-hidden">
        <div className="text-center mb-10">
          <h1 className="text-4xl font-semibold text-gray-800 mb-4">
            Premier Catering Services in Delhi NCR
          </h1>
          <p className="text-2xl text-gray-600 font-light leading-relaxed">
            <span className="inline">Delhi's trusted catering partner for corporate events, weddings, and celebrations</span>
            <br />
            <span>Serving the finest cuisines with professional excellence</span>
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 px-6">
          {data.map((item, index) => (
            <div key={index} className="relative group" role="article">
              <div className="overflow-hidden rounded-lg">
                <img
                  src={item.image}
                  alt={item.alt}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg">
                <div className="flex flex-col justify-center items-center w-full h-full">
                  <button
                    onClick={() => navigateAndScroll("/events")}
                    className="bg-[#f1a986] text-white px-6 py-2 rounded-lg 
                      invisible opacity-0 group-hover:visible group-hover:opacity-100
                      transform -translate-y-2 group-hover:translate-y-0
                      transition-all delay-150 duration-300
                      hover:bg-[#e08b66]"
                    aria-label={`Read more about ${item.text}`}
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
    </>
  );
};

export default CateringEvents;