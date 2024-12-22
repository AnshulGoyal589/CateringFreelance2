import AOS from 'aos';
import 'aos/dist/aos.css'; 
import React, { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import b2 from "../../assets/b2.avif";
import img1 from '../../assets/img1.jpg';
import CountUp from 'react-countup';

const AboutUs = () => {
  const { ref, inView } = useInView({
    triggerOnce: true, 
    threshold: 0.5,
  });

  useEffect(() => {
    AOS.init({
      duration: 100, 
    });
  }, []);

  return (
    <div>
      <div className='relative mb-24 md:mb-96'>
        <div
          className="relative flex md:flex-col flex-row min-h-[350px] py-5 justify-start items-center text-center text-white"
          style={{
            backgroundImage: `url(${b2})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-40 backdrop-blur-md"></div>

          <div className="relative z-10 px-4 md:px-6">
            <h1 className="font-bold text-3xl sm:text-4xl md:text-5xl mb-4 sm:mb-6">About Us</h1>
            <p className="text-xl sm:text-2xl font-semibold leading-8">
              Our catering goal is to help make your event a memorable experience for your guests.
            </p>
          </div>
        </div>

        <div className="mx-auto relative w-[90%] md:w-[80%] lg:w-[70%] flex flex-col md:flex-row min-h-[500px] bg-white rounded-lg shadow-lg overflow-hidden md:absolute md:top-2/3 lg:right-[9rem] md:right-[5.5em]">
          <div className="min-w-[100%] md:min-w-[30%]">
            <img src={img1} alt="Image 1" className="h-full w-full object-cover" />
          </div>

          <div className="flex flex-col gap-7 px-6 py-8 md:px-12 md:py-16 font-semibold bg-white">
            <h1 className="text-2xl sm:text-3xl font-richblack-900 leading-snug">
              The premium food experience from small to large corporate events or weddings and parties
            </h1>

            <div ref={ref} className="flex flex-col md:flex-row gap-16 text-center md:text-left">
              <div className="text-4xl font-bold text-peach">
                {inView && <CountUp end={125} duration={2} />} <br />
                <span className="text-lg font-normal text-gray-600">Clients</span>
              </div>
              <div className="text-4xl  font-bold text-peach">
                {inView && <CountUp end={35} duration={2} />} <br />
                <span className="text-lg font-normal text-gray-600">Menu</span>
              </div>
              <div className="text-4xl font-bold text-peach">
                {inView && <CountUp end={630} duration={2} />} <br />
                <span className="text-lg font-normal text-gray-600">Events</span>
              </div>
            </div>

            <p className="font-light text-gray-500 leading-7">
              Mus accumsan venenatis hac curabitur per quis parturient vel ut a sit scelerisque a sociis posuere penatibus.
              Nunc risus est nulla morbi, egestas lobortis dui maecenas lacinia qui adipiscing, eget purus morbi,
              pellentesque ipsum tortor ipsum.
            </p>

            <button
              data-aos="zoom-in"
              className="w-fit px-6 py-3 bg-peach text-white font-bold border border-peach rounded transition-all duration-300 hover:bg-white hover:text-peach"
            >
              Read More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
