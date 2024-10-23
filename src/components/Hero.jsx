import React from 'react';

const Hero = () => {
  return (
    <div className="bg-gradient-to-r from-red-500 to-red-400 py-12 sm:py-16 md:py-20 flex items-center">
      <div className="container mx-auto max-w-screen-xl px-6 sm:px-8 lg:px-32 flex flex-col lg:flex-row items-center justify-between">
        {/* Text Section */}
        <div className="lg:w-1/2 text-center lg:text-left lg:pr-16 mb-8 lg:mb-0">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 sm:mb-6">
            GST Billing App
          </h1>
          <p className="text-white text-base sm:text-lg md:text-xl mb-6 sm:mb-8">
            Download our GST billing app to manage your business effortlessly.
          </p>
          <a 
            href="#" 
            className="inline-block bg-yellow-400 text-black py-2 sm:py-3 px-5 sm:px-6 rounded-lg text-base sm:text-lg shadow-md hover:bg-yellow-500 transition duration-300 ease-in-out transform hover:scale-105"
          >
            Download for Desktop
          </a>
        </div>

        {/* Image Section */}
        <div className="lg:w-1/2 flex justify-center lg:justify-end lg:pl-16">
          <img 
            src="./public/Inv.png" 
            alt="GST Billing App Screenshot" 
            className="w-full max-w-xs sm:max-w-md md:max-w-lg lg:max-w-xl h-auto object-contain" 
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;