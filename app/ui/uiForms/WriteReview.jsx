'use client'
import { useAppSelector } from '@/app/lib/hooks/hooks'
import React from 'react'
import { connect } from 'react-redux'

const WriteReview = () => {
    const ReviewState = useAppSelector((state)=>state.review.showBox)
    console.log(ReviewState)
  return (
    <div className={` bg-slate-200 grid place-items-center rounded-sm items-center p-2 m-4 ${ReviewState ? 'visible' : 'invisible h-0'}`}>
    <form className='space-y-2 mx-auto'>
      <div className='w-full'>
      <textarea  rows={4} cols={38} autoFocus  className=' bg-white rounded-t-sm w-full p-2'/>
      </div>
     <span className='flex justify-end'>
      <button className='ring-1 px-2.5 py-1 text-blue-400 rounded-full'>submit</button>
      </span>
      </form>
    </div>
  )
}

const mapStateToProps = (state)=>({
    review: state.review.showBox
  })
 
  
  export default connect(mapStateToProps)(WriteReview)

