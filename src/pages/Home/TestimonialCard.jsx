import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { MdOutlineKeyboardArrowLeft, MdOutlineKeyboardArrowRight } from "react-icons/md";

const TestimonialCard = () => {
  const swiperRef = useRef(null);

  const testimonials = [
    { id: 1, title: "ALWAYS GRATEFUL", text: "The service was exceptional, and the staff went above and beyond to meet my expectations. ", name: "Elaine T.", location: "Kansas City, Missouri", image: "https://res.cloudinary.com/daa3y840x/image/upload/v1735053053/t2_cgvoce.png" },
    { id: 2, title: "SIMPLY AMAZING", text: "I had an amazing experience! Everything was seamless and exceeded my expectations.", name: "John D.", location: "Chicago, Illinois", image: "https://res.cloudinary.com/daa3y840x/image/upload/v1735053051/t1_ninxtd.png" },
    { id: 3, title: "BEST EXPERIENCE", text: "This was by far the best experience I've ever had. Highly professional and efficient. ", name: "Sarah K.", location: "New York, NY", image: "https://res.cloudinary.com/daa3y840x/image/upload/v1735053058/t4_hjy8hl.png" },
    { id: 4, title: "HIGHLY RECOMMENDED", text: "I can't recommend this enough. The attention to detail and care were outstanding.", name: "Mike L.", location: "Austin, Texas", image: "https://res.cloudinary.com/daa3y840x/image/upload/v1735053055/t3_skuta2.png" },
    { id: 5, title: "VERY SATISFIED", text: "I'm extremely satisfied with the results. Their team truly knows what they're doing. ", name: "Nina P.", location: "Seattle, Washington", image: "https://res.cloudinary.com/daa3y840x/image/upload/v1735053051/t1_ninxtd.png" },
    { id: 6, title: "WONDERFUL SERVICE", text: "The level of service I received was wonderful. Every interaction was pleasant and efficient.", name: "Oliver R.", location: "Denver, Colorado", image: "https://res.cloudinary.com/daa3y840x/image/upload/v1735053058/t4_hjy8hl.png" },
  ];

  return (
    <div className="flex flex-col items-center w-full bg-gray-100 py-10">
      <Swiper
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        spaceBetween={30}
        loop={true}
        modules={[Navigation]}
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
        className="w-full max-w-[1200px] h-auto"
      >
        {testimonials.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="h-full flex flex-col items-center overflow-hidden">
              <div className="p-6 flex flex-col justify-center min-h-[200px] bg-white items-center text-center gap-4">
                <h1 className="font-bold text-lg text-richblack-700">{slide.title}</h1>
                <p className="text-richblack-100 leading-relaxed">{slide.text}</p>
              </div>
              <div className="w-32 h-32 rounded-full mt-6 overflow-hidden border-4 border-grey-100">
                <img
                  className="w-full h-full object-cover"
                  alt={`Image of ${slide.name}`}
                  src={slide.image}
                />
              </div>
              <div className="bg-[#] w-full py-4 text-richblack-200 text-center">
                <p className="font-semibold text-richblack-900">{slide.name}</p>
                <p className="text-sm">{slide.location}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="flex justify-center gap-4 mt-6">
        <button
          onClick={() => swiperRef.current?.slidePrev()}
          className="bg-richblack-300 text-white px-6 py-3 rounded-full hover:bg-richblack-600 transition-all duration-200 flex items-center justify-center"
        >
          <MdOutlineKeyboardArrowLeft size={24} />
        </button>
        <button
          onClick={() => swiperRef.current?.slideNext()}
          className="bg-richblack-300 text-white px-6 py-3 rounded-full hover:bg-richblack-600 transition-all duration-200 flex items-center justify-center"
        >
          <MdOutlineKeyboardArrowRight size={24} />
        </button>
      </div>
    </div>
  );
};

export default TestimonialCard;
