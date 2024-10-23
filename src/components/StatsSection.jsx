import React from 'react';

const StatsSection = () => {
  return (
    <div className="py-16 bg-gray-100 flex justify-center">
      <div className="max-w-5xl mx-auto text-center">
        
        {/* Heading */}
        <h2 className="text-3xl font-bold text-gray-800 mb-12">
          Adopt Right Technology for your Business
        </h2>
        
        {/* Stats Boxes */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 justify-items-center">
          
          {/* Downloads */}
          <div className="bg-white rounded-lg p-12 shadow-lg w-80">
            <div className="flex justify-center mb-6">
              <img src="./public/download.png" alt="Downloads Icon" className="w-17 h-17 mr-2" />
            </div>
            <p className="text-lg font-medium text-gray-600">Downloads</p>
            <p className="text-2xl font-bold text-gray-800">10M+</p>
          </div>
          
          {/* Play Store Ratings */}
          <div className="bg-white rounded-lg p-12 shadow-lg w-80">
            <div className="flex justify-center mb-6">
              <img src="./public/play.png" alt="Ratings Icon" className="w-17 h-17 mr-2" />
            </div>
            <p className="text-lg font-medium text-gray-600">Play Store Ratings</p>
            <p className="text-2xl font-bold text-gray-800">4.7 out of 5 stars</p>
          </div>
          
          {/* Made in India */}
          <div className="bg-white rounded-lg p-12 shadow-lg w-80">
            <div className="flex justify-center mb-6">
              <img src="./public/made_in.png" alt="Made in India Icon" className="w-17 h-17 mr-2" />
            </div>
            <p className="text-lg font-medium text-gray-600">Made in</p>
            <p className="text-2xl font-bold text-gray-800">India</p>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default StatsSection;