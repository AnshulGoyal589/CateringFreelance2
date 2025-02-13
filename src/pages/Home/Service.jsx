import React, { useEffect } from 'react';
import { FaUtensils, FaClipboard, FaUsers, FaHandshake, FaTrophy, FaMicrophone } from 'react-icons/fa';
import { Helmet } from 'react-helmet';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './styles.css';

const Service = () => {
  const servicesInfo = [
    {
      icon: <FaUtensils style={{ color: '#f1a986' }} />,
      title: 'Professional Culinary Team',
      description: 'Expert chefs crafting exquisite dining experiences for corporate events, weddings, and special occasions.',
      ariaLabel: 'Culinary team services',
      id: 'culinary-team'
    },
    {
      icon: <FaClipboard style={{ color: '#f1a986' }} />,
      title: 'Comprehensive Event Planning',
      description: 'End-to-end event management ensuring seamless execution of your special occasions.',
      ariaLabel: 'Event planning services',
      id: 'event-planning'
    },
    {
      icon: <FaUsers style={{ color: '#f1a986' }} />,
      title: 'Professional Service Staff',
      description: 'Trained hospitality professionals providing impeccable service throughout your event.',
      ariaLabel: 'Service staff information',
      id: 'service-staff'
    },
    {
      icon: <FaHandshake style={{ color: '#f1a986' }} />,
      title: 'Premium Equipment Rentals',
      description: 'High-quality catering equipment and supplies for events of all sizes.',
      ariaLabel: 'Equipment rental options',
      id: 'equipment-rentals'
    },
    {
      icon: <FaTrophy style={{ color: '#f1a986' }} />,
      title: 'Award-Winning Catering',
      description: 'Recognized excellence in catering services and culinary innovation.',
      ariaLabel: 'Awards and recognition',
      id: 'awards'
    },
    {
      icon: <FaMicrophone style={{ color: '#f1a986' }} />,
      title: 'Event Entertainment',
      description: 'Curated entertainment options to enhance your event experience.',
      ariaLabel: 'Entertainment services',
      id: 'entertainment'
    },
  ];

  useEffect(() => {
    AOS.init({
      offset: 0,
      duration: 400,
      once: true,
    });
  }, []);

  // Schema.org structured data for services
  const servicesSchema = {
    "@context": "https://schema.org",
    "@type": "CateringService",
    "name": "The Savoury Soiree Catering Services",
    "description": "Professional catering services including culinary team, event planning, staff, equipment rentals, and entertainment.",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Catering Services",
      "itemListElement": servicesInfo.map((service, index) => ({
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": service.title,
          "description": service.description
        },
        "position": index + 1
      }))
    }
  };

  return (
    <>
      <Helmet>
        <title>Professional Catering Services | The Savoury Soiree</title>
        <meta 
          name="description" 
          content="Discover our comprehensive catering services including professional culinary team, event planning, trained staff, equipment rentals, and entertainment solutions."
        />
        <meta 
          name="keywords" 
          content="catering services, event catering, culinary team, event planning, catering staff, equipment rental, event entertainment"
        />
        <script type="application/ld+json">
          {JSON.stringify(servicesSchema)}
        </script>
      </Helmet>

      <section className="flex flex-col pt-8 pb-10 bg-[#ecece2]" aria-label="Catering Services">
        <header className="text-center mb-8 px-4">
          <h1 className="text-black text-[60px] mb-4">
            Premium Catering Services
          </h1>
          <p className="text-black text-xl max-w-3xl mx-auto">
            Experience excellence in catering with our comprehensive range of professional services, 
            delivered by expert culinary teams for memorable events and functions.
          </p>
        </header>

        <div 
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-4 overflow-hidden lg:min-h-fit"
          role="list"
          aria-label="Catering services list"
        >
          {servicesInfo.map((service, index) => (
            <article
              key={index}
              id={service.id}
              className="flex gap-5 p-4 bg-gray-100 rounded-lg shadow-md max-h-[300px] overflow-hidden"
              data-aos="fade-up"
              role="listitem"
              aria-labelledby={`service-title-${index}`}
            >
              <div 
                className="icon flex justify-center items-center text-4xl sm:text-3xl md:text-4xl mb-4 w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20"
                aria-hidden="true"
              >
                {service.icon}
              </div>
              <div className="flex flex-col justify-between h-full">
                <h2 
                  id={`service-title-${index}`}
                  className="text-lg font-semibold"
                >
                  {service.title}
                </h2>
                <p className="text-richblack-300 text-sm">
                  {service.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
};

export default Service;