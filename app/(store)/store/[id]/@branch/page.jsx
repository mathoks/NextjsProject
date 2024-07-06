import BranchCarousel from '@/app/ui/utilComp/BranchCarausal';
import { Shop2Outlined , DescriptionOutlined, LocationOnOutlined, PhoneAndroid, StoreOutlined, StreetviewOutlined} from '@mui/icons-material';
import { headers } from 'next/headers';
import Link from 'next/link';
import React from 'react'


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

const page = ({params:{id}}) => {
  const heads = headers()
  const Arr = [1, 2]
  const Branch = React.memo(function Mybranch() {
  
    return(
       [8,9].map((_, ids) => (
        <section
          key={ids}
          className="flex flex-col text-sm text-gray-800 p-4 container  md:flex md:justify-evenly space-x-2  ring-inset shadow-md rounded-b-md h-fit border-t-2 border-[#6A0DAD]"
        >
          <div className='flex justify-start items-center space-x-3'>
          <span><Shop2Outlined fontSize='inherit' sx={{color:'gray'}}/></span>
          <span>Chizy stores 2</span>
          </div>
          <div className='flex justify-start items-center space-x-3'>
          <span><LocationOnOutlined fontSize='inherit' sx={{color:'gray'}}/></span>
          <span>Alaba international, Lagos Nigeria</span>
          </div>
          <div className='flex justify-start items-center space-x-3'>
          <span><StreetviewOutlined fontSize='inherit' sx={{color:'gray'}}/></span>
          <span>Block A23</span>
          </div>
          <button className="ring ring-inset rounded-md text-white px-2.5 py-1">
            {" "}
            <Link href={`${id}/branch/${encodeURIComponent(id)}`}>Add a branch</Link>
          </button>
        </section>
      )));
    
  }, []);
  
  return (
  
   
  
    
    <BranchCarousel slides={[1,2, 3, 4]} id={id}/>
      
    

  )
}

export default page
