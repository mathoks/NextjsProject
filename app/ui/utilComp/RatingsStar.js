import React from 'react';
import {Star} from '@mui/icons-material'; // Assuming you have a Star component

function RatingStar({ value = 0 }) {
  const stars = Array.from({ length: 5 }, (_, i) => i + 1);

  return (
    <div className="rating flex space-x-4 justify-center">
      {stars.map((starValue) => (
        <div key={starValue}>
          <input
            type="radio"
            name="rating"
            id={`star${starValue}`}
            value={starValue}
            className="sr-only"
            checked={value === starValue}
          />
          <label htmlFor={`star${starValue}`}>
            <Star filled={starValue <= value} />
          </label>
        </div>
      ))}
    </div>
  );
}

export default RatingStar;
              
