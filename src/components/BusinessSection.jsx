import React from 'react';

const BusinessSection = () => {
  return (
    <div className="py-16 bg-white">
      <div className="container mx-auto max-w-screen-xl px-4 sm:px-8 lg:px-16 flex flex-col-reverse lg:flex-row items-center justify-between">
        
        {/* Text Section */}
        <div className="lg:w-1/2 text-center lg:text-left lg:pr-12 mt-8 lg:mt-0">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-900 mb-6">
            With Vyapar, a Businessman can effortlessly
          </h2>
          <ul className="list-disc text-gray-600 text-sm sm:text-base md:text-lg space-y-3">
            <li><strong>Become GST compatible.</strong></li>
            <li>Manage all parties in one single place and market business much easier.</li>
            <li>View how business is performing instantly.</li>
            <li><strong>Create, print/share customized invoices.</strong></li>
            <li>Set up "Auto Backup" and secure business accounting data against accidental data loss.</li>
            <li>Expired items can be easily selected for upcoming sales by tracking individual units of the item by batch numbers.</li>
          </ul>
        </div>

        {/* Image Section */}
        <div className="lg:w-1/2 flex justify-center lg:justify-end lg:pl-12">
          <img 
            src="./public/vyapbusiness.jpg" 
            alt="Vyapar Business Management" 
            className="rounded-lg shadow-lg w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl h-auto object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default BusinessSection;