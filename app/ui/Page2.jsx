import React from 'react'



const Page2 = ({data}) => {
  if(Object.keys(data).length === 0) {
    console.log('no data')
    return <div className='p-4 '>Product details not provided</div>;
  }
  const Table  =  Object.entries(data).map((entry, id)=>{
    
      return ( 
      <tr className='space-y-8 ' key={id}>
      <th className='text-left font-semibold odd:bg-zinc-50 even:bg-red-200 pb-4 first-letter:capitalize'>{entry[0]}</th>
      <td className=' odd:bg-zinc-50 even:bg-white pb-4 text-slate-600'>{entry[0] === 'status' && entry[1] !== null ? entry[1].replace(/_/g, ' ') : entry[1] || '-'}</td>
      </tr>)
  })
  
  return (
    <div className='min-h-[18rem] px-4'>
      <div id='details'>
      <table className='w-full text-[0.9rem] space-y-8'>
      <tbody className='space-y-8'>
       {Table}
       </tbody>
       <tfoot >
          <tr className='pt-12 text-slate-600'>
            <td colSpan='2'>
              <span  className='text-[0.75rem] pt-4'><span className='text-red-400'>*</span>These values are not veted be sure to confirm</span><br/>
              <span  className='text-[0.75rem] pt-4'><span className='text-red-400'>*</span>units of weight are in kg</span>

            </td>
          </tr>
       </tfoot>
      </table>
      </div>
    </div>
  )
}

export default Page2