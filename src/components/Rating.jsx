import React, { useState } from 'react';

const Rating = () => {
  const [rating, setRating] = useState(4);  // Current rating
  const [hover, setHover] = useState(null); // Handle hover effect
  const totalVotes = 1476;  // Total number of votes
  const averageRating = 4.45;  // Average rating

  const handleClick = (rate) => {
    setRating(rate);
    // Additional logic can be added to handle the rating submission
  };

  return (
    <div className="bg-gray-100 p-6 rounded-lg text-center shadow-md max-w-md mx-auto mt-12 mb-12"> {/* Add margin-top and margin-bottom */}
      <h2 className="text-2xl font-semibold mb-4">How Useful Was This Post?</h2>
      <p className="mb-4">Click on a star to rate it!</p>
      
      {/* Star Rating Section */}
      <div className="flex justify-center mb-4">
        {[1, 2, 3, 4, 5].map((star) => (
          <svg
            key={star}
            className={`w-10 h-10 sm:w-12 sm:h-12 cursor-pointer transition-colors duration-200 ease-in-out ${
              star <= (hover || rating) ? 'text-yellow-400' : 'text-gray-300'
            }`}
            fill="currentColor"
            onMouseEnter={() => setHover(star)}
            onMouseLeave={() => setHover(null)}
            onClick={() => handleClick(star)}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.974a1 1 0 00.95.69h4.18c.969 0 1.371 1.24.588 1.81l-3.38 2.455a1 1 0 00-.364 1.118l1.287 3.974c.3.921-.755 1.688-1.539 1.118L10 13.278l-3.38 2.455c-.784.57-1.839-.197-1.54-1.118l1.287-3.974a1 1 0 00-.364-1.118L2.62 9.401c-.783-.57-.38-1.81.588-1.81h4.18a1 1 0 00.95-.69l1.286-3.974z" />
          </svg>
        ))}
      </div>
      
      <p className="text-gray-600">
        Average rating <span className="font-bold">{averageRating}</span> / 5. Vote count: <span className="font-bold">{totalVotes}</span>
      </p>
    </div>
  );
};

export default Rating;