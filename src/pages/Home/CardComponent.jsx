import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { MdOutlineKeyboardArrowLeft, MdOutlineKeyboardArrowRight } from "react-icons/md";
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

const CardComponent = () => {
  const swiperRef = useRef(null);
  const navigateAndScroll = useNavigateAndScroll();

  const slidesData = [
    {
      image: "https://res.cloudinary.com/daa3y840x/image/upload/v1734955084/bdda474e-5221-432b-9f8a-076db1e9a26b_ppxtgy.jpg",
      heading: 'Luxurious Presentation',
      subheading: 'A perfect harmony of visual splendour and gastronomic delight, ensuring every dish is a feast for the senses.'
    },
    {
      image: "https://res.cloudinary.com/daa3y840x/image/upload/v1735051511/s4_wklccw.jpg",
      heading: 'Gourmet Creations',
      subheading: "Artfully crafted menus showcasing the finest ingredients and inspired by the world's most exquisite cuisines."
    },
    
    {
      image: "https://www.keydesign-themes.com/etalon/catering/wp-content/uploads/sites/19/2017/06/2.jpg",
      heading: 'Tailored Culinary Experiences',
      subheading: 'Bespoke menus designed to complement your tastes, themes, and dietary preferences.'
    },
    {
      image: "https://www.keydesign-themes.com/etalon/catering/wp-content/uploads/sites/19/2017/06/3.jpg",
      heading: 'Savory Sides',
      subheading: 'Our carefully curated selection of sides is crafted to perfectly complement every meal, making each bite an experience to savor.'
    }

  ];

  return (
    <div className="relative w-full bg-transparent px-4 sm:px-8 md:px-12 lg:px-16 py-16">
      <div className="max-w-7xl mx-auto">
        <Swiper
          onSwiper={(swiper) => (swiperRef.current = swiper)}
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
              <div className="h-[500px] group relative bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>
                
                <div className="relative h-[45%] overflow-hidden">
                  <img
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                    alt={slide.heading}
                    src={slide.image}
                  />
                </div>

                <div className="p-6 h-[55%] flex flex-col justify-between bg-white">
                  <div>
                    <h3 className="font-serif text-2xl font-semibold text-gray-900 group-hover:text-[#f1a986] transition-colors duration-300 mb-4">
                      {slide.heading}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {slide.subheading}
                    </p>
                  </div>
                  
                  <button 
                    onClick={() => navigateAndScroll("/about-us")}
                    className="mt-6 w-full px-6 py-3 bg-transparent border-2 border-[#f1a986] text-[#f1a986] hover:bg-[#f1a986] hover:text-white rounded-md transition-all duration-300 font-medium"
                  >
                    Discover More
                  </button>
                </div>
              </div>
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
    </div>
  );
};

export default CardComponent;