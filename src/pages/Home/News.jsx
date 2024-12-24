import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';


const News = () => {
  const data = [
    {
      image: "https://res.cloudinary.com/daa3y840x/image/upload/v1734955040/3ec390db-ec7f-4ded-ab46-47be424715b8_bz9uak.jpg",
      heading: 'LAND LIGHTS LET BE DIVIDED',
      date: '2004-05-06',
      text: 'The landscape divides into segments of bright land, a symbol of how even in divided times, light finds its way in the dark.',
    },
    {
      image: "https://res.cloudinary.com/daa3y840x/image/upload/a_-90/v1734955228/2a5defad-016a-4ed0-adde-666cf5a09751_fyql2l.jpg",
      heading: 'SEASONS OVER BEARING AIR',
      date: '2004-01-17',
      text: 'The air seems to change with the seasons, a constant reminder of the forces that shape our world beyond our control.',
    },
    {
      image: "https://res.cloudinary.com/daa3y840x/image/upload/v1734955032/fe792f76-ba07-4f55-a2c3-09b071045c4b_o6sb3k.jpg",
      heading: 'SIGNS LIKENESS FOR MAY',
      date: '2004-05-28',
      text: 'In the month of May, signs appear more clearly as the warmth of spring helps things grow and evolve, just as new beginnings often do.',
    },
    {
      image: "https://res.cloudinary.com/daa3y840x/image/upload/v1734955165/93bb8b09-bc18-488a-9e65-07bc18d1e71d_lt33dr.jpg",
      heading: 'GREATER OPEN AFTER GRASS',
      date: '2004-09-17',
      text: 'As the grass sways, a greater openness emerges, inviting us to explore and discover the richness hidden within the natural world.',
    },
    {
      image: "https://res.cloudinary.com/daa3y840x/image/upload/v1735052986/n5_gm9qjt.jpg",
      heading: 'GATHERED WAS DIVIDE SECOND',
      date: '2005-02-13',
      text: 'After division, something remarkable happens: the pieces are gathered back together, each one taking its rightful place.',
    },
    {
      image:"https://res.cloudinary.com/daa3y840x/image/upload/v1734955004/c001ae3e-e551-4bb8-b620-397eceb5a906_rw0szv.jpg",
      heading: 'CREATED LIGHTS WHOSE DAYS',
      date: '2024-03-14',
      text: 'From the creation of lights, the days unfold with possibilities, each one more vibrant and full of purpose than the last.',
    },
  ];

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return date.toLocaleDateString('en-US', options);
  };

  const firstSet = data.slice(0, 3);
  const secondSet = data.slice(3);

  return (
    <div className="bg-[#f5f4f0] mt-5 py-6 px-4 sm:px-8 lg:px-12">
      <div className="flex flex-col items-center text-center mb-8">
        <h1 className="text-2xl overflow-clip md:text-3xl font-semibold text-richblack-800 mb-2">
          Latest News
        </h1>
        <p className="text-base md:text-lg text-richblack-200 leading-relaxed max-w-2xl">
          Catch all the latest news, events, updates, and inspiration on our blog.
        </p>
      </div>
      
      <div className="w-full">
        <Swiper
        style={{
          "--swiper-pagination-color": "#f1a986",
          "--swiper-pagination-bullet-inactive-color": "#838894",

        }}
          slidesPerView={1}
          spaceBetween={20}
          loop={true}
          modules={[Pagination]}
          pagination={{ clickable: true }}
          className="w-full min-h-screen sm:min-h-0 sm:h-full"
        >
          {[firstSet, secondSet].map((set, index) => (
            <SwiperSlide key={index} className="pb-12">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 h-full">
                {set.map((slide, slideIndex) => (
                  <div
                    key={slideIndex}
                    className="flex flex-col bg-white rounded-lg shadow-md overflow-hidden h-full"
                  >
                    <div className="relative w-full pt-[60%]">
                      <img
                        className="absolute top-0 left-0 w-full h-full object-cover"
                        alt={slide.heading}
                        src={slide.image}
                      />
                    </div>
                    <div className="flex flex-col flex-grow p-4">
                      <h2 className="font-semibold text-richblack-600 text-lg mb-2">
                        {slide.heading}
                      </h2>
                      <p className="text-sm text-richblack-400 mb-3">
                        {formatDate(slide.date)}
                      </p>
                      <p className="text-gray-500 text-sm flex-grow">
                        {slide.text}
                      </p>
                      <button className="mt-4 px-4 py-2 bg-[#f1a986] text-white rounded-md hover:bg-[#d9886a] transition w-full sm:w-auto">
                        Read More
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default News;