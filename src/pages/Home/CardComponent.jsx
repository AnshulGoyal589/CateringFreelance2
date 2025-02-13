import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { MdOutlineKeyboardArrowLeft, MdOutlineKeyboardArrowRight } from "react-icons/md";
import { useNavigate } from 'react-router';
import { Helmet } from 'react-helmet';

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

const CardComponent = () => {
  const swiperRef = useRef(null);
  const navigateAndScroll = useNavigateAndScroll();

  const slidesData = [
    {
      image: "https://res.cloudinary.com/daa3y840x/image/upload/v1734955084/bdda474e-5221-432b-9f8a-076db1e9a26b_ppxtgy.jpg",
      heading: 'Luxury Catering in Delhi NCR',
      subheading: 'Experience the finest Delhi-inspired gourmet presentations, perfect for corporate events and weddings in the capital region.',
      alt: 'Luxury catering presentation in Delhi NCR',
      category: 'Corporate Catering'
    },
    {
      image: "https://res.cloudinary.com/daa3y840x/image/upload/v1735051511/s4_wklccw.jpg",
      heading: 'Delhi Gourmet Specialties',
      subheading: "Featuring the best of Delhi's culinary heritage with modern international fusion, crafted by expert chefs.",
      alt: 'Delhi fusion gourmet dishes presentation',
      category: 'Fine Dining'
    },
    {
      image: "https://www.keydesign-themes.com/etalon/catering/wp-content/uploads/sites/19/2017/06/2.jpg",
      heading: 'Customized Delhi Menus',
      subheading: 'Bespoke catering solutions featuring Delhi renowned cuisines, tailored for your special occasions.',
      alt: 'Customized Delhi catering menu display',
      category: 'Event Catering'
    },
    {
      image: "https://www.keydesign-themes.com/etalon/catering/wp-content/uploads/sites/19/2017/06/3.jpg",
      heading: 'Delhi Finest Accompaniments',
      subheading: 'Traditional Delhi delicacies and contemporary sides, perfectly complementing every catering package.',
      alt: 'Delhi traditional and modern side dishes',
      category: 'Traditional Cuisine'
    }
  ];

  // Schema.org structured data
  const cateringSchema = {
    "@context": "https://schema.org",
    "@type": "CateringService",
    "name": "The Savoury Soiree Delhi",
    "image": slidesData.map(slide => slide.image),
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Delhi",
      "addressRegion": "Delhi NCR",
      "addressCountry": "IN"
    },
    "areaServed": {
      "@type": "GeoCircle",
      "geoMidpoint": {
        "@type": "GeoCoordinates",
        "latitude": "28.6139",
        "longitude": "77.2090"
      },
      "geoRadius": "50000"
    },
    "servesCuisine": ["Indian", "International", "Fusion"],
    "priceRange": "₹₹₹",
    "serviceType": slidesData.map(slide => slide.category)
  };

  return (
    <>
      <Helmet>
        <title>Premium Catering Services in Delhi NCR | The Savoury Soiree</title>
        <meta 
          name="description" 
          content="Experience luxury catering services in Delhi NCR. Specializing in corporate events, weddings, and premium dining experiences with Delhi's finest culinary traditions."
        />
        <meta 
          name="keywords" 
          content="Delhi catering, luxury catering Delhi, corporate catering Delhi NCR, wedding catering Delhi, premium catering services"
        />
        <meta name="geo.region" content="IN-DL" />
        <meta name="geo.placename" content="Delhi" />
        <link rel="canonical" href="https://yourdomain.com/delhi-catering-services" />
        <script type="application/ld+json">
          {JSON.stringify(cateringSchema)}
        </script>
      </Helmet>

      <section className="relative w-full bg-transparent px-4 sm:px-8 md:px-12 lg:px-16 py-16" aria-label="Catering Services Gallery">
        <div className="max-w-7xl mx-auto">
          <header className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-4">
              Premium Catering Services in Delhi NCR
            </h1>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Elevating Delhi's culinary excellence with bespoke catering solutions for corporate events, weddings, and special occasions.
            </p>
          </header>

          <Swiper
            ref={swiperRef}
            spaceBetween={24}
            loop={true}
            modules={[Navigation, Pagination, Autoplay]}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
            }}
            className="w-full pb-12"
            breakpoints={{
              640: {
                slidesPerView: 2,
                spaceBetween: 24,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 32,
              },
            }}
          >
            {slidesData.map((slide, index) => (
              <SwiperSlide key={index}>
                <article className="h-[500px] group relative bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>
                  
                  <div className="relative h-[45%] overflow-hidden">
                    <img
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                      alt={slide.alt}
                      src={slide.image}
                      loading="lazy"
                    />
                  </div>

                  <div className="p-6 h-[55%] flex flex-col justify-between bg-white">
                    <div>
                      <span className="text-sm text-[#f1a986] mb-2 block">{slide.category}</span>
                      <h2 className="font-serif text-2xl font-semibold text-gray-900 group-hover:text-[#f1a986] transition-colors duration-300 mb-4">
                        {slide.heading}
                      </h2>
                      <p className="text-gray-600 leading-relaxed">
                        {slide.subheading}
                      </p>
                    </div>
                    
                    <button 
                      onClick={() => navigateAndScroll("/about-us")}
                      className="mt-6 w-full px-6 py-3 bg-transparent border-2 border-[#f1a986] text-[#f1a986] hover:bg-[#f1a986] hover:text-white rounded-md transition-all duration-300 font-medium"
                      aria-label={`Learn more about ${slide.heading}`}
                    >
                      Discover More
                    </button>
                  </div>
                </article>
              </SwiperSlide>
            ))}
          </Swiper>

          <div className="flex justify-center gap-4 mt-8">
            <button
              onClick={() => swiperRef.current?.slidePrev()}
              className="group bg-white border-2 border-[#f1a986] text-[#f1a986] p-4 rounded-full hover:bg-[#f1a986] hover:text-white transition-all duration-300"
              aria-label="Previous slide"
            >
              <MdOutlineKeyboardArrowLeft className="w-6 h-6" />
            </button>
            <button
              onClick={() => swiperRef.current?.slideNext()}
              className="group bg-white border-2 border-[#f1a986] text-[#f1a986] p-4 rounded-full hover:bg-[#f1a986] hover:text-white transition-all duration-300"
              aria-label="Next slide"
            >
              <MdOutlineKeyboardArrowRight className="w-6 h-6" />
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default CardComponent;