import React from 'react';

const DownloadSection = () => {
  return (
    <div className="bg-gradient-to-r from-red-500 to-yellow-400 py-12 relative overflow-visible">
      <div className="container mx-auto max-w-screen-xl px-4 sm:px-8 lg:px-20 flex flex-col lg:flex-row items-center justify-between">
        
        {/* Text Section */}
        <div className="lg:w-1/2 text-center lg:text-left text-white mb-8 lg:mb-0">
          <p className="text-base sm:text-lg lg:text-xl mb-2">
            We’re thrilled that <strong>Vyapar</strong> has been recognized by Indian Businessmen who have taken it up and made it a success, as a result of which we’re running towards 10 Million installs on the Play Store.
          </p>
          <p className="text-base sm:text-lg lg:text-xl mb-6">
            We hope “Vyapar App” continues to ease the life of our Indian businessmen.
          </p>
          <a href="#download" className="inline-block bg-yellow-400 hover:bg-yellow-500 text-black font-semibold text-sm sm:text-lg rounded-full px-8 py-3 sm:px-10 sm:py-4 shadow-lg transition">
            Download for Desktop <span className="ml-2">⬇️</span>
          </a>
        </div>

        {/* Image Section */}
        <div className="lg:w-1/2 flex justify-center lg:justify-end relative">
          <img 
            src="/banner.png" 
            alt="Vyapar Logo" 
            className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg h-auto object-cover -mt-10 lg:-mt-20" 
            style={{ zIndex: 1 }}
          />
        </div>
      </div>
    </div>
  );
};

export default DownloadSection;