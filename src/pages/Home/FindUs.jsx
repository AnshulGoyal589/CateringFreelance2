import React from 'react';
import { FaLocationArrow, FaPhone, FaEnvelope } from 'react-icons/fa';

const FindUs = () => {
  return (
    <div className='flex flex-row bg-[#ecece2]'>
      <div className="flex w-full md:w-[40%] py-16 gap-6 flex-col bg-peach justify-between bg-orange-200 p-6">
        <div className="flex font-light flex-col space-y-4 w-full gap-3">
          <h2 className="text-2xl font-bold text-white">HOW TO FIND US</h2>
          <div className='flex flex-col gap-y-7'>
            <div className="ml-3 flex items-center space-x-2 text-white">
              <FaLocationArrow />
              <span>49 Grand Street, Los Angeles</span>
            </div>
            <div className="ml-3 flex items-center space-x-2 text-white">
              <FaPhone />
              <span>(222) 400-630</span>
            </div>
            <div className="ml-3 flex items-center space-x-2 text-white">
              <FaEnvelope />
              <span>contact@etalon-theme.com</span>
            </div>
          </div>
        </div>

        <div className="flex flex-col m space-y-4 w-full mt-8">
          <h2 className="text-2xl font-bold text-white">OPENING HOURS</h2>
          <div className="text-white font-light flex flex-col gap-y-3">
            <div className='w-full font-extralight h-[0.09px] bg-richblack-5'></div>
            <div className='flex justify-between'>
              <p>Monday-Friday</p>
              <p className='font-bold font-edu-sa'> 10:00 - 18:00</p>
            </div>
            <div className='w-full font-extralight h-[0.09px] bg-richblack-5'></div>
            <div className='flex justify-between'>
              <p>Saturday</p>
              <p className='font-bold font-edu-sa'> 10:00 - 14:00</p>
            </div>
            <div className='w-full font-extralight h-[0.09px] bg-richblack-5'></div>
            <div className='flex justify-between'>
              <p>Sunday</p>
              <p className='font-bold font-edu-sa'>Closed</p>
            </div>
            <div className='w-full font-extralight h-[0.09px] bg-richblack-5'></div>
          </div>
        </div>
      </div>
      <div className='md:w-[60%] w-0 bg-white'></div>
    </div>
  );
};

export default FindUs;
