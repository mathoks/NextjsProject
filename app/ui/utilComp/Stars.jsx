import { Star } from '@mui/icons-material'
import React, { memo } from 'react'

const Stars = memo(function Starss({rating, size, size1 = ''}){
const ReviewStars = () => {
    const stars = new Array(5)
    for (let i = 0; i < 5; i++) {
        if (i < rating) {
            stars[i] = (<li key={i}><Star fontSize='inherit' sx={{color: 'gold'}}/></li>)
        } else {
            stars[i] = (<li key={i}><Star  fontSize='inherit'  sx={{color: 'gray'}} /></li>)
        }
    }
    return stars 
}
  return (
    <div className={`flex space-x-2 text-[14px] items-center + ${size1}`}>
    <p className={size}>{(rating)}</p>
    <ul className='flex space-x-0 '>
      <ReviewStars/>
    </ul>
    </div>
  )
}, (prev, next)=> prev.rating === next.rating)

export default Stars
