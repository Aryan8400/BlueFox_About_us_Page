import React from 'react';

const FeaturesSection = () => {
  return (
    <div className="py-16 bg-gradient-to-r from-red-400 to-red-500 text-white">
      <div className="max-w-6xl mx-auto px-6 md:px-8 lg:px-12 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        
        {/* Features - Grid with icons */}
        <div className="grid grid-cols-2 gap-6">
          
          {/* Platform */}
          <div className="bg-white text-center text-black p-6 rounded-lg shadow-md">
            <div className="mb-4">
              <img src="./public/platform.png" alt="Platforms Icon" className="w-18 h-24 mx-auto" />
            </div>
            <h3 className="font-bold text-lg sm:text-xl">Platforms</h3>
            <p className="text-sm sm:text-lg">Android & Windows</p>
          </div>
          
          {/* Mobile */}
          <div className="bg-white text-center text-black p-6 rounded-lg shadow-md">
            <div className="mb-4">
              <img src="./public/mobile.png" alt="Mobile Icon" className="w-18 h-20 mx-auto" />
            </div>
            <h3 className="font-bold text-lg sm:text-xl">Mobile</h3>
            <p className="text-sm sm:text-lg">100% FR</p>
          </div>
          
          {/* Language */}
          <div className="bg-white text-center text-black p-6 rounded-lg shadow-md">
            <div className="mb-4">
              <img src="./public/languages.png" alt="Language Icon" className="w-18 h-20 mx-auto" />
            </div>
            <h3 className="font-bold text-lg sm:text-xl">Language</h3>
            <p className="text-sm sm:text-lg">English, Hindi</p>
          </div>
          
          {/* Devices */}
          <div className="bg-white text-center text-black p-6 rounded-lg shadow-md">
            <div className="mb-4">
              <img src="/mop.png" alt="Devices Icon" className="w-18 h-20 mx-auto" />
            </div>
            <h3 className="font-bold text-lg sm:text-xl">Devices</h3>
            <p className="text-sm sm:text-lg">Mobile, Desktop, Tablet</p>
          </div>
          
        </div>
        
        {/* Right Side Description */}
        <div className="bg-white text-black p-8 sm:p-12 lg:p-16 rounded-lg shadow-md">
          <p className="text-base sm:text-lg">
            <b>A Business Accounting App</b> like Vyapar (available both as Android/Desktop App) most importantly sets up the business financial data at all times 100% accurately. It works offline, helping one use it without being connected to unreliable internet. Vyapar App paints the picture of what they own (assets), how much they owe (liabilities), and what are their business values (equity). It serves as a basis for proper planning of the business accounting activities.
          </p>
        </div>
        
      </div>
    </div>
  );
};

export default FeaturesSection;