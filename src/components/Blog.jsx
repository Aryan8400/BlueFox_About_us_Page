import React from 'react';

const Blog = () => {
  return (
    <div className="container mx-auto px-4 lg:px-16 py-12">
      {/* Blog Title */}
      <h1 className="text-4xl font-bold text-center mb-8">Blog Posts</h1>

      {/* Blog Post 1 */}
      <div className="max-w-4xl mx-auto mb-12">
        <h2 className="text-3xl font-semibold mb-4">
          What is Cash Flow Statement? It’s Uses, Importance, Types
        </h2>
        <p className="text-gray-600 mb-6">by Vyapar / May 16, 2022</p>

        <p className="text-lg text-gray-700 leading-relaxed mb-6">
          As a businessman you are supposed to prepare multiple reports to calculate your business’s financial condition for a given accounting period. Reports like Sales & Revenue reports, financial reports, inventory reports, formal & informal business reports, summarized business reports, GST reports, performance reports, annual reports, etc. are important, but few of them are required to prepare on a daily basis to measure.
        </p>

        <p className="text-blue-500 font-semibold cursor-pointer">Read More</p>
      </div>

      {/* Blog Post 2 */}
      <div className="max-w-4xl mx-auto mb-12">
        <h2 className="text-3xl font-semibold mb-4">
          How to set up online business from home?
        </h2>
        <p className="text-gray-600 mb-6">by Vyapar / April 25, 2022</p>

        <p className="text-lg text-gray-700 leading-relaxed mb-6">
          Do online businesses have a future? Advantages of setting up an online business from home include a lower cost of entry and convenience. In India, the e-commerce industry has seen significant growth. Steps to set up an online business from home in India are quite simple. With the right strategy, you can grow a sustainable business from the comfort of your own home.
        </p>

        <p className="text-blue-500 font-semibold cursor-pointer">Read More</p>
      </div>
      
      {/* Blog Post 3 */}
      <div className="max-w-4xl mx-auto mb-12">
        <h2 className="text-3xl font-semibold mb-4">
        How To Start Janasevana Kendram?
        </h2>
        <p className="text-gray-600 mb-6">by Vyapar / April 25, 2022</p>

        <p className="text-lg text-gray-700 leading-relaxed mb-6">
        Table of Content: Introduction The Goals of Janasevana Kendram Eligibility & Requirements Starting A Janasevana Kendram Infrastructure Required What Are The Steps To Establish A Janasevana Kendram? Blurb The Government of India’s Ministry of Electronics and Information Technology has launched the Common Services Centre (CSC) programme, or Janasevana Kendram. Janasevana Kendram are access points for various electronic services to be…
        </p>

        <p className="text-blue-500 font-semibold cursor-pointer">Read More</p>
      </div>

      {/* Blog Post 4 */}
      <div className="max-w-4xl mx-auto mb-12">
        <h2 className="text-3xl font-semibold mb-4">
        How to start a pooja samagri business?
        </h2>
        <p className="text-gray-600 mb-6">by Vyapar / April 25, 2022</p>

        <p className="text-lg text-gray-700 leading-relaxed mb-6">
        Table of Contents Pooja Samagri Business What are Pooja Samagris? Getting Started with Pooja Samagri Business. Blurb Our culture has a tremendous and important impact on people from all nations and countries. That is why starting a pooja samagri business is the smartest business decision you can ever make. Pooja samagri can be sold online as well for a decent… 
        </p>

        <p className="text-blue-500 font-semibold cursor-pointer">Read More</p>
      </div>

      {/* Blog Post 5 */}
      <div className="max-w-4xl mx-auto mb-12">
        <h2 className="text-3xl font-semibold mb-4">
        How to Start Portfolio Management Services in India?
        </h2>
        <p className="text-gray-600 mb-6">by Vyapar / April 25, 2022</p>

        <p className="text-lg text-gray-700 leading-relaxed mb-6">
        # Whаt is Роrtfоliо Mаnаgement Serviсes? Роrtfоliо Mаnаgement Serviсe (РMS) is а fасility оffered by а роrtfоliо mаnаger with the intent tо асhieve the required rаte оf return within the desired level оf risk. Аn investment роrtfоliо саn be а mix оf stосks, fixed inсоme, соmmоdities, reаl estаte, оther struсtured рrоduсts, аnd саsh. А роrtfоliо mаnаger is а liсensed investment…
        </p>

        <p className="text-blue-500 font-semibold cursor-pointer">Read More</p>
      </div>

      {/* Blog Post 6 - New Content with Image */}
      <div className="max-w-4xl mx-auto mb-12">
        <h2 className="text-3xl font-semibold mb-4">
          How to assign user role permission in Vyapar?
        </h2>
        <p className="text-gray-600 mb-6">by Vyapar / October 19, 2021</p>

        <p className="text-lg text-gray-700 leading-relaxed mb-6">
          Table of Content: User Role Permission Feature How to set “User role permission” in the Vyapar app. Normally, if a business is to be rooted well, then it needs the effort of a team. That may be an owner, admin, salesperson or manager. Each of them has their own roles to build a business well. As an owner, there will...
        </p>
        <p className="text-blue-500 font-semibold cursor-pointer">Read More</p>
        <br>
        </br>
        {/* Image for Blog Post 3 */}
        <img
          src="/Business.jpg"
          alt="Business Ideas in Bangalore"
          className="w-full h-auto mb-6"
        />

      </div>

      {/* Blog Post 7 - New Content with Image */}
      <div className="max-w-4xl mx-auto mb-12">
        <h2 className="text-3xl font-semibold mb-4">
            GST Rules For Startups In India
        </h2>
        <p className="text-gray-600 mb-6">by Vyapar / October 19, 2021</p>

        <p className="text-lg text-gray-700 leading-relaxed mb-6">
        In a move to put all the taxes together under one roof, the Government of India implemented GST, the Goods, and Services Tax, which came into existence on July 1, 2017.  A single tax on goods and services, GST may be one of the most far-reaching economic reforms in India’s history. Previously, there were several taxes that consumers paid on…
        </p>
        <p className="text-blue-500 font-semibold cursor-pointer">Read More</p>
        <br>
        </br>
        {/* Image for Blog Post 3 */}
        <img
          src="/Business1.jpg"
          alt="Business Ideas in Bangalore"
          className="w-full h-auto mb-6"
        />

      </div>
     
    </div>
    
  );
};

export default Blog;