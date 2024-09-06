import { Star, StarHalf } from '@mui/icons-material';
import React, { memo, useMemo } from 'react';

const Stars = memo(function Starss({ rating, size, size1 = '' }) {
  const stars = useMemo(() => {
    const starsArray = new Array(5);

    for (let i = 0; i < 5; i++) {
      const filledStars = Math.floor(rating);
      const halfStar = rating - filledStars >= 0.5;

      if (i < filledStars) {
        starsArray[i] = <li key={i}><Star fontSize='inherit' sx={{ color: 'gold' }} /></li>;
      } else if (i === filledStars && halfStar) {
        starsArray[i] = <li key={i}><StarHalf fontSize='inherit' sx={{ color: 'gold' }} /></li>;
      } else {
        starsArray[i] = <li key={i}><Star fontSize='inherit' sx={{ color: 'gray' }} /></li>;
      }
    }

    return starsArray;
  }, [rating]);

  return (
    <div className={`flex space-x-2 text-[14px] items-center ${size1}`}>
      <p className={size}>{Number(rating).toFixed(1)}</p>
      <ul className='flex space-x-0'>
        {stars}
      </ul>
    </div>
  );
}, (prev, next) => prev.rating === next.rating);

export default Stars;