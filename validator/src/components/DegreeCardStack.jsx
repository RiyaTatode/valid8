import React, { useState, useEffect } from 'react';

const DegreeCardStack = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  // Replace these with your actual certificate image paths
  const certificateImages = [
    "/images/certificates/computer-science.jpg",
    "/images/certificates/business-admin.jpg",
    "/images/certificates/mechanical-eng.jpg",
    "/images/certificates/psychology.jpg",
    "/images/certificates/graphic-design.jpg"
  ];

  const degrees = [
    {
      title: "Computer Science",
      institution: "Stanford University",
      year: "2023",
      image: certificateImages[0],
      color: "border-blue-200"
    },
    {
      title: "Business Administration",
      institution: "Harvard Business School",
      year: "2022",
      image: certificateImages[1],
      color: "border-green-200"
    },
    {
      title: "Mechanical Engineering",
      institution: "MIT",
      year: "2021",
      image: certificateImages[2],
      color: "border-red-200"
    },
    {
      title: "Psychology",
      institution: "Yale University",
      year: "2020",
      image: certificateImages[3],
      color: "border-purple-200"
    },
    {
      title: "Graphic Design",
      institution: "Rhode Island School of Design",
      year: "2019",
      image: certificateImages[4],
      color: "border-pink-200"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isAnimating) {
        handleNext();
      }
    }, 2500);
    
    return () => clearInterval(interval);
  }, [isAnimating]);

  const handleNext = () => {
    if (isAnimating) return;
    
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % degrees.length);
      setIsAnimating(false);
    }, 300);
  };

  return (
    <div className="w-full max-w-5xl mx-auto py-12 px-4">
      <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">
        Verified Degrees & Certificates
      </h2>
      
      <div className="relative h-80">
        {/* Card Stack */}
        <div 
          className="relative w-full h-full flex items-center justify-center cursor-pointer"
          onClick={handleNext}
        >
          {degrees.map((degree, index) => {
            const position = (index - currentIndex + degrees.length) % degrees.length;
            const isActive = position === 0;
            const isNext = position === 1;
            const isPrevious = position === degrees.length - 1;
            
            let transform = '';
            let opacity = 'opacity-0';
            let zIndex = 'z-0';
            let scale = 'scale-75';
            let rotate = 'rotate-0';
            
            if (isActive) {
              transform = 'translate-x-0';
              opacity = 'opacity-100';
              zIndex = 'z-30';
              scale = 'scale-100';
              rotate = 'rotate-0';
            } else if (isNext) {
              transform = 'translate-x-44';
              opacity = 'opacity-80';
              zIndex = 'z-20';
              scale = 'scale-90';
              rotate = 'rotate-3';
            } else if (isPrevious) {
              transform = 'translate-x-44';
              opacity = 'opacity-80';
              zIndex = 'z-20';
              scale = 'scale-90';
              rotate = '-rotate-3';
            } else if (position < currentIndex) {
              transform = 'translate-x-80';
              opacity = 'opacity-40';
              zIndex = 'z-10';
              scale = 'scale-80';
              rotate = 'rotate-6';
            } else {
              transform = 'translate-x-80';
              opacity = 'opacity-40';
              zIndex = 'z-10';
              scale = 'scale-80';
              rotate = '-rotate-6';
            }
            
            return (
              <div
                key={index}
                className={`absolute w-72 h-52 transition-all duration-300 ease-in-out ${transform} ${opacity} ${zIndex} ${scale} ${rotate}`}
              >
                <div className={`w-full h-full bg-white rounded-lg shadow-xl overflow-hidden border-4 ${degree.color} transform transition-transform duration-300 hover:scale-105`}>
                  {/* Certificate Image */}
                  <div className="w-full h-36 bg-gray-100 overflow-hidden">
                    <img 
                      src={degree.image} 
                      alt={degree.title}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.target.style.display = 'none';
                        e.target.nextSibling.style.display = 'flex';
                      }}
                    />
                    {/* Fallback if image fails to load */}
                    <div className="w-full h-full hidden items-center justify-center bg-gradient-to-br from-gray-100 to-gray-200">
                      <div className="text-center">
                        <div className="w-16 h-16 mx-auto bg-gradient-to-r from-blue-400 to-purple-500 rounded-full flex items-center justify-center mb-2">
                          <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <p className="text-xs font-medium text-gray-600">Certificate Preview</p>
                      </div>
                    </div>
                  </div>
                  
                  {/* Degree Info */}
                  <div className="p-3">
                    <h3 className="text-sm font-bold text-gray-800 truncate">{degree.title}</h3>
                    <p className="text-xs text-gray-600 truncate">{degree.institution}</p>
                    <span className="text-xs text-gray-500">{degree.year}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Dots Indicator */}
      <div className="flex justify-center mt-8 space-x-2">
        {degrees.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              if (!isAnimating && index !== currentIndex) {
                setIsAnimating(true);
                setCurrentIndex(index);
                setTimeout(() => setIsAnimating(false), 300);
              }
            }}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === currentIndex ? 'bg-blue-600 scale-125' : 'bg-gray-300 hover:bg-gray-400'
            }`}
          />
        ))}
      </div>

      <p className="text-center text-sm text-gray-500 mt-4">Click anywhere to view next certificate</p>
    </div>
  );
};

export default DegreeCardStack;