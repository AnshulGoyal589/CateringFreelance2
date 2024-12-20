import React, { useEffect } from 'react';
import Scard from './Scard';
import { FaUtensils, FaClipboard, FaUsers, FaHandshake, FaTrophy, FaMicrophone } from 'react-icons/fa';
import './styles.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Service = () => {
  const servicesInfo = [
    {
      icon: <FaUtensils style={{ color: '#f1a986' }} />,
      title: 'Culinary team',
      description: 'Our chefs offer exquisite culinary experiences for your events.',
    },
    {
      icon: <FaClipboard style={{ color: '#f1a986' }} />,
      title: 'Event planning',
      description: 'We manage every detail to ensure your event runs smoothly.',
    },
    {
      icon: <FaUsers style={{ color: '#f1a986' }} />,
      title: 'Service staff',
      description: 'Professional staff ready to assist and serve your guests.',
    },
    {
      icon: <FaHandshake style={{ color: '#f1a986' }} />,
      title: 'Equipment rentals',
      description: 'Rent high-quality equipment for your event needs.',
    },
    {
      icon: <FaTrophy style={{ color: '#f1a986' }} />,
      title: 'Award winning',
      description: 'Our services are award-winning and recognized for excellence.',
    },
    {
      icon: <FaMicrophone style={{ color: '#f1a986' }} />,
      title: 'Entertainment',
      description: 'Engage your guests with entertainment that keeps the energy high.',
    },
  ];

  useEffect(() => {
    AOS.init({
      duration: 400,
      once: false,
    });
  }, []);

  return (
    <div className="flex flex-col mt-4 py-20 bg-white">
      <div className="text-center mb-8 px-4">
        <h1 className="text-black text-[40px]">Catering Services</h1>
        <p className="text-black text-xl">
          Our expert culinary chefs offer exquisite catering services for any events or functions.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-4">
        {servicesInfo.map((service, index) => (
          <div
            key={index}
            className="flex gap-5 p-4 bg-gray-100 rounded-lg shadow-md"
            data-aos="fade-up"
            data-aos-delay={index*40} 
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

export default Service;