import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper/modules';
import s1 from '../../assets/s1.jpg';
import s2 from '../../assets/s2.jpg';
import s3 from '../../assets/s3.jpg';
import s4 from '../../assets/s4.jpg';
import { MdOutlineKeyboardArrowLeft, MdOutlineKeyboardArrowRight } from "react-icons/md";

const CardComponent = () => {
  const swiperRef = useRef(null);

  const slidesData = [
    {
      image: s1,
      heading: 'Savory Sides',
      subheading:
        'Explore the world of flavors with our curated collection of delicious sides to complement any meal. Dive into a savory adventure!'
    },
    {
      image: s2,
      heading: 'Tempting Desserts',
      subheading:
        'Indulge in the sweetness of life with our tempting desserts that promise to satisfy your cravings and leave you wanting more.'
    },
    {
      image: s3,
      heading: 'Flavorful Vegetables',
      subheading:
        'Discover vibrant, fresh, and flavorful vegetables that transform any dish into a masterpiece of taste and nutritional value.'
    },
    {
      image: s4,
      heading: 'Beverages & More',
      subheading:
        'Quench your thirst and elevate your moments with our refreshing beverages and more, crafted to delight every palate.'
    }
  ];

  return (
    <div className="flex flex-col items-center w-full bg-white px-4 sm:px-8 md:px-12 lg:px-16 py-10">
      <Swiper
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        spaceBetween={20}
        loop={true}
        modules={[Navigation, Pagination]}
        className="w-full h-[500px]"
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
        }}
      >
        {slidesData.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="h-full flex flex-col items-center bg-white shadow-md rounded-lg overflow-hidden group">
              <div className="w-full h-[40%]">
                <img
                  className="w-full h-full object-fill rounded-t-lg"
                  alt={slide.heading}
                  src={slide.image}
                />
              </div>

              <div className="p-4 flex flex-col justify-center items-center text-center gap-4">
                <h1 className="font-bold text-xl sm:text-xl md:text-xl text-gray-800 group-hover:text-[#f1a986] transition-all duration-200">
                  {slide.heading}
                </h1>
                <p className="text-sm sm:text-base md:text-lg text-gray-600 leading-relaxed">
                  {slide.subheading}
                </p>
                <button className="border px-4 py-2 transition-all duration-200 border-[#f1a986] text-[#f1a986] hover:bg-[#f1a986] hover:text-white rounded-md text-sm sm:text-base lg:text-lg xl:text-xl">
                  Read More
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="flex pb-10 justify-center gap-4 lg:mt-8 mt-2 bg-transparent">
        <button
          onClick={() => swiperRef.current?.slidePrev()}
          className="bg-[#f1a986] text-white px-6 py-3 rounded-full hover:bg-[#e08b66] transition-all duration-200"
        >
          <MdOutlineKeyboardArrowLeft size={24} />
        </button>
        <button
          onClick={() => swiperRef.current?.slideNext()}
          className="bg-[#f1a986] text-white px-6 py-3 rounded-full hover:bg-[#e08b66] transition-all duration-200"
        >
          <MdOutlineKeyboardArrowRight size={24} />
        </button>
      </div>
    </div>
  );
};

export default CardComponent;
