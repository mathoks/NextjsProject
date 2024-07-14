
import { auth } from '@/auth';
import dynamic from 'next/dynamic';
import { headers } from 'next/headers';

import React from 'react'


const  BranchCarousel= dynamic(()=>import('@/app/ui/utilComp/BranchCarausal') , {ssr: false}) 

// model Branche {
//   id String   @id @default(cuid())
//   branchName String? @map("branch_name")
//   branchAddress String? @map("branch_address")
//   state String?
//   branchId String @map("branch_id") @unique
//   user Store @relation(fields: [branchId], references: [id])
//   products ProductBranch[]
//   @@map("branche")
// }

const page = async ({params:{id, storeOwner}}) => {
  const header = headers()
  const domain = header.get("host");
  const session = await auth()
  const response =  await fetch(
    `http://${domain}/api/store/${storeOwner}/${id}/`,
    
    )
    const branchInfo =await response.json() 
    if(branchInfo?.data?.branches?.length === 0){
      return (
      <div className='px-4'>
      <p className='p-6 mx-auto'>no branches availiable</p>
          <span className='flex justify-end'>
          <button className={`ring-1 rounded-full px-2.5 py-1.5 ${id === session.user?.id ? 'visible' : "invisible"}`}>Add a branch</button>
          </span>
        </div>)

    }

  return (
  
     
    
  
    
    <BranchCarousel slides={[1,2, 3, 4]} id={id}/>
      
    

  )
}

export default page
