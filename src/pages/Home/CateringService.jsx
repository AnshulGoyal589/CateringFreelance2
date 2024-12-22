import React from 'react';
import MenuData from './MenuData';
import b2 from '../../assets/b2.avif';

const CateringService = () => {
  return (
    <div className='mt-4 relative mb-16 lg:mb-7'>
      <div>
        <div
          style={{
            backgroundImage: `url(https://www.keydesign-themes.com/etalon/catering/wp-content/uploads/sites/19/2017/06/photo-3.jpg)`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
          className="flex relative flex-col min-h-[400px] py-36 text-center"
        >
          <div className="absolute inset-0 bg-black bg-opacity-40"></div>
          <div className="z-10">
            <h1 className="text-white font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
              Our Menu
            </h1>
            <div className="text-white mt-6 px-4 sm:px-8 md:px-12 lg:px-20">
              <p className="text-lg sm:text-xl md:text-2xl font-medium leading-relaxed text-center">
                Our catering menu incorporates a variety of flavors, reflecting our passion for creative food.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className=" z-[100] top-[75%] sm:top-[75%] md:top-[75%] min-w-full bg-transparent">
        <MenuData />
      </div>
    </div>
  );
};

export default CateringService;
