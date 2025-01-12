import React, { useRef, useEffect, useState } from 'react';
import CountUp from 'react-countup';

const Band = () => {
  const bandRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); 
        }
      },
      { threshold: 0.5 } 
    );

    if (bandRef.current) {
      observer.observe(bandRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div className='w-full bg-[#ecece2]' ref={bandRef} >
      <div className="flex flex-wrap justify-between gap-8 p-8 w-[100vw] box-border">
        <div className="text-center p-4 flex-1 min-w-[200px] flex-shrink-0">
          {isVisible && (
            <CountUp start={0} end={20} duration={3} suffix="+" className="text-3xl font-semibold text-[#f1a986]" />
          )}
          <br />
          <span className="text-lg text-gray-500">SKILLED CHEFS</span>
        </div>

        <div className="text-center p-4 flex-1 min-w-[200px] flex-shrink-0">
          {isVisible && (
            <CountUp start={0} end={120} duration={3} suffix="+" className="text-3xl font-semibold text-[#f1a986]" />
          )}
          <br />
          <span className="text-lg text-gray-500">HAPPY CLIENTS</span>
        </div>

        <div className="text-center p-4 flex-1 min-w-[200px] flex-shrink-0">
          {isVisible && (
            <CountUp start={0} end={15} duration={3} suffix="+" className="text-3xl font-semibold text-[#f1a986]" />
          )}
          <br />
          <span className="text-lg text-gray-500">YEARS EXPERIENCE</span>
        </div>

        <div className="text-center p-4 flex-1 min-w-[200px] flex-shrink-0">
          {isVisible && (
            <CountUp start={0} end={230} duration={3} suffix="+" className="text-3xl font-semibold text-[#f1a986]" />
          )}
          <br />
          <span className="text-lg text-gray-500">FINISHED PROJECTS</span>
        </div>
      </div>
    </div>
  );
};

export default Band;
