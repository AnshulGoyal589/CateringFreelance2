import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
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

const News = () => {
  const data = [
    {
      image: "https://www.keydesign-themes.com/etalon/catering/wp-content/uploads/sites/19/2017/06/blog6.jpg",
      heading: 'Catering Excellence at National Hydroelectric Power Corporation',
      date: '2021-05-06',
      text: 'The landscape divides into segments of bright land, a symbol of how even in divided times, light finds its way in the dark.',
      alt: 'NHPC corporate catering event showcasing Indian cuisine',
      slug: 'nhpc-catering-services'
    },
    {
      image: "https://res.cloudinary.com/daa3y840x/image/upload/a_-90/v1734955228/2a5defad-016a-4ed0-adde-666cf5a09751_fyql2l.jpg",
      heading: 'Border Road Organisation Partners with The Savoury Soiree',
      date: '2024-01-17',
      text: 'The air seems to change with the seasons, a constant reminder of the forces that shape our world beyond our control.',
      alt: 'BRO event catering setup with traditional Indian dishes',
      slug: 'bro-catering-partnership'
    },
    {
      image: "https://www.keydesign-themes.com/etalon/catering/wp-content/uploads/sites/19/2017/06/blog5.jpg",
      heading: 'Central Water Commission Celebrates with Premium Catering',
      date: '2023-05-28',
      text: 'In the month of May, signs appear more clearly as the warmth of spring helps things grow and evolve, just as new beginnings often do.',
      alt: 'CWC corporate event featuring gourmet catering services',
      slug: 'cwc-premium-catering'
    },
    {
      image: "https://www.keydesign-themes.com/etalon/catering/wp-content/uploads/sites/19/2017/06/blog4.jpg",
      heading: 'National Thermal Power Corporation Chooses The Savoury Soiree',
      date: '2022-09-17',
      text: 'As the grass sways, a greater openness emerges, inviting us to explore and discover the richness hidden within the natural world.',
      alt: 'NTPC event with elaborate catering setup',
      slug: 'ntpc-catering-services'
    },
  ];

  const navigateAndScroll = useNavigateAndScroll();
  
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return date.toLocaleDateString('en-US', options);
  };

  const firstSet = data.slice(0, 2);
  const secondSet = data.slice(2);

  // Schema.org structured data
  const newsSchema = {
    "@context": "https://schema.org",
    "@type": "Blog",
    "name": "The Savoury Soiree Catering News",
    "description": "Latest updates about The Savoury Soiree's premium catering services for Government of India organizations",
    "blogPost": data.map(post => ({
      "@type": "BlogPosting",
      "headline": post.heading,
      "image": post.image,
      "datePublished": post.date,
      "articleBody": post.text
    }))
  };

  return (
    <>
      <Helmet>
        <title>Government Catering Services News | The Savoury Soiree</title>
        <meta name="description" content="Stay updated with The Savoury Soiree's premium catering services for government organizations including NHPC, BRO, CWC, and NTPC." />
        <meta name="keywords" content="government catering, corporate catering, Indian catering services, NHPC catering, BRO events" />
        <script type="application/ld+json">
          {JSON.stringify(newsSchema)}
        </script>
      </Helmet>

      <section className="bg-[#ecece2] mt-5 py-6 px-4 sm:px-8 lg:px-12" aria-label="Latest News">
        <header className="flex flex-col items-center text-center mb-8">
          <h1 className="text-2xl overflow-clip md:text-3xl font-semibold text-richblack-800 mb-2">
            Latest Catering News & Events
          </h1>
          <p className="text-base italic md:text-lg text-richblack-200 leading-relaxed max-w-2xl">
            THE SAVOURY SOIREE CATERING FOR THE GOVERNMENT OF INDIA
          </p>
        </header>
      
        <div className="w-full" role="region" aria-label="News Carousel">
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
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 h-full">
                  {set.map((slide, slideIndex) => (
                    <article
                      key={slideIndex}
                      className="flex flex-col bg-white rounded-lg shadow-md overflow-hidden h-full"
                    >
                      <div className="relative w-full pt-[60%]">
                        <img
                          className="absolute top-0 left-0 w-full h-full object-cover"
                          alt={slide.alt}
                          src={slide.image}
                          loading="lazy"
                        />
                      </div>
                      <div className="flex flex-col flex-grow p-4">
                        <h2 className="font-semibold text-richblack-600 text-lg mb-2">
                          <a href={`/news/${slide.slug}`} className="hover:text-[#f1a986] transition-colors">
                            {slide.heading}
                          </a>
                        </h2>
                        <time dateTime={slide.date} className="text-sm text-richblack-400 mb-3">
                          {formatDate(slide.date)}
                        </time>
                        <p className="text-gray-500 text-sm flex-grow">
                          {slide.text}
                        </p>
                        <button 
                          className="mt-4 px-4 py-2 bg-[#f1a986] text-white rounded-md hover:bg-[#d9886a] transition w-full sm:w-auto"
                          onClick={() => navigateAndScroll("/about-us")}
                          aria-label={`Read more about ${slide.heading}`}
                        >
                          Read More
                        </button>
                      </div>
                    </article>
                  ))}
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
    </>
  );
};

export default News;