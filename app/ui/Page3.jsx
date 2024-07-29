import React from 'react'

const Page3 = ({data}) => {
if(!data) return <div className='p-4'>No Reviews yet be the first to drop a review</div>;
  return (
    <div className='min-h-[18rem]'>
      <span>What People are saying about this Product</span>
    </div>
  )
}

export default Page3
