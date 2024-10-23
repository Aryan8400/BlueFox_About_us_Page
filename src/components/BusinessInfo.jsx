import React from 'react';

const BusinessInfo = () => {
  return (
    <div className="py-16 flex items-center bg-white">
      <div className="container mx-auto max-w-screen-xl px-4 sm:px-8 lg:px-16 flex flex-col-reverse lg:flex-row items-center justify-between">
        
        {/* Text Section */}
        <div className="lg:w-1/2 text-center lg:text-left mt-8 lg:mt-0 lg:pl-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Vyapar is a FREE Business Accounting Software
          </h2>
          <p className="text-gray-600 text-base sm:text-lg md:text-xl mb-6">
            Built for Indian small businesses to deal with invoicing, inventory, 
            accounting needs, and much more! The goal is to make a businessman's 
            daily routine less tiring and let them focus more on growing their business, 
            less on paperwork.
          </p>
        </div>

        {/* Image Section */}
        <div className="lg:w-1/2 flex justify-center lg:justify-end lg:pr-16 mb-8 lg:mb-0">
          <img 
            src="./public/invoice.jpg" 
            alt="Phone Mockup with Invoice" 
            className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg h-auto object-contain" 
          />
        </div>
      </div>
    </div>
  );
};

export default BusinessInfo;