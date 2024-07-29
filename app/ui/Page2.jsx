import React from 'react'
import { createTable } from '../lib/utills/createTable'


const Page2 = ({data}) => {
  if(!data) return <div>Product not found</div>
  const Table  = React.useMemo(()=>{
    let i=0;
    for (const [key, value] of Object.entries(data)) {
        
    return ( <tr key={3}>
        <th>{key}</th>
        <td>{value}</td>
      </tr>)
    }
  }, [])

console.log(data)
  return (
    <div className='min-h-[18rem]'>
      <span>Product Details</span>
      <div id='details'>
      <table className='w-full'>
      <tbody>
       {Table}
       </tbody>
       <tfoot>
          <tr>
            <td colSpan='2'>
              <button >Create Table</button>
            </td>
          </tr>
       </tfoot>
      </table>
      </div>
    </div>
  )
}

export default Page2