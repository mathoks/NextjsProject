import { headers } from 'next/headers';
import Link from 'next/link';
import React from 'react'



const page = ({params:{id}}) => {
  const heads = headers()
  
  const Branch = React.memo(function Mybranch() {
  
    return(
       [8,9].map((_, ids) => (
        <section
          key={ids}
          className="flex flex-col p-4 container  md:flex md:justify-evenly space-x-2  ring-inset shadow-md rounded-b-md h-fit border-t-2 border-[#6A0DAD]"
        >
          <p>you have no branch added</p>
  
          <button className="bg-[#6A0DAD] text-white px-2.5 py-1">
            {" "}
            <Link href={`${id}/branch/${encodeURIComponent(id)}`}>Add a branch</Link>
          </button>
        </section>
      )));
    
  }, []);
  
  return (
    <div className='bg-white p-4'>
    <h2 className='text-gray-800 '>Branches</h2>
    <div className='container  overflow-x-scroll w-[95%] flex md:mt-10  text-center p-4 space-x-4 text-gray-900'>
    
    <Branch/>
      </div>
    </div>

  )
}

export default page
