import React from 'react';

const SmeSection = () => {
  return (
    <div className="py-16 bg-gray-100 flex justify-center">
      <div className="max-w-6xl mx-auto bg-white rounded-lg p-8 shadow-lg flex flex-col md:flex-row items-center md:items-start">
        
        {/* Image Section */}
        <div className="w-full md:w-1/2 mb-8 md:mb-0 flex justify-center">
          <img 
            src="./public/Sme.png" 
            alt="SME Illustration" 
            className="rounded-lg max-w-full h-auto"
          />
        </div>
        
        {/* Text Section */}
        <div className="w-full md:w-1/2 md:pl-8">
          <h3 className="text-2xl font-bold text-gray-800 mb-4">Small/Medium Business (SME)</h3>
          <p className="text-gray-600 mb-4">
            Even today, <span className="font-bold">70% SMEs</span> in India still create bills on paper. Being that, most of their productive time is consumed in making manual entries and calculations. When small things go wrong, the entire business goes down, simply because there is no place to fall back. Not having the resources can really wear out the business owner driving them away from doing what matters most. 
          </p>
          <p className="text-gray-600">
            <span className="font-bold">Small Business Accounting Software needs a Digital Upgrade.</span> An upgrade that is simple yet efficient. We are trying to bring in a simpler solution that works for them and hence VYAPAR!
          </p>
        </div>

      </div>
    </div>
  );
};

export default SmeSection;