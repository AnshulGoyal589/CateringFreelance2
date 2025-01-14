import React from 'react';
import { Globe2 } from 'lucide-react';

const InternationalCatering = () => {
  const events = [
    {
      client: "JSW PAINTS",
      location: "Hyatt Regency, Sydney, Australia",
      type: "Corporate Catering"
    },
    {
      client: "ASIAN PAINTS",
      location: "Bali, Indonesia",
      type: "Corporate Catering"
    },
    {
      client: "JSW PAINTS",
      location: "Budapest, Hungary",
      type: "Corporate Catering"
    }
  ];

  return (
    <div className="w-full max-w-6xl mt-14 mx-auto p-8 bg-gradient-to-b from-[#fffbeb] to-white">
      <div className="text-center mb-8">
        <div className="flex items-center justify-center gap-3 mb-2">
          <Globe2 className="text-[#d97706]" size={32} />
          <h2 className="text-3xl font-bold text-[#92400e]">International Catering Excellence</h2>
        </div>
        <div className="w-24 h-1 bg-[#d97706] mx-auto mb-6"></div>
      </div>

      <div className="text-center mb-12 max-w-3xl mx-auto">
        <p className="text-gray-700 text-lg leading-relaxed">
          Our global reach and unwavering dedication to excellence ensure a seamless and memorable
          dining experience for every occasion, no matter the location.
        </p>
        <p className="text-gray-700 text-lg mt-4 font-medium">
          The Savoury Soiree is proud to cater for prestigious international events, including:
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {events.map((event, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
            <h3 className="text-xl font-bold text-[#92400e] mb-2">{event.client}</h3>
            <div className="h-px bg-[#fde68a] mb-4"></div>
            <p className="text-gray-600 mb-2">{event.type}</p>
            <p className="text-gray-800 font-medium">{event.location}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InternationalCatering;