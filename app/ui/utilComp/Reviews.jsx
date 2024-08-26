 'use client'
import { useAppSelector } from '@/app/lib/hooks/hooks';
import { is } from 'immutable'; // Assuming you're using Immutable.js for state management
import React, { useMemo, useEffect, useState, memo, startTransition } from 'react'; // Use useState instead of useOptimistic

const Reviews = memo(function ReviewsCol(props) {
  const comment = useAppSelector(state => state.review.comment);
  const initialOptimisticReviews = useMemo(() => {
    // Handle initial state here
    if (props.reviews) {
      return [...props.reviews]; // Use props.reviews for initial data
    }
    return []; // Or an empty array if no initial reviews
  }, [props.reviews]);

  const [optimisticReviews, setOptimisticReviews] = useState(initialOptimisticReviews);

  useEffect(() => {
    if (comment !== '') {
      startTransition(() => {
        setOptimisticReviews(prevState => [...prevState, { review: comment }]);
      });
    }
  }, [comment]); // Only update on comment change

  return (
    <div className="space-y-4 px-4">
      <p>What People are saying about this Product</p>
      <ul className="space-y-2 grid grid-cols-1 gap-4 md:grid-cols-2">
        {optimisticReviews?.map((rev, id) => (
          <li className='ring-1 p-2  rounded-sm' key={id}>{rev.review}</li>
        ))}
      </ul>
     
        <p className=' text-blue-500 font-medium'>See all reviews</p>
    
    </div>
  );
}, (prevProps, nextProps) => is(prevProps.reviews, nextProps.reviews)); // Memoization based on reviews

export default Reviews;