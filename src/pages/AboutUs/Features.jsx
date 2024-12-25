import React, { useEffect } from 'react';
import {FaUtensils, FaUsers,  FaWallet,FaAward, FaLaptop, FaClock } from 'react-icons/fa';
import { FaTachometerAlt } from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Features = () => {
    const servicesInfo = [
        {
          icon: <FaTachometerAlt style={{ color: '#f1a986' }} />,
          title: 'Fast Service',
          description: 'Enjoy quick and seamless service to make your dining experience exceptional.',
        },
        {
          icon: <FaUsers style={{ color: '#f1a986' }} />,
          title: 'Expert Team',
          description: 'A team of highly skilled professionals dedicated to ensuring perfection.',
        },
        {
          icon: <FaWallet style={{ color: '#f1a986' }} />,
          title: 'Affordable Prices',
          description: 'Get premium services at a price that fits your budget.',
        },
        {
          icon: <FaAward style={{ color: '#f1a986' }} />,
          title: 'Award Winning',
          description: 'Recognized for delivering unparalleled quality and outstanding experiences.',
        },
        {
          icon: <FaLaptop style={{ color: '#f1a986' }} />,
          title: 'Modern Technology',
          description: 'Leverage cutting-edge technology to enhance your events and services.',
        },
        {
          icon: <FaClock style={{ color: '#f1a986' }} />,
          title: 'Always Open',
          description: 'We are available around the clock to cater to your needs anytime.',
        },
      ];

  useEffect(() => {
    AOS.init({
      offest:100,
      duration: 1000, 
      once: true, 
    });
  }, []);

  return (
    <div className="flex lg:min-h-[300px] flex-col mt-4 py-20 bg-[#f7f7f7]">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-4">
        {servicesInfo.map((service, index) => (
          <div
            key={index}
            className="flex gap-5 p-4 bg-gray-100 rounded-lg shadow-md"
            data-aos="fade-up"  
            data-aos-delay={index*10} 
          >
            <div className="icon text-4xl mb-4">{service.icon}</div>
            <div>
              <h3 className="text-lg font-semibold">{service.title}</h3>
              <p className="text-richblack-300">{service.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Features;