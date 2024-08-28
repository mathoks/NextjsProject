import { Star } from '@mui/icons-material'
import React, { memo } from 'react'

const Stars = memo(function Starss({rating}){
const ReviewStars = () => {
    const stars = new Array(5)
    for (let i = 0; i < 5; i++) {
        if (i < rating) {
            stars[i] = (<li><Star key={i} fontSize='inherit' sx={{color: 'gold'}}/></li>)
        } else {
            stars[i] = (<li><Star fontSize='inherit' key={i} sx={{color: 'gray'}} /></li>)
        }
    }
    return stars 
}
  return (
    <div className='flex space-x-2 text-[14px] items-center'>
    <p >{rating}</p>
    <ul className='flex space-x-0 '>
      <ReviewStars/>
    </ul>
    </div>
  )
}, (prev, next)=> prev.rating === next.rating)

export default Stars
