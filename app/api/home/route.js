// import { Pool } from "@neondatabase/serverless";
// import { PrismaNeon } from "@prisma/adapter-neon";
// import { PrismaClient } from "@prisma/client";
// import { unstable_cache } from "next/cache";
// import { NextResponse } from "next/server";




// // Create a single instance of the Prisma client for efficiency
// let prisma;
// const neon = new Pool({
//   connectionString: process.env.POSTGRES_PRISMA_URL,
// });

// const adapter = new PrismaNeon(neon);

// /**
//  * GET /api/store/
//  * @route GET /api/store.
//  * @returns {Promise<void>}
//  */

// export async function GET(req) {
    
// const path = req.nextUrl.searchParams.get('path')
// const tag = req.nextUrl
// console.log(path, tag)
//   if(!prisma){
//     prisma = new PrismaClient({adapter})
//   }

//   try {
//     const getUsers = unstable_cache(
//    (async()=>{
//      const stores = await prisma.store.findMany({
//       // Returns all user fields
//       include: {
//         product: {
//           select: {
//             id:true,
//             storeId: true,
//             category: true,
//             price:true,
//             name: true,
//             description: true,
//             prodImage: {
//               select: { id: true,
//                 image: true
//               }
//             },
//             availability:true,
//             comment: true
//           },
//         },
        
//         storeReviews: {
//           select: {
//             id: true,
//             comment: true,
//             review: true
//           }
//         }
//       },
//     })
    
   
//     if(Array.isArray(stores)){
//         return NextResponse.json({data: stores})
//     }
//     else throw new Error('cant query database');
//   })(), ['store'], {tags: ['store', 'home']})
  
//   } catch (error) { 
//    return Response.error("Internal server error");
//   }
// }


import { Pool } from "@neondatabase/serverless";
import { PrismaNeon } from "@prisma/adapter-neon";
import { PrismaClient } from "@prisma/client";
import { unstable_cache } from "next/cache";
import { NextResponse } from "next/server";

let prisma;
const neon = new Pool({
  connectionString: process.env.POSTGRES_PRISMA_URL,
});

const adapter = new PrismaNeon(neon);

if (!prisma) {
  prisma = new PrismaClient({ adapter });
}
export async function GET(req) {
  try {
    const getUsers = unstable_cache(
      async () => {
        const stores = await prisma.store.findMany({
          include: {
            product: {
              select: {
                id: true,
                storeId: true,
                category: true,
                price: true,
                name: true,
                description: true,
                prodImage: {
                  select: { id: true, image: true },
                },
                availability: true,
                comment: true,
              },
            },
            storeReviews: {
              select: {
                id: true,
                comment: true,
                review: true,
              },
            },
          },
        });

        if (Array.isArray(stores)) {
          return  stores;
        } else {
          throw new Error("Couldn't query database");
        }
      },
      ["store"],
      { tags:['store'], revalidate: 60 * 60 * 1} // Cache for 1 hour (adjust as needed)
    );

    const cachedStores = await getUsers();
    
    return NextResponse.json(cachedStores);
  } catch (error) {
    // Log the error for debugging
    return NextResponse.json({ error: "Internal Server Error" }, {
      status: 500,
    });
  }
}

// Call this function before your API route handlers are executed
