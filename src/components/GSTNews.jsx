import React from 'react';

const GSTNews = () => {
  return (
    <div className="container mx-auto px-4 lg:px-16 py-12">
      {/* Blog Title */}
      <h1 className="text-4xl font-bold text-center mb-8">Blog Posts</h1>

      {/* GST 1*/}
      <div className="max-w-4xl mx-auto mb-12">
        <h2 className="text-3xl font-semibold mb-4">
          GST NEWS
        </h2>
        <h2 className="text-3xl font-semibold mb-4">
            Read All About GST News & Updates
        </h2>


        <p className="text-lg text-gray-700 leading-relaxed mb-6">
        A place where you get to read the latest GST news, GST rate changes & more. Become a well-informed smart Vyapari :) Take your business to the next level with the help of the right information.
        </p>
        
        {/* Image for Blog Post 3 */}
        <img
          src="/GST1.jpg"
          alt="Business Ideas in Bangalore"
          className="w-full h-auto mb-6"
        />
      </div>

      {/* GST post 2 */}
      <div className="max-w-4xl mx-auto mb-12">
        <h2 className="text-3xl font-semibold mb-4">
        5 Easy Steps to Generate E-Way Bill on the GSTN Portal
        </h2>
        <p className="text-gray-600 mb-6">by Vyapar / October 19, 2021</p>

        <p1 className="text-lg text-gray-700 leading-relaxed mb-6">
        Under GST, transporters should carry an  E Way Bill when moving goods whose value exceeds Rs. 50,000 from one place to another. GST E way bill needs to be generated on the E Way Bill Portal # Steps to Generate E-Way Bill Step 1: Login to E-Way Bill Portal at https://ewaybill.nic.in/ with your login details. Note: To generate E way Bill, it is…
        </p1>
        <p className="text-blue-500 font-semibold cursor-pointer">Read More</p>
        <br>
        </br>
        <img
          src="/GST2.jpg"
          alt="Business Ideas in Bangalore"
          className="w-full h-auto mb-6"
        />

      </div>
    </div>
  );
};

export default GSTNews;