import { Pool } from "@neondatabase/serverless";
import { PrismaNeon } from "@prisma/adapter-neon";
import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";




// Create a single instance of the Prisma client for efficiency
let prisma;
const neon = new Pool({
  connectionString: process.env.POSTGRES_PRISMA_URL,
});

const adapter = new PrismaNeon(neon);

/**
 * GET /api/store/
 * @route GET /api/store.
 * @returns {Promise<void>}
 */

export async function GET(req) {
    

  if(!prisma){
    prisma = new PrismaClient({adapter})
  }

  try {
    const stores = await prisma.store.findMany({
      // Returns all user fields
      include: {
        product: {
          select: {
            id:true,
            storeId: true,
            category: true,
            price:true,
            name: true,
            description: true,
            prodImage: {
              select: { id: true,
                image: true
              }
            },
            availability:true,
            comment: true
          },
        },
        
        storeReviews: {
          select: {
            id: true,
            comment: true,
            review: true
          }
        }
      },
    })
    
   
    if(Array.isArray(stores)){
        return NextResponse.json({data: stores})
    }
    else throw new Error('cant query database')
  } catch (error) { 
   return Response.error("Internal server error");
  }
}


