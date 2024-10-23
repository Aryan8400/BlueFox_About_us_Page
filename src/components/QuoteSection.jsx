import React from 'react';

const QuoteSection = () => {
  return (
    <div className="py-20 bg-gray-100 flex justify-center">
      <div className="max-w-6xl mx-auto bg-white rounded-lg p-6 md:p-8 shadow-lg flex flex-col md:flex-row items-center md:items-start">
        
        {/* Quote Section */}
        <div className="w-full md:w-1/2 mb-8 md:mb-0 px-4">
          <blockquote className="text-gray-600 text-base sm:text-lg">
            “We are talking about improving the life of a segment that is the largest in our nation, i.e., ‘Small Business Sector,’ the heartbeat of our economy. One of the major aspects holding down the small and medium enterprise (SME) sector is that they hardly have any access to proper technology. Easing this situation will go a long way in nurturing and sustaining SMEs. To let India emerge as one of the brightest economic spots in the coming years, businesses should focus on ways to make cash rather than getting stuck in counting cash. Vyapar basically helps them do business accounting easier with the modern digital way!”
          </blockquote>
        </div>
        
        {/* Single Image Section */}
        <div className="w-full md:w-1/2 flex justify-center md:justify-end px-4">
          <div className="text-center">
            <img 
              src="./public/founder-img.webp" 
              alt="Founders" 
              className="rounded-lg w-56 sm:w-64 md:w-72 h-auto object-cover"
            />
            <h4 className="text-md sm:text-lg font-bold mt-4">Sumit Agarwal & Shubham Agrawal</h4>
            <p className="text-sm sm:text-base text-gray-500">Founders, Vyapar</p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default QuoteSection;