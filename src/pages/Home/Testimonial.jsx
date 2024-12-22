import React from 'react';
import TestimonialCard from './TestimonialCard';

const Testimonial = () => {
  return (
    <div className="bg-gray-50 py-6 sm:py-8 md:py-12 lg:py-16">
      <div className='mt-12 max-w-7xl mx-auto px-6 lg:px-8'>
        <h1 className='text-center overflow-clip text-3xl sm:text-4xl font-semibold text-richblack-800 mb-6 sm:mb-8'>
          Testimonials
        </h1>
        <p className='text-center text-lg sm:text-xl text-richblack-200 leading-relaxed max-w-3xl mx-auto'>
          We are very proud of the service we provide and stand by every product we carry. Read our testimonials from our happy customers.
        </p>
      </div>
      <TestimonialCard />
    </div>
  );
};

export default Testimonial;
